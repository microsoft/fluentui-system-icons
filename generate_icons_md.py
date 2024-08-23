# Copyright (c) Microsoft Corporation.
# Licensed under the MIT license.

import os
from collections import defaultdict


def to_camel_case(snake_str):
    components = snake_str.split("_")
    return components[0] + "".join(x.title() for x in components[1:])


def write_file(icons_md, weight_type):
    icons_md.write("<!-- This file is generated using generate_icons_md.py -->\n")
    icons_md.write(f"# {weight_type.title()} Icons\n")
    icons_md.write("\n")
    icons_md.write("|Name|Icon|iOS|Android|\n")
    icons_md.write("|---|---|---|---|\n")

    for asset_dir in sorted(os.listdir("assets")):
        if asset_dir == ".DS_Store":
            continue

        largest_svg_icon_path_by_weight = {}

        ios_references_by_weight = defaultdict(list)
        android_references_by_weight = defaultdict(list)
        weights = set()

        pdf_dir = os.path.join("assets", asset_dir, "PDF")
        for filename in sorted(os.listdir(pdf_dir)):
            if filename == ".DS_Store":
                continue
            components = filename.replace(".pdf", "").split("_")[2:]
            weight = components[-1]
            weights.add(weight)
            ios_references_by_weight[weight].append(f'`{to_camel_case("_".join(components))}`')

        svg_dir = os.path.join("assets", asset_dir, "SVG")
        for filename in sorted(os.listdir(svg_dir)):
            weight = filename.split("_")[-1].replace(".svg", "")
            weights.add(weight)
            android_references_by_weight[weight].append(f'`{filename.replace(".svg", "")}`')
            largest_svg_icon_path_by_weight[weight] = filename

        for weight in sorted(weights, reverse=True):
            if weight != weight_type:
                continue
            icons_md.write(
                f"|{asset_dir}"
                f'|<img src="{svg_dir}/{largest_svg_icon_path_by_weight[weight]}?raw=true" width="24" height="24">'
                f'|{"<br />".join(ios_references_by_weight[weight])}'
                f'|{"<br />".join(android_references_by_weight[weight])}|\n'
            )

with open("icons_filled.md", "w") as icons_filled_md:
    write_file(icons_filled_md, "filled")

with open("icons_regular.md", "w") as icons_regular_md:
    write_file(icons_regular_md, "regular")

with open("icons_light.md", "w") as icons_light_md:
    write_file(icons_light_md, "light")
