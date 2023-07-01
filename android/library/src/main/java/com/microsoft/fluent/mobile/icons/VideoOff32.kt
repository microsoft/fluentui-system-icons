package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoOff32: ImageVector
  get() {
    if (_videoOff32 != null) {
      return _videoOff32!!
    }
    _videoOff32 = fluentIcon(name = "Filled.VideoOff32", 32f) {
      materialPath {
          moveTo(20.5F, 21.914F)
          lineToRelative(7.793F, 7.793F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-26.0F, -26.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(4.536F, 5.95F)
          curveTo(3.035F, 6.68F, 2.0F, 8.219F, 2.0F, 10.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineTo(16.0F)
          curveToRelative(2.486F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-0.086F)
          close()
          moveToRelative(1.5F, -3.449F)
          lineToRelative(5.245F, 5.244F)
          curveTo(28.452F, 24.373F, 30.0F, 23.511F, 30.0F, 22.067F)
          verticalLineTo(9.933F)
          curveToRelative(0.0F, -1.538F, -1.756F, -2.416F, -2.987F, -1.493F)
          lineTo(22.0F, 12.2F)
          verticalLineToRelative(6.265F)
          close()
          moveTo(9.035F, 5.5F)
          lineTo(20.5F, 16.965F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -2.486F, -2.014F, -4.5F, -4.5F, -4.5F)
          horizontalLineTo(9.035F)
          close()        
      }
    }
    return _videoOff32!!
  }

private var _videoOff32: ImageVector? = null
