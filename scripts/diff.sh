#!/bin/bash

# This script extracts files changed between two specified Git commit IDs and performs various file operations.
# Usage:
# 1. Make sure this script is executable: `chmod +x ./scripts/diff.sh`
# 2. Run the script: `./scripts/diff.sh`
# 3. The script will prompt you to enter two commit IDs.
#    - `commit_id_from` (inclusive): The starting commit ID for the diff operation.
#    - `commit_id_to`: The ending commit ID for the diff operation.
# 4. The script will create a tarball of the changed files, extract them, and organize them into specified directories.
# 5. It will then move PDF and SVG files to separate directories and open these directories.
# 6. Finally, it will list files with more than 3 lines and perform a check in the all_files_svg directory.

# Note:
# - Commit IDs can be obtained using `git log` to view the commit history.
# - The script assumes it is located in a `scripts` directory relative to the Git repository.

# Ensure the script is run from the correct directory
# Do not delete this check, this scripts needs to be ran at the root of the repo.
if [[ $(basename "$PWD") == "scripts" ]]; then
    echo "Please run this script from the root directory of your repository."
    exit 1
fi

# Prompt the user for the commit IDs
read -p "Enter the commit ID from (inclusive): " commit_id_from
read -p "Enter the commit ID to: " commit_id_to

# Get the current working directory
current_dir=$(pwd)

# Get the list of added and modified files
added_files=$(git diff-tree -r --no-commit-id --name-only --diff-filter=A "${commit_id_from}^..${commit_id_to}")
modified_files=$(git diff-tree -r --no-commit-id --name-only --diff-filter=M "${commit_id_from}^..${commit_id_to}")

# Create a tarball of the added and modified files
tar -czf ../assets.tgz -T <(echo "$added_files" && echo "$modified_files") > /dev/null 2>&1

# Clean up previous directories and files
rm -rf ../all_files
rm -rf ../all_files_svg
rm -rf ../assets

# Create new directories
mkdir ../all_files
mkdir ../all_files_svg
mkdir ../assets

# Extract the tar file into the assets directory
tar -xvzf ../assets.tgz -C ../assets > /dev/null 2>&1

# Move into the assets directory
cd ../assets

# Find and move PDF files
find . -name "*.pdf" -exec mv {} ../all_files/ \; > /dev/null 2>&1

# Open the all_files directory (this might open a file explorer depending on your system)
open ../all_files

# Find and move SVG files
find . -name "*.svg" -exec mv {} ../all_files_svg/ \; > /dev/null 2>&1

# Open the all_files_svg directory
open ../all_files_svg

# Create a previous folder inside all_files_svg
mkdir -p ../all_files_svg/previous
mkdir -p ../all_files_svg/comparisons

# Perform the check in the all_files_svg directory
cd ../all_files_svg
find . -type f -name '*.svg' -exec bash -c '[[ $(wc -l < "$1") -gt 3 ]] && echo "$1" >> files.txt' _ '{}' \;

cd $current_dir

# Function to download the previous version of the SVG files
download_previous_svg() {
    modified_svg="$1"
    previous_svg="../all_files_svg/previous/$(basename "$modified_svg")"

    # Get the relative path of the modified SVG file
    relative_path="${modified_svg#../assets/}"
    
    # Get the previous version of the modified SVG
    git show "${commit_id_from}^:$relative_path" > "$previous_svg"
    
    if [[ ! -s $previous_svg ]]; then
        echo "Failed to download previous SVG for $modified_svg"
        return 1
    fi

    return 0
}

# Function to calculate percentage change in SVG files
calculate_svg_diff_percentage() {
    modified_svg="$1"
    previous_svg="../all_files_svg/previous/$(basename "$modified_svg")"
    comparison_image="../all_files_svg/comparisons/$(basename "$modified_svg" .svg)_comparison.png"

    if [[ ! -f $previous_svg ]]; then
        echo "Previous SVG file not found for $modified_svg"
        return
    fi

    # Convert SVGs to PNG
    convert "$modified_svg" "modified.png"
    convert "$previous_svg" "previous.png"

    # Compare PNGs and get the difference percentage
    compare -metric AE "modified.png" "previous.png" "$comparison_image" 2> diff.txt

    diff_pixels=$(cat diff.txt)
    total_pixels=$(identify -format "%[fx:w*h]" "modified.png")
    
    if [[ $total_pixels -eq 0 ]]; then
        echo "No pixels to compare in $modified_svg"
        return
    fi

    percentage_change=$(echo "scale=2; ($diff_pixels / $total_pixels) * 100" | bc)
    echo "Change in $modified_svg: $percentage_change%"

    # Clean up temporary files
    rm modified.png previous.png diff.txt
}

# Download previous versions and calculate percentage change for modified SVG files
echo "Percentage change in modified SVG files:"
while IFS= read -r svg_file; do
    if [[ $svg_file == *.svg ]]; then
        full_path="$svg_file"
        download_previous_svg "$full_path" && calculate_svg_diff_percentage "$full_path"
    fi
done <<< "$modified_files"

# Move back to the assets directory
cd ../assets

# Find and list files with more than 3 lines
find . -type f -exec bash -c '[[ $(wc -l < "$1") -gt 3 ]] && echo "$1"' _ '{}' \;
