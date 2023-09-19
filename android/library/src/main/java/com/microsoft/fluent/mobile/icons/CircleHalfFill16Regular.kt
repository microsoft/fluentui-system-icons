package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleHalfFill16: ImageVector
  get() {
    if (_circleHalfFill16 != null) {
      return _circleHalfFill16!!
    }
    _circleHalfFill16 = fluentIcon(name = "Regular.CircleHalfFill16", 16f) {
      materialPath {
          moveTo(14.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveTo(3.0F, 8.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveTo(3.0F, 5.239F, 3.0F, 8.0F)
          close()        
      }
    }
    return _circleHalfFill16!!
  }

private var _circleHalfFill16: ImageVector? = null
