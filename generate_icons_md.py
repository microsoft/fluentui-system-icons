# Copyright (c) Microsoft Corporation.
# Licensed under the MIT license.

import os
from collections import defaultdict


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

        largest_svg_icon_path_by_weight = {}

        ios_references_by_weight = defaultdict(list)
        android_references_by_weight = defaultdict(list)
        weights = set()

        pdf_dir = os.path.join("assets", asset_dir, "PDF")
        for filename in sorted(os.listdir(pdf_dir)):
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
            icons_md.write(
                f"|{asset_dir} ({weight.title()})"
                f'|<img src="{svg_dir}/{largest_svg_icon_path_by_weight[weight]}?raw=true" width="24" height="24">'
                f'|{"<br />".join(ios_references_by_weight[weight])}'
                f'|{"<br />".join(android_references_by_weight[weight])}|\n'
            )
