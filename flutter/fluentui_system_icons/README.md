# fluentui_system_icons

![CI](https://github.com/microsoft/fluentui-system-icons/workflows/CI/badge.svg)

Fluent System Icons is a flutter package for a set of mobile platform icons from Microsoft.

## Icon List

[View the full list of icons](../../icons.md)

### Icon styles
The library offers icons in two styles, `regular` and `filled`

regular | filled
--------|-------
![ic_fluent_mail_regular](../../ic_fluent_mail_regular.png)|![ic_fluent_mail_filled](../../ic_fluent_mail_filled.png)

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

class MyWidget extends StatelessWidget {
  Widget build(BuildContext context) {
    return IconButton(
      // Use the FluentIcons + name of the icon you want
        icon: Icon(FluentIcons.access_time_24_regular),
        onPressed: () { print("Pressed"); }
    );
  }
}
```
## Example

View the Flutter app in the `example` directory to see all the available `FluentUISystemIcons`.

