package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleHalfFill12: ImageVector
  get() {
    if (_circleHalfFill12 != null) {
      return _circleHalfFill12!!
    }
    _circleHalfFill12 = fluentIcon(name = "Filled.CircleHalfFill12", 12f) {
      materialPath {
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(1.5F, 0.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          reflectiveCurveTo(2.5F, 4.067F, 2.5F, 6.0F)
          close()        
      }
    }
    return _circleHalfFill12!!
  }

private var _circleHalfFill12: ImageVector? = null
