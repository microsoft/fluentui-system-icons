// Flutter code sample for IconButton

// In this sample the icon button's background color is defined with an [Ink]
// widget whose child is an [IconButton]. The icon button's filled background
// is a light shade of blue, it's a filled circle, and it's as big as the
// button is.
//
// ![](https://flutter.github.io/assets-for-api-docs/assets/material/icon_button_background.png)

import 'package:flutter/material.dart';
import 'package:fluentui_system_icons/fluent_icons.dart';

void main() => runApp(MyApp());

/// This Widget is the main application widget.
class MyApp extends StatelessWidget {
  static const String _title = 'FluentUI Sample Showcase';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: _title,
      home: Scaffold(
        appBar: AppBar(title: const Text(_title)),
        body: MyStatelessWidget(),
      ),
    );
  }
}

/// This is the stateless widget that the main application instantiates.
class MyStatelessWidget extends StatelessWidget {
  MyStatelessWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.white,
      child: Center(
        child: Ink(
          decoration: const ShapeDecoration(
            color: Colors.lightBlue,
            shape: CircleBorder(),
          ),
          child: IconButton(
            icon: Icon(FluentIcons.access_time_24_regular),
            color: Colors.white,
            onPressed: () {},
          ),
        ),
      ),
    );
  }
}
