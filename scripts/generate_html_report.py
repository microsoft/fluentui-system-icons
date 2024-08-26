"""
This script processes SVG files in a specified folder to generate an HTML report.
The report compares the current SVG icons with their previous versions and displays their differences.

Usage:
1. Ensure that the SVG files are organized in the specified folder, with a 'previous' subfolder containing the previous versions of the SVGs.
2. Run the script: `python script_name.py`
3. When prompted, enter the path to the folder containing the SVG files.
4. The script will parse the SVG files and generate an HTML report saved as 'icons_data.html' in the specified folder.

Requirements:
- The script assumes that the SVG files follow the naming pattern: 'ic_fluent_<name>_<size>_<style>.svg'
- Ensure the 'previous' subfolder is present in the specified folder and contains the previous versions of the SVG files.

Example SVG Folder Structure:
  /path/to/svgs/
  ├── ic_fluent_icon1_16_regular.svg
  ├── ic_fluent_icon1_16_filled.svg
  ├── ic_fluent_icon2_20_regular.svg
  ├── previous/
  │   ├── ic_fluent_icon1_16_regular.svg
  │   ├── ic_fluent_icon1_16_filled.svg
  │   └── ic_fluent_icon2_20_regular.svg

The generated HTML report will display:
- The name of the icons
- The available sizes
- The regular and filled styles of the icons
- A visual comparison between the current and previous versions of the icons

Note:
- The HTML report includes buttons to toggle the visibility of new icons and to zoom in/out on the icons.
"""

import os
import re

# Determine the script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))

# Set a default path
default_svg_folder = os.path.join(script_dir, '..', '..', 'all_files_svg')

# Prompt the user for the path to the SVGs folder
svg_folder = input(f"Please enter the path to the SVGs folder (default is {default_svg_folder}): ") or default_svg_folder
svg_folder = os.path.abspath(svg_folder)  # Convert to absolute path
previous_folder = os.path.join(svg_folder, 'previous')

# Dictionary to store the data of current and previous SVG files
icons_data = {}
previous_icons_data = {}

# Regex pattern to parse the file names
pattern = re.compile(r'ic_fluent_(.*?)_(\d+)_(.*?).svg')

# Function to parse the files and populate the dictionary
def parse_files(folder, is_previous=False):
    """
    Parses SVG files in the specified folder and populates the icons_data or previous_icons_data dictionary.

    Args:
        folder (str): Path to the folder containing SVG files.
        is_previous (bool): Indicates whether the folder contains previous SVG versions.

    Returns:
        None
    """
    for file_name in os.listdir(folder):
        if file_name.endswith('.svg'):
            match = pattern.match(file_name)
            if match:
                name, size, style = match.groups()
                if is_previous:
                    if name not in previous_icons_data:
                        previous_icons_data[name] = {'sizes': {}}
                    if size not in previous_icons_data[name]['sizes']:
                        previous_icons_data[name]['sizes'][size] = []
                    if style not in previous_icons_data[name]['sizes'][size]:
                        previous_icons_data[name]['sizes'][size].append(style)
                else:
                    if name not in icons_data:
                        icons_data[name] = {'sizes': {}}
                    if size not in icons_data[name]['sizes']:
                        icons_data[name]['sizes'][size] = []
                    if style not in icons_data[name]['sizes'][size]:
                        icons_data[name]['sizes'][size].append(style)

# Parse the files in the previous folder
parse_files(previous_folder, is_previous=True)

# Parse the files in the main folder
parse_files(svg_folder)

# Filter icons to only include those in the previous folder
filtered_icons = set(previous_icons_data.keys())

# Retain only the icons that were found in the previous folder
icons_data = {icon: data for icon, data in icons_data.items() if icon in filtered_icons}

