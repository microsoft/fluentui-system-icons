# fluentui_system_icons

![CI](https://github.com/microsoft/fluentui-system-icons/workflows/CI/badge.svg)

Fluent System Icons is a flutter package for a set of mobile platform icons from Microsoft.

![fluent system icons](../../art/readme-asset.png)

## Icon List

[View the full list of icons](../../icons.md)

### Icon styles
The library offers icons in two styles, `regular` and `filled`

regular | filled
--------|-------
![ic_fluent_mail_regular](../../art/ic_fluent_mail_regular.png)|![ic_fluent_mail_filled](../../art/ic_fluent_mail_filled.png)

## Getting started

In the `pubspec.yaml` of your flutter project, add the following dependency:

```yaml
dependencies:
  ...
  fluentui_system_icons: <latest_version>
```
## Usage

```dart
import 'package:fluentui_system_icons/fluent_icons.dart';

class MyFlutterWidget extends StatelessWidget {
  Widget build(BuildContext context) {
    return IconButton(
      // Use the FluentIcons + name of the icon you want
        icon: Icon(FluentIcons.access_time_24_regular),
        onPressed: () { print("I am pressed"); }
    );
  }
}
```
## Example

View the Flutter app in the `example` directory to see all the available `FluentUISystemIcons`.

## FAQs

### Why aren't the icons showing properly on mobile?

This is very common issue observed after including a library, please make sure you follow the below
mentioned steps from your terminal:
 1. flutter pub get
 2. flutter clean
 3. Delete the app from your device/emulator
 4. Rebuild and deploy the app again
 
### What does the number signify in the icons names?

The numbers in the icon signify the size of the icons.

### Why do i get this error `flutter --flow-control-collections are needed` while running the example app?

This generally when the app is not build properly. Please try the below steps:

 1. flutter pub get
 2. flutter clean
 3. Invalidate caches and restart for Android Studio
 
## Changelog

Please refer to the [ChangeLog](CHANGELOG.md) to get a list of changes 
introduced in the various version

##Issues

If you find a bug or want a feature, but don't know how to fix/implement it, please fill an [issue](https://github.com/microsoft/fluentui-system-icons/issues).
  





