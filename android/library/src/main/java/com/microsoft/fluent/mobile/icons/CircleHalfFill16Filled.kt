package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleHalfFill16: ImageVector
  get() {
    if (_circleHalfFill16 != null) {
      return _circleHalfFill16!!
    }
    _circleHalfFill16 = fluentIcon(name = "Filled.CircleHalfFill16", 16f) {
      materialPath {
          moveTo(14.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveTo(3.5F, 8.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          reflectiveCurveTo(3.5F, 5.515F, 3.5F, 8.0F)
          close()        
      }
    }
    return _circleHalfFill16!!
  }

private var _circleHalfFill16: ImageVector? = null
