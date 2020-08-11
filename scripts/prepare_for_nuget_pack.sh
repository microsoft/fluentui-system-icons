#!/bin/bash

# NuGet packing doesn't support symlinks, so zip up our frameworks first to preserve the symlinks

# Fail if any of the commands fails to run
set -e

python scripts/FilterIconsCatalog.py

exit $?
