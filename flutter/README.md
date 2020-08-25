# Documentation

## Usage

```dart
import 'package:fluentui_system_icons/fluent_icons.dart';

class MyFlutterWidget extends StatelessWidget {
  Widget build(BuildContext context) {
    return IconButton(
      // Use the FluentIcons + name of the icon you want
        icon: Icon(FluentIcons.access_time_24_regular),
        onPressed: () { print("Button pressed"); }
    );
  }
}
```
## Example

View the Flutter app in the [example](example) directory to see all the available `FluentUISystemIcons`.

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
 3. Invalidate caches and restart Android Studio
