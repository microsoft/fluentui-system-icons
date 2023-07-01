package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Alert20: ImageVector
  get() {
    if (_alert20 != null) {
      return _alert20!!
    }
    _alert20 = fluentIcon(name = "Filled.Alert20", 20f) {
      materialPath {
          moveTo(12.45F, 16.002F)
          curveTo(12.217F, 17.142F, 11.209F, 18.0F, 10.0F, 18.0F)
          reflectiveCurveToRelative(-2.218F, -0.858F, -2.45F, -1.998F)
          horizontalLineToRelative(4.9F)
          close()
          moveTo(9.998F, 2.0F)
          curveToRelative(3.149F, 0.0F, 5.744F, 2.335F, 5.984F, 5.355F)
          lineToRelative(0.013F, 0.223F)
          lineTo(16.0F, 7.802F)
          lineToRelative(-0.001F, 3.606F)
          lineToRelative(0.954F, 2.587F)
          lineToRelative(0.025F, 0.085F)
          lineToRelative(0.016F, 0.086F)
          lineToRelative(0.005F, 0.089F)
          curveToRelative(0.0F, 0.315F, -0.196F, 0.59F, -0.522F, 0.707F)
          lineToRelative(-0.114F, 0.033F)
          lineToRelative(-0.114F, 0.01F)
          horizontalLineTo(3.751F)
          curveToRelative(-0.088F, 0.0F, -0.176F, -0.016F, -0.259F, -0.047F)
          curveToRelative(-0.287F, -0.105F, -0.476F, -0.372F, -0.482F, -0.716F)
          lineToRelative(0.004F, -0.117F)
          lineToRelative(0.034F, -0.13F)
          lineToRelative(0.951F, -2.584F)
          lineTo(4.0F, 7.793F)
          lineToRelative(0.004F, -0.225F)
          curveTo(4.127F, 4.451F, 6.771F, 2.0F, 9.998F, 2.0F)
          close()        
      }
    }
    return _alert20!!
  }

private var _alert20: ImageVector? = null
