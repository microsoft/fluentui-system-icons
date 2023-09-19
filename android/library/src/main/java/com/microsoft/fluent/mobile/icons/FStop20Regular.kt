package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FStop20: ImageVector
  get() {
    if (_fStop20 != null) {
      return _fStop20!!
    }
    _fStop20 = fluentIcon(name = "Regular.FStop20", 20f) {
      materialPath {
          moveTo(10.884F, 5.35F)
          curveToRelative(0.291F, -1.706F, 2.03F, -2.753F, 3.673F, -2.216F)
          lineToRelative(0.788F, 0.258F)
          curveToRelative(0.262F, 0.086F, 0.544F, -0.057F, 0.63F, -0.32F)
          curveToRelative(0.086F, -0.262F, -0.057F, -0.545F, -0.32F, -0.63F)
          lineToRelative(-0.787F, -0.258F)
          curveToRelative(-2.224F, -0.728F, -4.575F, 0.69F, -4.97F, 2.997F)
          lineTo(9.244F, 9.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 9.0F, 5.0F, 9.224F, 5.0F, 9.5F)
          reflectiveCurveTo(5.224F, 10.0F, 5.5F, 10.0F)
          horizontalLineToRelative(3.573F)
          lineToRelative(-0.622F, 3.633F)
          curveToRelative(-0.335F, 1.96F, -2.531F, 2.974F, -4.24F, 1.958F)
          lineToRelative(-0.455F, -0.27F)
          curveToRelative(-0.238F, -0.142F, -0.545F, -0.064F, -0.686F, 0.174F)
          curveToRelative(-0.14F, 0.237F, -0.063F, 0.544F, 0.175F, 0.685F)
          lineTo(3.7F, 16.45F)
          curveToRelative(2.312F, 1.375F, 5.283F, 0.003F, 5.737F, -2.648F)
          lineTo(10.087F, 10.0F)
          horizontalLineTo(13.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 9.0F, 13.5F, 9.0F)
          horizontalLineToRelative(-3.241F)
          lineToRelative(0.625F, -3.65F)
          close()        
      }
    }
    return _fStop20!!
  }

private var _fStop20: ImageVector? = null
