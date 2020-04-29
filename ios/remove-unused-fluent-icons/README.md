# Remove Unused Fluent Icons

Source code for the script that removes any unused assets in a project.

## Contributing

### Generate a project

```
swift package generate-xcodeproj
```

### Releasing a new version

Build the binary and commit it to the repo

```
swift build -c release
yes | cp .build/release/remove-unused-fluent-icons run
```
