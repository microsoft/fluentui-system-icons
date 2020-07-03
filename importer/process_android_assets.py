# Copyright (c) Microsoft Corporation.
# Licensed under the MIT license.

import os

LIBRARY_NAME = 'library'

def process_assets():
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    android_directory = os.path.join(project_root, "android")
    icon_assets_path = os.path.join(android_directory, LIBRARY_NAME, "src", "main", "res", "drawable")
    color_assets_path = os.path.join(android_directory, LIBRARY_NAME, "src", "main", "res", "color")

    #icons
    icon_file_names = []
    for file_name in os.listdir(icon_assets_path):
        if not file_name.endswith('.xml'):
            continue
        icon_file_names.append(file_name)
    icon_file_names.sort()
    #colors
    color_file_names = []
    for file_name in os.listdir(color_assets_path):
        if not file_name.endswith('.xml'):
            continue
        color_file_names.append(file_name)
    color_file_names.sort()


    # Generate BUILD.gn for GN build system
    gn_path = os.path.join(android_directory, "BUILD.gn")
    if os.path.exists(gn_path):
        os.remove(gn_path)

    with open(gn_path, 'w+') as gn_file:
        gn_file.write("#\n")
        gn_file.write("#  Copyright (c) Microsoft Corporation. All rights reserved.\n")
        gn_file.write("#\n")

        gn_file.write("#  This file is auto generated\n")
        gn_file.write("#  Do not make edits or they will be removed later\n")
        gn_file.write("#\n\n")

        gn_file.write("import(\"//build/config/android/rules.gni\")\n\n")
        
        gn_file.write("android_resources(\"fluent_icon_resources\") {\n")
        gn_file.write("  custom_package = \"com.microsoft.fluent.mobile.icons\"\n")
        gn_file.write("  sources = [\n")

        for file_name in icon_file_names:
            file_path = "    \"../android/library/src/main/res/drawable/" + file_name + "\",\n"
            gn_file.write(file_path)
        
        for file_name in color_file_names:
            file_path = "    \"../android/library/src/main/res/color/" + file_name + "\",\n"
            gn_file.write(file_path)


        gn_file.write("  ]\n")
        gn_file.write("}\n")

if __name__ == '__main__':
    process_assets()
