package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pipeline20: ImageVector
  get() {
    if (_pipeline20 != null) {
      return _pipeline20!!
    }
    _pipeline20 = fluentIcon(name = "Regular.Pipeline20", 20f) {
      materialPath {
          moveTo(2.0F, 5.5F)
          curveTo(2.0F, 4.672F, 2.672F, 4.0F, 3.5F, 4.0F)
          reflectiveCurveTo(5.0F, 4.672F, 5.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(5.5F)
          curveTo(15.0F, 4.672F, 15.672F, 4.0F, 16.5F, 4.0F)
          reflectiveCurveTo(18.0F, 4.672F, 18.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(15.0F, 15.328F, 15.0F, 14.5F)
          verticalLineTo(14.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(0.5F)
          curveTo(5.0F, 15.328F, 4.328F, 16.0F, 3.5F, 16.0F)
          reflectiveCurveTo(2.0F, 15.328F, 2.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(2.0F, 0.0F)
          curveTo(4.0F, 5.224F, 3.776F, 5.0F, 3.5F, 5.0F)
          reflectiveCurveTo(3.0F, 5.224F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 14.776F, 3.224F, 15.0F, 3.5F, 15.0F)
          reflectiveCurveTo(4.0F, 14.776F, 4.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(15.0F, 7.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(2.0F, -1.5F)
          curveTo(17.0F, 5.224F, 16.776F, 5.0F, 16.5F, 5.0F)
          reflectiveCurveTo(16.0F, 5.224F, 16.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-9.0F)
          close()        
      }
    }
    return _pipeline20!!
  }

private var _pipeline20: ImageVector? = null
