import 'package:fluentui_system_icons/fluent_icons.dart';
import 'package:flutter/material.dart';

import 'icons.dart';

void main() {
  runApp(FluentUIIconKit());
}

class FluentUIIconKit extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Fluent icons',
      home: FluentUIShowcaseWidget(),
    );
  }
}

class FluentUIShowcaseWidget extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => FluentUIShowcaseWidgetState();
}

class FluentUIShowcaseWidgetState extends State<FluentUIShowcaseWidget> {
  var _searchTerm = "";
  var isListMode = true;
  TextEditingController dismissText = TextEditingController();

  @override
  Widget build(BuildContext context) {
    /*24 is for notification bar on Android*/
    final filteredIcons = icons
        .where((icon) =>
            _searchTerm.isEmpty ||
            icon.iconName.toLowerCase().contains(_searchTerm.toLowerCase()))
        .toList();

    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            _searchBar(context),
            Expanded(
              child: GridView.builder(
                itemCount: filteredIcons.length,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: isListMode ? 1 : 4,
                    childAspectRatio: isListMode
                        ? (MediaQuery.of(context).size.height * 0.010)
                        : 1),
                itemBuilder: (context, index) {
                  final icon = filteredIcons[index];
                  return Padding(
                    padding: EdgeInsets.fromLTRB(16, 0, 0, 0),
                    child: Row(
                      children: <Widget>[
                        SizedBox(
                          child: Icon(icon.iconData, size: icon.defaultSize),
                          width: 30,
                        ),
                        SizedBox(
                          width: 40,
                        ),
                        if (isListMode) Text(icon.iconName),
                        if (isListMode)
                          SizedBox(
                            height: 400,
                          ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  Material _searchBar(BuildContext context) {
    return Material(
      elevation: 10.0,
      child: Row(
        children: <Widget>[
          IconButton(
            icon: Icon(
              FluentIcons.search_24_regular,
              color: Colors.grey,
            ),
            onPressed: () {
              setState(
                () {
                  _searchTerm = "";
                },
              );
            },
          ),
          Expanded(
            child: TextField(
              controller: dismissText,
              onChanged: (text) => setState(() => _searchTerm = text),
              style: TextStyle(fontSize: 18.0, color: Colors.black),
              decoration: InputDecoration(
                  border: InputBorder.none, hintText: 'Search icons'),
            ),
          ),
          IconButton(
            icon: Icon(
              FluentIcons.dismiss_24_filled,
              color: Colors.grey,
            ),
            onPressed: () {
              setState(
                () {
                  _searchTerm = "";
                  dismissText.text = "";
                },
              );
            },
          ),
          IconButton(
            icon: Icon(
              isListMode
                  ? FluentIcons.grid_24_regular
                  : FluentIcons.list_24_regular,
              color: Colors.grey,
            ),
            onPressed: () {
              setState(
                () {
                  if (isListMode) {
                    isListMode = false;
                  } else {
                    isListMode = true;
                  }
                },
              );
            },
          ),
        ],
      ),
    );
  }
}
