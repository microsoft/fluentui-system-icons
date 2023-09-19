package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Frame20: ImageVector
  get() {
    if (_frame20 != null) {
      return _frame20!!
    }
    _frame20 = fluentIcon(name = "Regular.Frame20", 20f) {
      materialPath {
          moveTo(5.0F, 2.5F)
          curveTo(5.0F, 2.224F, 4.776F, 2.0F, 4.5F, 2.0F)
          reflectiveCurveTo(4.0F, 2.224F, 4.0F, 2.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 4.0F, 2.0F, 4.224F, 2.0F, 4.5F)
          reflectiveCurveTo(2.224F, 5.0F, 2.5F, 5.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 15.0F, 2.0F, 15.224F, 2.0F, 15.5F)
          reflectiveCurveTo(2.224F, 16.0F, 2.5F, 16.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(1.5F)
          curveTo(4.0F, 17.776F, 4.224F, 18.0F, 4.5F, 18.0F)
          reflectiveCurveTo(5.0F, 17.776F, 5.0F, 17.5F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 15.0F, 17.5F, 15.0F)
          horizontalLineTo(16.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(1.5F)
          curveTo(17.776F, 5.0F, 18.0F, 4.776F, 18.0F, 4.5F)
          reflectiveCurveTo(17.776F, 4.0F, 17.5F, 4.0F)
          horizontalLineTo(16.0F)
          verticalLineTo(2.5F)
          curveTo(16.0F, 2.224F, 15.776F, 2.0F, 15.5F, 2.0F)
          reflectiveCurveTo(15.0F, 2.224F, 15.0F, 2.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(2.5F)
          close()
          moveTo(15.0F, 5.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(10.0F)
          close()        
      }
    }
    return _frame20!!
  }

private var _frame20: ImageVector? = null
