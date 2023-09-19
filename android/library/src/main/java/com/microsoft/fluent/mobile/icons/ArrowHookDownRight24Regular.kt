package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookDownRight24: ImageVector
  get() {
    if (_arrowHookDownRight24 != null) {
      return _arrowHookDownRight24!!
    }
    _arrowHookDownRight24 = fluentIcon(name = "Regular.ArrowHookDownRight24", 24f) {
      materialPath {
          moveTo(10.5F, 5.5F)
          horizontalLineTo(16.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.414F, 4.0F, 16.0F, 4.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(6.91F, 4.0F, 4.0F, 6.91F, 4.0F, 10.5F)
          reflectiveCurveTo(6.91F, 17.0F, 10.5F, 17.0F)
          horizontalLineToRelative(5.95F)
          lineToRelative(-2.616F, 2.617F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(3.882F, -3.882F)
          curveToRelative(0.1F, -0.1F, 0.166F, -0.22F, 0.198F, -0.348F)
          curveTo(18.99F, 16.384F, 19.0F, 16.318F, 19.0F, 16.25F)
          curveToRelative(0.0F, -0.213F, -0.089F, -0.405F, -0.231F, -0.542F)
          lineToRelative(-3.88F, -3.88F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.294F, 0.293F, -0.294F, 0.768F, 0.0F, 1.061F)
          lineToRelative(2.61F, 2.611F)
          horizontalLineTo(10.5F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()        
      }
    }
    return _arrowHookDownRight24!!
  }

private var _arrowHookDownRight24: ImageVector? = null
