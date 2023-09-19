package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PinOff32: ImageVector
  get() {
    if (_pinOff32 != null) {
      return _pinOff32!!
    }
    _pinOff32 = fluentIcon(name = "Filled.PinOff32", 32f) {
      materialPath {
          moveTo(20.187F, 21.601F)
          lineToRelative(8.106F, 8.106F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-26.0F, -26.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(8.106F, 8.106F)
          lineToRelative(-3.68F, 1.226F)
          curveToRelative(-1.41F, 0.47F, -1.833F, 2.26F, -0.782F, 3.312F)
          lineToRelative(4.15F, 4.149F)
          lineTo(4.0F, 26.586F)
          verticalLineTo(28.0F)
          horizontalLineToRelative(1.415F)
          lineToRelative(6.085F, -6.086F)
          lineToRelative(4.15F, 4.149F)
          curveToRelative(1.05F, 1.051F, 2.84F, 0.629F, 3.31F, -0.782F)
          lineToRelative(1.227F, -3.68F)
          close()
          moveToRelative(7.538F, -5.345F)
          lineToRelative(-5.29F, 2.644F)
          lineTo(13.1F, 9.565F)
          lineToRelative(2.645F, -5.29F)
          curveToRelative(1.22F, -2.442F, 4.475F, -2.97F, 6.406F, -1.04F)
          lineToRelative(6.613F, 6.615F)
          curveToRelative(1.93F, 1.93F, 1.403F, 5.185F, -1.04F, 6.406F)
          close()        
      }
    }
    return _pinOff32!!
  }

private var _pinOff32: ImageVector? = null
