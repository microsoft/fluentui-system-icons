package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Stethoscope20: ImageVector
  get() {
    if (_stethoscope20 != null) {
      return _stethoscope20!!
    }
    _stethoscope20 = fluentIcon(name = "Regular.Stethoscope20", 20f) {
      materialPath {
          moveTo(2.5F, 2.0F)
          curveTo(2.224F, 2.0F, 2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 2.316F, 1.75F, 4.224F, 4.0F, 4.473F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineToRelative(-1.05F)
          curveToRelative(1.141F, -0.232F, 2.0F, -1.24F, 2.0F, -2.45F)
          curveTo(18.0F, 8.12F, 16.88F, 7.0F, 15.5F, 7.0F)
          reflectiveCurveTo(13.0F, 8.12F, 13.0F, 9.5F)
          curveToRelative(0.0F, 1.21F, 0.859F, 2.218F, 2.0F, 2.45F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          verticalLineToRelative(-1.027F)
          curveToRelative(2.25F, -0.25F, 4.0F, -2.157F, 4.0F, -4.473F)
          verticalLineToRelative(-5.0F)
          curveTo(11.0F, 2.224F, 10.776F, 2.0F, 10.5F, 2.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(8.224F, 2.0F, 8.0F, 2.224F, 8.0F, 2.5F)
          reflectiveCurveTo(8.224F, 3.0F, 8.5F, 3.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(4.5F)
          curveTo(10.0F, 9.433F, 8.433F, 11.0F, 6.5F, 11.0F)
          reflectiveCurveTo(3.0F, 9.433F, 3.0F, 7.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(1.5F)
          curveTo(4.776F, 3.0F, 5.0F, 2.776F, 5.0F, 2.5F)
          reflectiveCurveTo(4.776F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveToRelative(13.0F, 6.0F)
          curveTo(16.328F, 8.0F, 17.0F, 8.672F, 17.0F, 9.5F)
          reflectiveCurveTo(16.328F, 11.0F, 15.5F, 11.0F)
          reflectiveCurveTo(14.0F, 10.328F, 14.0F, 9.5F)
          reflectiveCurveTo(14.672F, 8.0F, 15.5F, 8.0F)
          close()        
      }
    }
    return _stethoscope20!!
  }

private var _stethoscope20: ImageVector? = null
