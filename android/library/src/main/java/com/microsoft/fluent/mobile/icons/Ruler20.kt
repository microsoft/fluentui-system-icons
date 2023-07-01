package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ruler20: ImageVector
  get() {
    if (_ruler20 != null) {
      return _ruler20!!
    }
    _ruler20 = fluentIcon(name = "Regular.Ruler20", 20f) {
      materialPath {
          moveTo(14.0F, 3.5F)
          curveTo(14.0F, 2.672F, 13.328F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(6.672F, 2.0F, 6.0F, 2.672F, 6.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(6.0F, 17.328F, 6.672F, 18.0F, 7.5F, 18.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveToRelative(-7.0F, 9.504F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(7.0F)
          verticalLineTo(10.5F)
          horizontalLineToRelative(1.5F)
          curveTo(8.776F, 10.5F, 9.0F, 10.276F, 9.0F, 10.0F)
          reflectiveCurveTo(8.776F, 9.5F, 8.5F, 9.5F)
          horizontalLineTo(7.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(2.5F)
          curveTo(9.776F, 8.0F, 10.0F, 7.776F, 10.0F, 7.5F)
          reflectiveCurveTo(9.776F, 7.0F, 9.5F, 7.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(5.5F)
          horizontalLineToRelative(1.5F)
          curveTo(8.776F, 5.5F, 9.0F, 5.276F, 9.0F, 5.0F)
          reflectiveCurveTo(8.776F, 4.5F, 8.5F, 4.5F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(-1.0F)
          curveTo(7.0F, 3.224F, 7.224F, 3.0F, 7.5F, 3.0F)
          horizontalLineToRelative(5.0F)
          curveTo(12.776F, 3.0F, 13.0F, 3.224F, 13.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 17.0F, 7.0F, 16.776F, 7.0F, 16.5F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(1.5F)
          curveTo(8.776F, 15.5F, 9.0F, 15.276F, 9.0F, 15.0F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(-1.496F)
          close()        
      }
    }
    return _ruler20!!
  }

private var _ruler20: ImageVector? = null
