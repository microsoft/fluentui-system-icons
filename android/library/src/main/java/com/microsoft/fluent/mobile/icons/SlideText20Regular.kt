package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SlideText20: ImageVector
  get() {
    if (_slideText20 != null) {
      return _slideText20!!
    }
    _slideText20 = fluentIcon(name = "Regular.SlideText20", 20f) {
      materialPath {
          moveTo(5.5F, 7.0F)
          curveTo(5.224F, 7.0F, 5.0F, 7.224F, 5.0F, 7.5F)
          reflectiveCurveTo(5.224F, 8.0F, 5.5F, 8.0F)
          horizontalLineToRelative(4.0F)
          curveTo(9.776F, 8.0F, 10.0F, 7.776F, 10.0F, 7.5F)
          reflectiveCurveTo(9.776F, 7.0F, 9.5F, 7.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveTo(5.224F, 9.5F, 5.0F, 9.724F, 5.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(-0.5F, 3.0F)
          curveTo(5.0F, 12.224F, 5.224F, 12.0F, 5.5F, 12.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(10.776F, 13.0F, 10.5F, 13.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(5.224F, 13.0F, 5.0F, 12.776F, 5.0F, 12.5F)
          close()
          moveTo(4.5F, 4.0F)
          curveTo(3.12F, 4.0F, 2.0F, 5.12F, 2.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(18.0F, 5.12F, 16.88F, 4.0F, 15.5F, 4.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveTo(3.0F, 6.5F)
          curveTo(3.0F, 5.672F, 3.672F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(11.0F)
          curveTo(16.328F, 5.0F, 17.0F, 5.672F, 17.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.672F, 15.0F, 3.0F, 14.328F, 3.0F, 13.5F)
          verticalLineToRelative(-7.0F)
          close()        
      }
    }
    return _slideText20!!
  }

private var _slideText20: ImageVector? = null
