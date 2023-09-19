package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlertOff20: ImageVector
  get() {
    if (_alertOff20 != null) {
      return _alertOff20!!
    }
    _alertOff20 = fluentIcon(name = "Filled.AlertOff20", 20f) {
      materialPath {
          moveTo(4.004F, 7.568F)
          curveToRelative(0.032F, -0.815F, 0.237F, -1.585F, 0.58F, -2.277F)
          lineTo(2.147F, 2.853F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(15.0F, 15.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-2.849F, -2.85F)
          horizontalLineTo(3.752F)
          curveToRelative(-0.088F, 0.0F, -0.176F, -0.015F, -0.259F, -0.046F)
          curveToRelative(-0.287F, -0.105F, -0.476F, -0.372F, -0.482F, -0.716F)
          lineToRelative(0.004F, -0.117F)
          lineToRelative(0.034F, -0.13F)
          lineTo(4.0F, 11.411F)
          verticalLineTo(7.793F)
          lineToRelative(0.004F, -0.225F)
          close()
          moveTo(17.0F, 14.255F)
          curveToRelative(0.0F, 0.171F, -0.058F, 0.33F, -0.163F, 0.46F)
          lineTo(5.786F, 3.663F)
          curveTo(6.87F, 2.633F, 8.357F, 2.0F, 9.997F, 2.0F)
          curveToRelative(3.149F, 0.0F, 5.744F, 2.335F, 5.984F, 5.355F)
          lineToRelative(0.013F, 0.223F)
          lineTo(16.0F, 7.802F)
          lineToRelative(-0.001F, 3.606F)
          lineToRelative(0.954F, 2.587F)
          lineToRelative(0.025F, 0.085F)
          lineToRelative(0.016F, 0.086F)
          lineToRelative(0.005F, 0.089F)
          close()
          moveToRelative(-4.55F, 1.747F)
          curveTo(12.218F, 17.142F, 11.21F, 18.0F, 10.0F, 18.0F)
          curveToRelative(-1.209F, 0.0F, -2.218F, -0.858F, -2.45F, -1.998F)
          horizontalLineToRelative(4.9F)
          close()        
      }
    }
    return _alertOff20!!
  }

private var _alertOff20: ImageVector? = null
