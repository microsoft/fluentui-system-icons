#!/bin/bash

# NuGet packing doesn't support symlinks, so zip up our frameworks first to preserve the symlinks

# Fail if any of the commands fails to run
set -e

python scripts/FilterIconsCatalog.py

## Make a directory if necessary, no-op if it already exists
##
## \param $1 the name of the folder to create
#function make_dir_if_necessary()
#{
#    if ! [ -d "$1" ]; then
#        echo "Making $1 folder"
#        mkdir "$1"
#    else
#        echo "$1 folder already exists"
#    fi
#}
#
## Build up our output directory in Products/nuget
#PRODUCTS_DIR="DerivedData/Build/Products"
#NUGET_DIR="$PRODUCTS_DIR/nuget"
#make_dir_if_necessary "$NUGET_DIR"
#
#cd $NUGET_DIR
#
#make_dir_if_necessary "Debug-iphoneos"
#make_dir_if_necessary "Ship-iphoneos"
#make_dir_if_necessary "Debug-iphonesimulator"
#make_dir_if_necessary "Ship-iphonesimulator"
#
#SOURCE_DIR="../../../../AssetsCatalog"
#NUGET_OUTPUT_DIR="../../../$NUGET_DIR"
#
## cd into the products directory to make copying all the output easier
#cd $SOURCE_DIR
#
#echo "Copy Debug-iphoneos build output into nuget folder"
#cp -R $SOURCE_DIR $NUGET_OUTPUT_DIR/Debug-iphoneos
#
#echo "Copy Ship-iphoneos build output into nuget folder"
#cp -R $SOURCE_DIR $NUGET_OUTPUT_DIR/Ship-iphoneos
#
#echo "Copy Debug-iphonesimulator build output into nuget folder"
#cp -R $SOURCE_DIR $NUGET_OUTPUT_DIR/Debug-iphonesimulator
#
#echo "Copy Ship-iphonesimulator build output into nuget folder"
#cp -R $SOURCE_DIR $NUGET_OUTPUT_DIR/Ship-iphonesimulator
#
##delete local assets catalog as it was copied to destionation
#
#
## cd into our nuget folder to finally zip up our build output
#cd $NUGET_OUTPUT_DIR
#
## Zip the build output
#echo "Creating zip archive named BuildOutput.zip containing all the platform folders"
#zip --symlinks -r BuildOutput.zip Debug-iphoneos/ Ship-iphoneos/ Debug-iphonesimulator/ Ship-iphonesimulator/

exit $?
