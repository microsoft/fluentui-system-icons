# Copyright (c) Microsoft Corporation.
# Licensed under the MIT license.

import json
import os
import shutil
from collections import defaultdict
from collections import namedtuple

FluentIconAsset = namedtuple('FluentIconAsset', ['name', 'path', 'metadata'])

LIBRARY_NAME = 'FluentIcon'


def to_camel_case(snake_str):
    components = snake_str.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])


RESERVED_WORDS = ['repeat', 'import', 'class']

ICON_PREFIX = "ic_fluent_"
IMAGE_FORMAT = "svg"

def get_icon_name(file_name):
    return file_name.replace(f".{IMAGE_FORMAT}", '').replace('__', '_').replace('_ltr_', '_').replace('_rtl_', '_').replace('_ltr', '').replace('_rtl', '')


def bucket_array(array, bucket_size):
    output = []
    current = []

    for item in array:
        current.append(item)
        if len(current) >= bucket_size:
            output.append(current)
            current = []

    if len(current) != 0:
        output.append(current)

    return output


def xc_image_data_for_file_name(file_name, locale, metadata):
    output = {
        "idiom": "universal",
        "filename": file_name
    }
    if locale is not None:
        output["locale"] = locale

    if metadata.get("directionType") == "mirror":
        # iOS will mirror in this configuration from ltr
        output["language-direction"] = "left-to-right"
    elif metadata.get("directionType") == "unique":
        if metadata["singleton"] == "LTR":
            output["language-direction"] = "left-to-right"
        elif metadata["singleton"] == "RTL":
            output["language-direction"] = "right-to-left"

    if "_ltr" in file_name:
        output["language-direction"] = "left-to-right"
    elif "_rtl" in file_name:
        output["language-direction"] = "right-to-left"

    return output


def create_icon_set(fluent_icon_assets, original_icon_names, icon_assets_path):
    print("create_icon_set")
    for fluent_icon_asset in fluent_icon_assets:
        language_metadata = fluent_icon_asset.metadata.get("language")
        languages = []
        if language_metadata:
            for language_group in language_metadata:
                for language in language_group["locale"]:
                    languages.append(language)

        # If we only have one localized icon, disable localization support
        if languages == ["en"]:
            languages = []

        files = os.listdir(os.path.join(fluent_icon_asset.path, IMAGE_FORMAT.upper()))
        icon_names = set()
        for file in files:
            icon_names.add(file.replace("_ltr", "").replace("_rtl", "").replace(f".{IMAGE_FORMAT}", ""))

        for icon_name in icon_names:
            if icon_name in original_icon_names:
                continue

            original_icon_names.add(icon_name)

            files_for_size_and_style = []
            for file in files:
                if icon_name in file:
                    files_for_size_and_style.append(file)

            imageset_path = os.path.join(icon_assets_path, "{icon_name}.imageset".format(icon_name=icon_name))
            os.mkdir(imageset_path)
            for file_name in files_for_size_and_style:
                shutil.copyfile(os.path.join(fluent_icon_asset.path, IMAGE_FORMAT.upper(), file_name), os.path.join(imageset_path, file_name))

            supported_languages = []
            for language in languages:
                if language in supported_languages:
                    # Ignore duplicates
                    continue

                # Xcode is specific about the capitalization used for locales.
                # "bg" -> "bg"
                # "bg-bg" -> "bg-BG"
                # "sr-latn" -> "sr-Latn"
                # If it is too specific it won't be supported by iOS or Mac so we can ignore it.
                # "sr-latn-rs"
                locale_components = language.split("-")
                if len(locale_components) == 3:
                    print(f"DEBUG: Unused localization {icon_name} {language}")
                    continue
                elif len(locale_components) == 2:
                    if len(locale_components[1]) == 2:
                        asset_locale = locale_components[0] + "-" + locale_components[1].upper()
                    else:
                        asset_locale = locale_components[0] + "-" + locale_components[1].title()
                else:
                    asset_locale = language

                localized_icon_path = os.path.join(fluent_icon_asset.path, language, IMAGE_FORMAT.upper(), file_name)
                if os.path.exists(localized_icon_path):
                    shutil.copyfile(localized_icon_path, os.path.join(imageset_path, language + "_" + file_name))
                    supported_languages.append(language)

            imageset_contents_path = os.path.join(imageset_path, "Contents.json")

            with open(imageset_contents_path, 'w') as imageset:
                rendering_intent = "template"
                if icon_name.endswith("_color") or icon_name.startswith("ic_fluent_flag_pride"):
                    rendering_intent = "original"

                images = []
                for file_name in files_for_size_and_style:
                    images.append(xc_image_data_for_file_name(file_name, locale=None, metadata=fluent_icon_asset.metadata))

                contents = {
                    "images": images,
                    "info": {
                        "version": 1,
                        "author": "xcode"
                    },
                    "properties": {
                        "template-rendering-intent": rendering_intent,
                        "preserves-vector-representation": True
                    }
                }

                if len(supported_languages):
                    contents["properties"]["localizable"] = True

                for language in sorted(supported_languages):
                    loc_image_data = []
                    if language == "zh":
                    # For the Chinese locale, explicitly differentiate between Simplified Chinese (zh_CN) and Traditional Chinese (zh_TW)
                    # While Apple's Automatic Localization in its Asset Catalogs support a superset Chinese locale id `zh`, we're adding two -
                    # even more explicit - locale ids pertaining to this language. But this doesn't mean that we need two separate .svg assets.
                    # Instead add the same zh_ic_fluent_ file under the two available Chinese Locale sets by adjusting the Contents.json metadata file.
                        loc_image_data.append(xc_image_data_for_file_name(language + "_" + file_name, locale="zh_CN", metadata=fluent_icon_asset.metadata))
                        loc_image_data.append(xc_image_data_for_file_name(language + "_" + file_name, locale="zh_TW", metadata=fluent_icon_asset.metadata))
                    else:
                        loc_image_data.append(xc_image_data_for_file_name(language + "_" + file_name, locale=language, metadata=fluent_icon_asset.metadata))
                    contents["images"].extend(loc_image_data)

                imageset.write(json.dumps(contents, indent=2, sort_keys=True))


