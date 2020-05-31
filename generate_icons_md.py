# Copyright (c) Microsoft Corporation.
# Licensed under the MIT license.

import os


def to_camel_case(snake_str):
    components = snake_str.split("_")
    return components[0] + "".join(x.title() for x in components[1:])


with open("icons.md", "w") as icons_md:
    icons_md.write("<!-- This file is generated using generate_icons_md.py -->\n")
    icons_md.write("# Icons\n")
    icons_md.write("\n")
    icons_md.write("|Name|Icon|iOS|Android|\n")
    icons_md.write("|---|---|---|---|\n")

    for asset_dir in sorted(os.listdir("assets")):
        if asset_dir == ".DS_Store":
            continue

        largest_svg_icon_path = None

        ios_references = []
        android_references = []

        pdf_dir = os.path.join("assets", asset_dir, "PDF")
        for filename in sorted(os.listdir(pdf_dir)):
            components = "_".join(filename.replace(".pdf", "").split("_")[2:])
            ios_references.append(f'`{to_camel_case(components)}`')

        svg_dir = os.path.join("assets", asset_dir, "SVG")
        for filename in sorted(os.listdir(svg_dir)):
            android_references.append(f'`{filename.replace(".svg", "")}`')
            largest_svg_icon_path = filename

        icons_md.write(
            f"|{asset_dir}"
            f'|<img src="{svg_dir}/{largest_svg_icon_path}?raw=true" width="24" height="24">'
            f'|{"<br />".join(ios_references)}'
            f'|{"<br />".join(android_references)}|\n'
        )
