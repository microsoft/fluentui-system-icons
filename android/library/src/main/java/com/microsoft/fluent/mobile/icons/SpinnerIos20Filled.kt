package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SpinnerIos20: ImageVector
  get() {
    if (_spinnerIos20 != null) {
      return _spinnerIos20!!
    }
    _spinnerIos20 = fluentIcon(name = "Filled.SpinnerIos20", 20f) {
      materialPath {
          moveTo(10.0F, 3.5F)
          curveToRelative(-3.59F, 0.0F, -6.5F, 2.91F, -6.5F, 6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(2.0F, 10.414F, 2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(9.586F, 16.5F, 10.0F, 16.5F)
          curveToRelative(3.59F, 0.0F, 6.5F, -2.91F, 6.5F, -6.5F)
          reflectiveCurveTo(13.59F, 3.5F, 10.0F, 3.5F)
          close()        
      }
    }
    return _spinnerIos20!!
  }

private var _spinnerIos20: ImageVector? = null
