package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookUpRight24: ImageVector
  get() {
    if (_arrowHookUpRight24 != null) {
      return _arrowHookUpRight24!!
    }
    _arrowHookUpRight24 = fluentIcon(name = "Regular.ArrowHookUpRight24", 24f) {
      materialPath {
          moveTo(10.5F, 18.5F)
          horizontalLineToRelative(5.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(16.664F, 20.0F, 16.25F, 20.0F)
          horizontalLineTo(10.5F)
          curveTo(6.91F, 20.0F, 4.0F, 17.09F, 4.0F, 13.5F)
          reflectiveCurveTo(6.91F, 7.0F, 10.5F, 7.0F)
          horizontalLineToRelative(5.95F)
          lineToRelative(-2.616F, -2.617F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(0.292F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.882F, 3.882F)
          curveToRelative(0.1F, 0.1F, 0.166F, 0.22F, 0.198F, 0.348F)
          curveTo(18.99F, 7.616F, 19.0F, 7.682F, 19.0F, 7.75F)
          curveToRelative(0.0F, 0.213F, -0.089F, 0.405F, -0.231F, 0.542F)
          lineToRelative(-3.88F, 3.88F)
          curveToRelative(-0.293F, 0.293F, -0.768F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.294F, -0.293F, -0.294F, -0.768F, 0.0F, -1.061F)
          lineToRelative(2.61F, -2.611F)
          horizontalLineTo(10.5F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()        
      }
    }
    return _arrowHookUpRight24!!
  }

private var _arrowHookUpRight24: ImageVector? = null