def process_assets():
    print("Generating iOS xcassets directories and code")

    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    assets_dir = os.path.join(project_root, "assets")

    icon_assets = []
    for file_name in os.listdir(assets_dir):
        if file_name == ".DS_Store":
            continue
        icon_assets_path = os.path.join(assets_dir, file_name)
        metadata_path = os.path.join(icon_assets_path, "metadata.json")
        metadata = {}
        if os.path.exists(metadata_path):
            with open(metadata_path) as metadata_json:
                metadata = json.loads(metadata_json.read())

        if " LTR" in file_name or " RTL" in file_name:
            # Old file format for ltr/rtl
            continue

        icon_assets.append(FluentIconAsset(
            name=file_name, 
            path=icon_assets_path, 
            metadata=metadata
        ))

    ios_directory = os.path.join(project_root, "ios")

    icon_assets_path = os.path.join(ios_directory, LIBRARY_NAME + "s", "Assets", "IconAssets.xcassets")
    if os.path.exists(icon_assets_path):
        shutil.rmtree(icon_assets_path)
    os.mkdir(icon_assets_path)

    original_icon_names = set()
    create_icon_set(icon_assets, original_icon_names, icon_assets_path)

    # Generate BUILD.gn for GN build system
    gn_path = os.path.join(ios_directory, "BUILD.gn")
    if os.path.exists(gn_path):
        os.remove(gn_path)

    imagesets = sorted(os.listdir(icon_assets_path))

    with open(gn_path, 'w+') as gn_file:
        gn_file.write("#\n")
        gn_file.write("#  Copyright (c) Microsoft Corporation. All rights reserved.\n")
        gn_file.write("#\n")

        gn_file.write("#  This file is auto generated\n")
        gn_file.write("#  Do not make edits or they will be removed later\n")
        gn_file.write("#\n\n")

        gn_file.write("import(\"//build/config/ios/rules.gni\")\n\n")

        for imageset in imagesets:
            if imageset == ".DS_Store":
                continue
            imageset_folder_path = os.path.join(icon_assets_path, imageset)
            gn_file.write("bundle_data_xcassets(\"{}\")".format(imageset.replace(".imageset", "")) + " {\n")
            gn_file.write("  catalog = \"FluentIcons/Assets/IconAssets.xcassets\"\n")
            gn_file.write("  sources = [\n")
            for imageset_file in sorted(os.listdir(imageset_folder_path)):
                gn_file.write(f"    \"FluentIcons/Assets/IconAssets.xcassets/{imageset}/{imageset_file}\",\n")
            gn_file.write("  ]\n")
            gn_file.write("}\n\n")

    swift_enum_path = os.path.join(ios_directory, LIBRARY_NAME + "s", "Classes", LIBRARY_NAME + ".swift")
    if os.path.exists(swift_enum_path):
        os.remove(swift_enum_path)

    icons = defaultdict(list)
    all_sizes = set()
    original_icon_names = set()

    for imageset in imagesets:
        """
        Remove first and last two components

        Before: ic_fluent_flash_off_24_regular.svg
        After:  flash_off_24
        """
        if imageset == ".DS_Store":
            continue

        icon_name = get_icon_name(imageset.replace(".imageset", "")).replace(ICON_PREFIX, "")

        if icon_name in original_icon_names:
            continue

        original_icon_names.add(icon_name)

        icon_name_components = icon_name.split('_')

        icon_weight = icon_name_components[-1]
        all_sizes.add(icon_name_components[-2])
        icon_name = '_'.join(icon_name_components[:-1])

        icons[icon_name].append(icon_weight)

    all_weights = set()
    icon_weight_combinations = set()
    for icon_name, icon_weights in sorted(icons.items()):
        icon_weights = list(set(icon_weights))  # Dedupe
        icon_weights.sort()
        icon_weight_combinations.add(' '.join(icon_weights))

        for icon_weight in icon_weights:
            all_weights.add("\"{}\"".format(icon_weight))

    icon_weight_combinations = list(icon_weight_combinations)
    icon_weight_combinations.sort()

    with open(swift_enum_path, 'w+') as swift_enum_file:
        swift_enum_file.write("//\n")
        swift_enum_file.write("//  Copyright (c) Microsoft Corporation.\n")
        swift_enum_file.write("//  Licensed under the MIT license.\n")
        swift_enum_file.write("//\n")
        swift_enum_file.write("//  This file is auto generated\n")
        swift_enum_file.write("//  Do not make edits or they will be removed later\n")
        swift_enum_file.write("//\n\n")

        swift_enum_file.write("import Foundation\n\n")

        sorted_weights = list(all_weights)
        sorted_weights.sort()

        swift_enum_file.write("/// Fluent Icons\n")
        swift_enum_file.write("///\n")
        swift_enum_file.write("/// View the full list of icons here:\n")
        swift_enum_file.write("/// https://github.com/microsoft/fluentui-system-icons/blob/main/icons.md\n")
        swift_enum_file.write("///\n")
        swift_enum_file.write("@objc public enum {}: Int, Equatable, CaseIterable".format(LIBRARY_NAME) + " {\n")

        cases_output = []
        resource_strings = []
        code_snippets = []
        all_icons_by_name = defaultdict(list)
        first_icon = True
        for icon_name, icon_weights in sorted(icons.items()):
            icon_weights = list(set(icon_weights))  # Dedupe
            icon_weights.sort()

            icon_name_components = icon_name.split('_')[:-1]

            for icon_weight in icon_weights:
                swift_icon_name = to_camel_case(icon_name) + icon_weight.title()
                suffix = ""
                if first_icon:
                    first_icon = False
                    suffix = " = 0"
                cases_output.append("  case {swift_icon_name}{suffix}".format(
                    swift_icon_name=swift_icon_name,
                    suffix=suffix
                ))
                resource_strings.append("    case .{swift_icon_name}: return \"{prefix}{icon_name}_{icon_weight}\"".format(
                    swift_icon_name=swift_icon_name,
                    prefix=ICON_PREFIX,
                    icon_name=icon_name,
                    icon_weight=icon_weight
                ))
                code_snippets.append("    case .{swift_icon_name}: return \".{swift_icon_name}\"".format(
                    swift_icon_name=swift_icon_name
                ))

                all_icons_by_name[' '.join(icon_name_components).title() + "," + icon_weight].append(
                    ".{swift_icon_name}".format(
                        swift_icon_name=swift_icon_name
                    )
                )

        swift_enum_file.write('\n'.join(cases_output))

        swift_enum_file.write("\n\n")
        swift_enum_file.write("  public var resourceString: String {\n")
        for resource_string_bucket in bucket_array(resource_strings, 100):
            swift_enum_file.write("    switch self {\n")
            swift_enum_file.write('\n'.join(resource_string_bucket))
            swift_enum_file.write("\n    default: break }\n")
        swift_enum_file.write("    // Swift compiler cannot check this enum is exhaustive without breaking it up\n")
        swift_enum_file.write("    // into smaller buckets.\n")
        swift_enum_file.write("    // https://bugs.swift.org/browse/SR-11533\n")
        swift_enum_file.write("    fatalError(\"Unreachable\")\n")
        swift_enum_file.write("  }\n")

        swift_enum_file.write("\n")
        swift_enum_file.write("  public var codeSnippet: String {\n")
        for code_snippet_bucket in bucket_array(code_snippets, 100):
            swift_enum_file.write("    switch self {\n")
            swift_enum_file.write('\n'.join(code_snippet_bucket))
            swift_enum_file.write("\n    default: break }\n")
        swift_enum_file.write("    // Swift compiler cannot check this enum is exhaustive without breaking it up\n")
        swift_enum_file.write("    // into smaller buckets.\n")
        swift_enum_file.write("    // https://bugs.swift.org/browse/SR-11533\n")
        swift_enum_file.write("    fatalError(\"Unreachable\")\n")
        swift_enum_file.write("  }\n")

        swift_enum_file.write("}\n")


if __name__ == '__main__':
    process_assets()
