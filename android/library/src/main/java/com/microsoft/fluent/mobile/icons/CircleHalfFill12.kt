package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleHalfFill12: ImageVector
  get() {
    if (_circleHalfFill12 != null) {
      return _circleHalfFill12!!
    }
    _circleHalfFill12 = fluentIcon(name = "Regular.CircleHalfFill12", 12f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(4.0F, -5.0F)
          curveTo(3.239F, 1.0F, 1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()        
      }
    }
    return _circleHalfFill12!!
  }

private var _circleHalfFill12: ImageVector? = null
