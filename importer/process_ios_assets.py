# Copyright (c) Microsoft Corporation.
# Licensed under the MIT license.

import json
import os
import shutil
from collections import defaultdict

LIBRARY_NAME = 'FluentIcon'


def to_camel_case(snake_str):
    components = snake_str.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])


RESERVED_WORDS = ['repeat', 'import', 'class']

ICON_PREFIX = "ic_fluent_"
IMAGE_FORMAT = ".svg"

def get_icon_name(file_name):
    return file_name.replace(IMAGE_FORMAT, '').replace('__', '_').replace('_ltr_', '_').replace('_rtl_', '_')


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


def xc_image_data_for_file_name(file_name, locale):
    output = {
        "idiom": "universal",
        "filename": file_name
    }
    if locale is not None:
        output["locale"] = locale

    if "_ltr_" in file_name:
        output["language-direction"] = "left-to-right"
    elif "_rtl_" in file_name:
        output["language-direction"] = "right-to-left"

    return output

# from an array of lang/loc directory names, insert the localization information for a particular icon
#   Copies an image to the directory for that asset and then inserts the locale information in Contents.json
def add_localized_set(lang_locs, original_icon_names, icon_assets_path):
    for lang_loc in lang_locs:
        file_names = os.listdir(os.path.join("dist", lang_loc))
        for file_name in file_names:
            icon_name = get_icon_name(file_name)
            imageset_path = os.path.join(icon_assets_path, "{icon_name}.imageset".format(icon_name=icon_name))
            if not os.path.exists(imageset_path):
                print(f"WARNING: No base localized icon {icon_name}")
                os.mkdir(imageset_path)

            # Xcode is specific about the capitalization used for locales.
            # "bg" -> "bg"
            # "bg-bg" -> "bg-BG"
            # "sr-latn" -> "sr-Latn"
            # If it is too specific it won't be supported by iOS or Mac so we can ignore it.
            # "sr-latn-rs"
            locale_components = lang_loc.split("-")
            if len(locale_components) == 3:
                print(f"DEBUG: Unused localization {icon_name} {lang_loc}")
                continue
            elif len(locale_components) == 2:
                if len(locale_components[1]) == 2:
                    asset_locale = locale_components[0] + "-" + locale_components[1].upper()
                else:
                    asset_locale = locale_components[0] + "-" + locale_components[1].title()
            else:
                asset_locale = lang_loc

            shutil.copyfile(os.path.join("dist", lang_loc, file_name), os.path.join(imageset_path, lang_loc + "_" + file_name))
            imageset_contents_path = os.path.join(imageset_path, "Contents.json")
            contents_json = json.load(open(imageset_contents_path))
            
            loc_image_data = []
            if lang_loc == "zh":
            # For the Chinese locale, explicitly differentiate between Simplified Chinese (zh_CN) and Traditional Chinese (zh_TW)
            # While Apple's Automatic Localization in its Asset Catalogs support a superset Chinese locale id `zh`, we're adding two -
            # even more explicit - locale ids pertaining to this language. But this doesn't mean that we need two separate .svg assets.
            # Instead add the same zh_ic_fluent_ file under the two available Chinese Locale sets by adjusting the Contents.json metadata file.
                loc_image_data.append(xc_image_data_for_file_name(lang_loc + "_" + file_name, locale="zh_CN"))
                loc_image_data.append(xc_image_data_for_file_name(lang_loc + "_" + file_name, locale="zh_TW"))
            else:
                loc_image_data.append(xc_image_data_for_file_name(lang_loc + "_" + file_name, locale=lang_loc))

            contents_json["properties"]["localizable"] = True
            contents_json["images"].extend(loc_image_data)

            with open(imageset_contents_path, 'w') as imageset:
                imageset.write(json.dumps(contents_json, indent=2, sort_keys=True))

