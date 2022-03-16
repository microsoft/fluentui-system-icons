# Remove Unused Fluent Icons

Source code for the script that removes any unused assets in a project.

## Contributing

### Generate the project

```
xed .
```

### Releasing a new version

Build the binary and commit it to the repo

```
swift build -c release
yes | cp .build/release/remove-unused-fluent-icons run
```
