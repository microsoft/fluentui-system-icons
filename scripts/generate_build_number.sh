#!/bin/bash

# Tweak our build number and export it as a variable for the nuget packing script
BUILD_VERSION_SUFFIX=""
BUILD_VERSION_STRING="0.0.0.1"

if [ -n "$BUILD_SOURCEBRANCHNAME" ] && [ "$BUILD_SOURCEBRANCHNAME" != "master" ]; then
    # Append the branch name unless we're the main branch for this repo
    ADJUSTED_SOURCEBRANCHNAME="${BUILD_SOURCEBRANCHNAME//[^a-z0-9A-Z]/}"
    BUILD_VERSION_SUFFIX="-$ADJUSTED_SOURCEBRANCHNAME"
fi

if [ -n "$BUILD_BUILDNUMBER" ]; then
    BUILD_VERSION_STRING="$BUILD_BUILDNUMBER"
fi

echo "Original Build Number: $BUILD_BUILDNUMBER"
echo "Adjusted Build Number: $BUILD_VERSION_STRING$BUILD_VERSION_SUFFIX"

echo "##vso[task.setvariable variable=sanitizedBuildNumber]$BUILD_VERSION_STRING$BUILD_VERSION_SUFFIX"
