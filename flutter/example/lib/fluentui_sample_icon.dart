import 'package:flutter/widgets.dart';

class FluentUISampleIcon implements Comparable {
  final IconData iconData;
  final String iconName;
  final double defaultSize;

  FluentUISampleIcon(this.iconData, this.iconName, this.defaultSize);

  @override
  String toString() =>
      'IconDefinition{iconData: $iconData, title: $iconName, size: $defaultSize}';

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is FluentUISampleIcon &&
          runtimeType == other.runtimeType &&
          iconData == other.iconData &&
          iconName == other.iconName &&
          defaultSize == other.defaultSize;

  @override
  int get hashCode =>
      iconData.hashCode ^ iconName.hashCode ^ defaultSize.hashCode;

  @override
  int compareTo(other) => iconName.compareTo(other.iconName);
}