# Generate the HTML table
html = '''
<!DOCTYPE html>
<html>
<head>
    <title>Icons Data</title>
    <style>
        * {
            font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
            font-style: normal;
            letter-spacing: .1em;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border-bottom: 1px solid #c8c8c8;
        }
        th, td {
            padding: 15px;
            text-align: left;
        }
        td {
            padding-bottom: 2rem;
            padding-top: 2rem;
        }
        img {
            max-width: 100%; /* Adjust to the size of your images */
            max-height: 100%; /* Adjust to the size of your images */
        }
        .icon-overlay {
            display: inline-block;
            position: relative;
            width: auto;
            height: auto;
        }
        .icon-overlay img {
            position: absolute;
            top: 0;
            left: 0;
        }
        .icon-overlay .previous {
            opacity: 0.7;
            filter: hue-rotate(180deg) sepia(1) saturate(10) brightness(1.5);
        }
        .icon-difference {
            display: flex;
            flex-direction: row;
            gap: 10px; /* Space between the icons */
        }
        .hidden {
            display: none;
        }
    </style>
    <script>
        function togglePrevious() {
            const newIcons = document.querySelectorAll('.new');
            newIcons.forEach(icon => icon.classList.toggle('hidden'));
        }
        function toggleSize() {
            const icons = document.querySelectorAll('img');
            icons.forEach(icon => {
                const originalSize = icon.getAttribute('data-original-size');
                if (icon.style.width === '100px') {
                    icon.style.width = originalSize;
                    icon.style.height = originalSize;
                } else {
                    icon.style.width = '100px';
                    icon.style.height = '100px';
                }
            });
            const overlays = document.querySelectorAll('.icon-overlay');
            overlays.forEach(overlay => {
                const originalSize = overlay.getAttribute('data-original-size');
                if (overlay.style.width === '100px') {
                    overlay.style.width = originalSize;
                    overlay.style.height = originalSize;
                } else {
                    overlay.style.width = '100px';
                    overlay.style.height = '100px';
                }
            });
        }
    </script>
</head>
<body>
    <h2>Updated Icons Data</h2>
    <button onclick="toggleSize()">Toggle Icon Zoom</button>
    <table>
        <tr>
            <th><b>ICON NAME</b></th>
            <th><b>SIZES</b></th>
            <th><b>REGULAR</b></th>
            <th><b>FILLED</b></th>
            <th><b>DIFFERENCE</b> <button onclick="togglePrevious()">Toggle New Icons</button></th>
        </tr>'''

for icon, data in previous_icons_data.items():
    sorted_sizes = sorted(data['sizes'].keys(), key=int)
    sizes = ', '.join(sorted_sizes)
    regular_imgs = []
    filled_imgs = []
    differences = []
    for size in sorted_sizes:
        styles = data['sizes'][size]
        for style in sorted(styles, reverse=True):  # Sorting styles so 'filled' comes after 'regular'
            file_name = f'ic_fluent_{icon}_{size}_{style}.svg'
            file_path = os.path.abspath(os.path.join(svg_folder, file_name))
            prev_file_path = os.path.abspath(os.path.join(previous_folder, file_name))
            if style == 'regular' and os.path.exists(file_path):
                regular_imgs.append(f'<img src="{file_path}" alt="{icon} {size} {style}" data-original-size="{size}px">')
            elif style == 'filled' and os.path.exists(file_path):
                filled_imgs.append(f'<img src="{file_path}" alt="{icon} {size} {style}" data-original-size="{size}px">')
            
            if os.path.exists(prev_file_path) and os.path.exists(file_path):
                differences.append(f'''
                    <div class="icon-overlay" style="width: {size}px; height: {size}px;" data-original-size="{size}px">
                        <img src="{prev_file_path}" class="previous" alt="{icon} {size} {style}" data-original-size="{size}px">
                        <img src="{file_path}" class="new" alt="{icon} {size} {style}" data-original-size="{size}px">
                    </div>''')
                
    regular = ' '.join(regular_imgs)
    filled = ' '.join(filled_imgs)
    difference = '<div class="icon-difference">' + ''.join(differences) + '</div>'
    html += f'''
        <tr>
            <td>{icon.replace("_", " ").title()}</td>
            <td>{sizes}</td>
            <td>{regular}</td>
            <td>{filled}</td>
            <td>{difference}</td>
        </tr>'''

html += '''
    </table>
</body>
</html>
'''

# Save the HTML to a file in the specified SVG folder
html_file_path = os.path.join(svg_folder, 'icons_data.html')
with open(html_file_path, 'w') as file:
    file.write(html)

print(f"HTML file has been generated: {html_file_path}")
