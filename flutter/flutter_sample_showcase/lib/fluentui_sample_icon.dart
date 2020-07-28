import 'package:flutter/widgets.dart';

class FluentUISampleIcon implements Comparable {
  final IconData iconData;
  final String iconName;

  FluentUISampleIcon(this.iconData, this.iconName);

  @override
  String toString() => 'IconDefinition{iconData: $iconData, title: $iconName}';

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
          other is FluentUISampleIcon &&
              runtimeType == other.runtimeType &&
              iconData == other.iconData &&
              iconName == other.iconName;

  @override
  int get hashCode => iconData.hashCode ^ iconName.hashCode;

  @override
  int compareTo(other) => iconName.compareTo(other.iconName);
}