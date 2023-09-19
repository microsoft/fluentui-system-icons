package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BeakerOff32: ImageVector
  get() {
    if (_beakerOff32 != null) {
      return _beakerOff32!!
    }
    _beakerOff32 = fluentIcon(name = "Filled.BeakerOff32", 32f) {
      materialPath {
          moveTo(26.329F, 27.743F)
          lineToRelative(1.964F, 1.964F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-26.0F, -26.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(9.705F, 9.705F)
          verticalLineToRelative(0.026F)
          curveToRelative(0.0F, 0.813F, -0.248F, 1.608F, -0.712F, 2.277F)
          lineTo(9.704F, 18.0F)
          horizontalLineToRelative(6.882F)
          lineToRelative(2.0F, 2.0F)
          horizontalLineTo(8.32F)
          lineToRelative(-2.744F, 3.962F)
          curveTo(4.103F, 26.092F, 5.626F, 29.0F, 8.216F, 29.0F)
          horizontalLineTo(23.78F)
          curveToRelative(1.083F, 0.0F, 1.98F, -0.51F, 2.549F, -1.257F)
          close()
          moveTo(21.538F, 18.0F)
          lineToRelative(-9.54F, -9.54F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -0.553F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.447F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(8.438F)
          curveToRelative(0.0F, 0.813F, 0.248F, 1.608F, 0.71F, 2.277F)
          lineTo(22.292F, 18.0F)
          horizontalLineToRelative(-0.753F)
          close()        
      }
    }
    return _beakerOff32!!
  }

private var _beakerOff32: ImageVector? = null
