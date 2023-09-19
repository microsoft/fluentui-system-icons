package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SpinnerIos16: ImageVector
  get() {
    if (_spinnerIos16 != null) {
      return _spinnerIos16!!
    }
    _spinnerIos16 = fluentIcon(name = "Regular.SpinnerIos16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(7.724F, 15.0F, 8.0F, 15.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(2.0F, 8.276F, 2.0F, 8.0F)
          close()        
      }
    }
    return _spinnerIos16!!
  }

private var _spinnerIos16: ImageVector? = null
