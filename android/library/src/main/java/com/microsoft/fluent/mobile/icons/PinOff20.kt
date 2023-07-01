package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PinOff20: ImageVector
  get() {
    if (_pinOff20 != null) {
      return _pinOff20!!
    }
    _pinOff20 = fluentIcon(name = "Filled.PinOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(4.75F, 4.75F)
          lineToRelative(-2.878F, 1.15F)
          curveTo(3.352F, 9.021F, 3.175F, 9.882F, 3.683F, 10.39F)
          lineTo(6.293F, 13.0F)
          lineTo(3.0F, 16.293F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(0.707F)
          lineTo(7.0F, 13.707F)
          lineToRelative(2.61F, 2.61F)
          curveToRelative(0.508F, 0.508F, 1.37F, 0.331F, 1.636F, -0.335F)
          lineToRelative(1.15F, -2.878F)
          lineToRelative(4.75F, 4.75F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveToRelative(14.01F, 7.73F)
          lineTo(13.62F, 11.5F)
          lineTo(8.501F, 6.38F)
          lineToRelative(1.621F, -3.241F)
          curveToRelative(0.61F, -1.221F, 2.238F, -1.485F, 3.203F, -0.52F)
          lineToRelative(4.057F, 4.057F)
          curveToRelative(0.965F, 0.965F, 0.701F, 2.592F, -0.52F, 3.203F)
          close()        
      }
    }
    return _pinOff20!!
  }

private var _pinOff20: ImageVector? = null
