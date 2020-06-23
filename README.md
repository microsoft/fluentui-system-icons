# Fluent System Icons

![CI](https://github.com/microsoft/fluent-system-icons/workflows/CI/badge.svg)

Fluent System Icons is a set of mobile platform icons from Microsoft.

![fluent system icons](art/readme-asset.png)

## Icon List

[View the full list of icons](icons.md)

## Installation
### Android
The library is published via JCenter, please ensure that the `jcenter()` repository has been added to the root `build.gradle` file:
```groovy
repositories {
    ...
    jcenter()
}
```
Include the following dependency in your project's `build.gradle`
```groovy
implementation 'com.microsoft.design:fluent-system-icons:1.1.19'
```

For library docs, see [android/README.md](android/README.md).

### iOS
#### Cocoapods

```ruby
use_frameworks!

pod "FluentIcons", "1.1.19"
```

#### Carthage

```bash
git "git@github.com:microsoft/fluent-system-icons.git" "1.1.19"
```

For library docs, see [ios/README.md](ios/README.md).

## Contributing

### Importer

The importer generates the Android and iOS libraries from the icons in the `assets` directory.

Jump into the directory
```
cd importer
```

Install npm dependencies
```
npm install
npm run clean
```

List all the available commands
```
npm run
```

### Build Pipeline

Our [build pipeline](https://github.com/microsoft/fluent-system-icons/actions) runs `deploy:android` and `deploy:ios` to create the libraries. The build definitions are located in `.github/workflows/`.

## Demo apps

You can build and run the demo apps following the steps below.

### Android
1. Follow the **Importer** section above and run the command `npm run deploy:android`
2. Open the [android](android) directory in Android Studio
3. Select the `sample-showcase` in the build configuration dropdown
4. Click run 

## Contact
Please feel free to reach out to the following points of contact with questions or requests.
* [Joe Woodward](mailto:joe.woodward@microsoft.com) / [Jason Custer](mailto:jacust@microsoft.com) - Design
* [Nick Romano](mailto:nick.romano@microsoft.com) - iOS
* [Will Hou](mailto:wih@microsoft.com) - Android

## Code of Conduct
This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct) or contact opencode@microsoft.com with any additional questions or comments.
