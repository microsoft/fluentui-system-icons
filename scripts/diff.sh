#!/bin/bash

# Prompt the user for the commit IDs
read -p "Enter the commit ID from (inclusive): " commit_id_from
read -p "Enter the commit ID to: " commit_id_to

# Run the git diff-tree command with the user-provided commit IDs and pipe the result to tar
git diff-tree -r --no-commit-id --name-only --diff-filter=ACMRT ${commit_id_from}^..${commit_id_to} | tar -czf ../assets.tgz -T -

# Clean up previous directories and files
rm -rf ../all_files
rm -rf ../all_files_svg
rm -rf ../assets

# Create new directories
mkdir ../all_files
mkdir ../all_files_svg
mkdir ../assets

# Extract the tar file into the assets directory
tar -xvzf ../assets.tgz -C ../assets

# Move into the assets directory
cd ../assets

# Find and move PDF files
find . -name "*.pdf" -exec mv {} ../all_files/ \;

# Open the all_files directory (this might open a file explorer depending on your system)
open ../all_files

# Find and move SVG files
find . -name "*.svg" -exec mv {} ../all_files_svg/ \;

# Open the all_files_svg directory
open ../all_files_svg

# Find and list files with more than 3 lines
find . -type f -exec bash -c '[[ $(wc -l < "$1") -gt 3 ]] && echo "$1"' _ '{}' \;
