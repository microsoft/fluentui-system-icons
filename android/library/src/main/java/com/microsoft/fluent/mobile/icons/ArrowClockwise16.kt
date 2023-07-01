package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowClockwise16: ImageVector
  get() {
    if (_arrowClockwise16 != null) {
      return _arrowClockwise16!!
    }
    _arrowClockwise16 = fluentIcon(name = "Regular.ArrowClockwise16", 16f) {
      materialPath {
          moveTo(3.0F, 8.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          curveToRelative(1.635F, 0.0F, 3.087F, 0.784F, 4.0F, 2.0F)
          horizontalLineTo(9.5F)
          curveTo(9.224F, 5.0F, 9.0F, 5.224F, 9.0F, 5.5F)
          reflectiveCurveTo(9.224F, 6.0F, 9.5F, 6.0F)
          horizontalLineToRelative(3.0F)
          curveTo(12.776F, 6.0F, 13.0F, 5.776F, 13.0F, 5.5F)
          verticalLineToRelative(-3.0F)
          curveTo(13.0F, 2.224F, 12.776F, 2.0F, 12.5F, 2.0F)
          reflectiveCurveTo(12.0F, 2.224F, 12.0F, 2.5F)
          verticalLineToRelative(1.028F)
          curveTo(10.939F, 2.578F, 9.537F, 2.0F, 8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(13.0F, 7.724F, 13.0F, 8.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()        
      }
    }
    return _arrowClockwise16!!
  }

private var _arrowClockwise16: ImageVector? = null