def create_icon_set(file_names, original_icon_names, icon_assets_path):
    for file_name in file_names:
        icon_name = get_icon_name(file_name)

        if icon_name in original_icon_names:
            continue

        original_icon_names.add(icon_name)

        sibling_file_name = None
        if "_ltr_" in file_name:
            sibling_file_name = file_name.replace("_ltr_", "_rtl_")
        elif "_rtl_" in file_name:
            sibling_file_name = file_name.replace("_rtl_", "_ltr_")

        if sibling_file_name is not None:
            if not os.path.exists(os.path.join("dist", sibling_file_name)):
                print(f"WARNING: No corresponding localized icon {sibling_file_name}")
                sibling_file_name = None

        imageset_path = os.path.join(icon_assets_path, "{icon_name}.imageset".format(icon_name=icon_name))
        os.mkdir(imageset_path)
        shutil.copyfile(os.path.join("dist", file_name), os.path.join(imageset_path, file_name))
        if sibling_file_name is not None:
            shutil.copyfile(os.path.join("dist", sibling_file_name), os.path.join(imageset_path, sibling_file_name))

        imageset_contents_path = os.path.join(imageset_path, "Contents.json")

        with open(imageset_contents_path, 'w') as imageset:
            rendering_intent = "template"
            if icon_name.endswith("_color"):
                rendering_intent = "original"

            images = [
                xc_image_data_for_file_name(file_name, locale=None)
            ]
            if sibling_file_name is not None:
                images.append(xc_image_data_for_file_name(sibling_file_name, locale=None))

            contents = {
                "images": images,
                "info": {
                    "version": 1,
                    "author": "xcode"
                },
                "properties": {
                    "template-rendering-intent": rendering_intent
                }
            }

            imageset.write(json.dumps(contents, indent=2, sort_keys=True))

def process_assets():
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    file_names = []
    loc_names = []
    for file_name in os.listdir("dist"):
        if file_name.endswith(IMAGE_FORMAT):
            file_names.append(file_name)
        elif os.path.isdir(os.path.join("dist", file_name)):
            loc_names.append(file_name)

    file_names.sort()

    ios_directory = os.path.join(project_root, "ios")

    icon_assets_path = os.path.join(ios_directory, LIBRARY_NAME + "s", "Assets", "IconAssets.xcassets")
    if os.path.exists(icon_assets_path):
        shutil.rmtree(icon_assets_path)
    os.mkdir(icon_assets_path)

    original_icon_names = set()
    create_icon_set(file_names, original_icon_names, icon_assets_path)
    add_localized_set(loc_names, original_icon_names, icon_assets_path)

    # Generate BUILD.gn for GN build system
    gn_path = os.path.join(ios_directory, "BUILD.gn")
    if os.path.exists(gn_path):
        os.remove(gn_path)

    with open(gn_path, 'w+') as gn_file:
        gn_file.write("#\n")
        gn_file.write("#  Copyright (c) Microsoft Corporation. All rights reserved.\n")
        gn_file.write("#\n")

        gn_file.write("#  This file is auto generated\n")
        gn_file.write("#  Do not make edits or they will be removed later\n")
        gn_file.write("#\n\n")

        gn_file.write("import(\"//build/config/ios/asset_catalog.gni\")\n\n")

        for file_name in file_names:
            imageset_name = get_icon_name(file_name)
            imageset_folder_path = ios_directory + '/FluentIcons/Assets/IconAssets.xcassets/' + imageset_name + '.imageset'

            gn_file.write("imageset(\"{}\")".format(imageset_name) + " {\n")
            gn_file.write("  sources = [\n")
            gn_file.write("    \"FluentIcons/Assets/IconAssets.xcassets/{}.imageset/Contents.json\"".format(imageset_name) + ",\n")
            for imageset_file in os.listdir(imageset_folder_path):
                if os.path.splitext(imageset_file)[1] == IMAGE_FORMAT:
                    gn_file.write("    \"FluentIcons/Assets/IconAssets.xcassets/{imageset_name}.imageset/{icon_file_name}\"".format(imageset_name=imageset_name, icon_file_name=imageset_file) + ",\n")
            gn_file.write("  ]\n")
            gn_file.write("}\n\n")
    swift_enum_path = os.path.join(ios_directory, LIBRARY_NAME + "s", "Classes", LIBRARY_NAME + ".swift")
    if os.path.exists(swift_enum_path):
        os.remove(swift_enum_path)

    icons = defaultdict(list)
    all_sizes = set()
    original_icon_names = set()

    for file_name in file_names:
        """
        Remove first and last two components

        Before: ic_fluent_flash_off_24_regular.svg
        After:  flash_off_24
        """
        icon_name = get_icon_name(file_name).replace(ICON_PREFIX, '')

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
        swift_enum_file.write("/// https://github.com/microsoft/fluentui-system-icons/blob/master/icons.md\n")
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
