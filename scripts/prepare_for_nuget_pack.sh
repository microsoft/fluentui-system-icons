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

# Copy a single generated header into our output directory in an includes folder. Ensure we nest a FluentIcons folder for proper `#import <FluentIcons/FluentIcons-Swift.h>` imports
# Pick the release simulator header since the device target has some arm64 specific ifdefs while the simulator version works on all platforms.
# Rename the FluentIcons_Example-Swift.h to FluentIcons-Swift.h for consistency with Framework consumption
echo "Copy iOS generated Swift header to include dir"
rsync -a "DerivedData/Build/Intermediates.noindex/FluentIcons.build/Release-iphonesimulator/FluentIcons_Example.build/DerivedSources/FluentIcons_Example-Swift.h" "$NUGET_OUTPUT_INCLUDE_DIR_IOS_FLUENTICONS/FluentIcons-Swift.h"

# cd into the products directory to make copying all the output easier
cd $PRODUCTS_DIR

make_dir_if_necessary "nuget/Debug-iphoneos"
echo "Copy Debug-iphoneos build output into nuget folder"
rsync -a Debug-iphoneos/FluentIcons_Example.swiftmodule/ nuget/Debug-iphoneos/FluentIcons_Example.swiftmodule/

make_dir_if_necessary "nuget/Ship-iphoneos"
echo "Copy Ship-iphoneos build output into nuget folder"
rsync -a Release-iphoneos/FluentIcons_Example.swiftmodule/ nuget/Ship-iphoneos/FluentIcons_Example.swiftmodule/

make_dir_if_necessary "nuget/Debug-iphonesimulator"
echo "Copy Debug-iphonesimulator build output into nuget folder"
rsync -a Debug-iphonesimulator/FluentIcons_Example.swiftmodule/ nuget/Debug-iphonesimulator/FluentIcons_Example.swiftmodule/

make_dir_if_necessary "nuget/Ship-iphonesimulator"
echo "Copy Ship-iphonesimulator build output into nuget folder"
rsync -a Release-iphonesimulator/FluentIcons_Example.swiftmodule/ nuget/Ship-iphonesimulator/FluentIcons_Example.swiftmodule/

# cd into our nuget folder to finally zip up our build output
cd "nuget"

# Zip the build output
echo "Creating zip archive named BuildOutput.zip containing all the platform folders"
zip --symlinks -r BuildOutput.zip Debug-iphoneos/ Ship-iphoneos/ Debug-iphonesimulator/ Ship-iphonesimulator/

exit $?
