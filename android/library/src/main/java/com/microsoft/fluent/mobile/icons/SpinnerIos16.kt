package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SpinnerIos16: ImageVector
  get() {
    if (_spinnerIos16 != null) {
      return _spinnerIos16!!
    }
    _spinnerIos16 = fluentIcon(name = "Filled.SpinnerIos16", 16f) {
      materialPath {
          moveTo(2.501F, 8.0F)
          curveToRelative(0.0F, -3.038F, 2.462F, -5.5F, 5.5F, -5.5F)
          reflectiveCurveToRelative(5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveToRelative(-2.462F, 5.5F, -5.5F, 5.5F)
          curveToRelative(-0.414F, 0.0F, -0.751F, 0.336F, -0.751F, 0.75F)
          reflectiveCurveTo(7.586F, 15.0F, 8.0F, 15.0F)
          curveToRelative(3.866F, 0.0F, 7.001F, -3.134F, 7.001F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          curveToRelative(-3.852F, 0.0F, -6.978F, 3.112F, -7.0F, 6.96F)
          lineTo(1.0F, 8.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(2.501F, 8.414F, 2.501F, 8.0F)
          close()        
      }
    }
    return _spinnerIos16!!
  }

private var _spinnerIos16: ImageVector? = null
