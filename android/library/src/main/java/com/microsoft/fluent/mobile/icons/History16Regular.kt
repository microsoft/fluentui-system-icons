package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.History16: ImageVector
  get() {
    if (_history16 != null) {
      return _history16!!
    }
    _history16 = fluentIcon(name = "Regular.History16", 16f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(2.0F, 7.724F, 2.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, 2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          curveTo(6.463F, 2.0F, 5.061F, 2.578F, 4.0F, 3.528F)
          verticalLineTo(2.5F)
          curveTo(4.0F, 2.224F, 3.776F, 2.0F, 3.5F, 2.0F)
          reflectiveCurveTo(3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(3.0F)
          curveTo(3.0F, 5.776F, 3.224F, 6.0F, 3.5F, 6.0F)
          horizontalLineToRelative(2.0F)
          curveTo(5.776F, 6.0F, 6.0F, 5.776F, 6.0F, 5.5F)
          reflectiveCurveTo(5.776F, 5.0F, 5.5F, 5.0F)
          horizontalLineTo(4.0F)
          curveToRelative(0.913F, -1.216F, 2.365F, -2.0F, 4.0F, -2.0F)
          close()
          moveToRelative(0.001F, 2.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(9.777F, 8.0F, 9.501F, 8.0F)
          horizontalLineToRelative(-1.5F)
          verticalLineTo(5.5F)
          close()        
      }
    }
    return _history16!!
  }

private var _history16: ImageVector? = null
