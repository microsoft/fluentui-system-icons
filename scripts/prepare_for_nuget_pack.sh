#!/bin/bash

# NuGet packing doesn't support symlinks, so zip up our frameworks first to preserve the symlinks

# Fail if any of the commands fails to run
set -e

# Make a directory if necessary, no-op if it already exists
#
# \param $1 the name of the folder to create
function make_dir_if_necessary()
{
    if ! [ -d "$1" ]; then
        echo "Making $1 folder"
        mkdir "$1"
    else
        echo "$1 folder already exists"
    fi
}

# Build up our output directory in Products/nuget
PRODUCTS_DIR="DerivedData/Build/Products"
NUGET_OUTPUT_DIR="$PRODUCTS_DIR/nuget"
make_dir_if_necessary "$NUGET_OUTPUT_DIR"

NUGET_OUTPUT_INCLUDE_DIR="$NUGET_OUTPUT_DIR/include"
make_dir_if_necessary "$NUGET_OUTPUT_INCLUDE_DIR"

NUGET_OUTPUT_INCLUDE_DIR_IOS="$NUGET_OUTPUT_INCLUDE_DIR/ios"
make_dir_if_necessary "$NUGET_OUTPUT_INCLUDE_DIR_IOS"

NUGET_OUTPUT_INCLUDE_DIR_IOS_FLUENTICONS="$NUGET_OUTPUT_INCLUDE_DIR_IOS/FluentIcons"
make_dir_if_necessary "$NUGET_OUTPUT_INCLUDE_DIR_IOS_FLUENTICONS"

# cd into the products directory to make copying all the output easier
cd $PRODUCTS_DIR

make_dir_if_necessary "nuget/Debug-iphoneos"
echo "Copy Debug-iphoneos build output into nuget folder"
rsync -a Debug-iphoneos/FluentIcons-iOS/FluentIcons.framework/ nuget/Debug-iphoneos/FluentIcons.framework/

make_dir_if_necessary "nuget/Ship-iphoneos"
echo "Copy Ship-iphoneos build output into nuget folder"
rsync -a Release-iphoneos/FluentIcons-iOS/FluentIcons.framework/ nuget/Ship-iphoneos/FluentIcons.framework/

make_dir_if_necessary "nuget/Debug-iphonesimulator"
echo "Copy Debug-iphonesimulator build output into nuget folder"
rsync -a Debug-iphonesimulator/FluentIcons-iOS/FluentIcons.framework/ nuget/Debug-iphonesimulator/FluentIcons.framework/

make_dir_if_necessary "nuget/Ship-iphonesimulator"
echo "Copy Ship-iphonesimulator build output into nuget folder"
rsync -a Release-iphonesimulator/FluentIcons-iOS/FluentIcons.framework/ nuget/Ship-iphonesimulator/FluentIcons.framework/

# cd into our nuget folder to finally zip up our build output
cd "nuget"

# Zip the build output
echo "Creating zip archive named BuildOutput.zip containing all the platform folders"
zip --symlinks -r BuildOutput.zip Debug-iphoneos/ Ship-iphoneos/ Debug-iphonesimulator/ Ship-iphonesimulator/

exit $?
