package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowHookDownLeft24: ImageVector
  get() {
    if (_arrowHookDownLeft24 != null) {
      return _arrowHookDownLeft24!!
    }
    _arrowHookDownLeft24 = fluentIcon(name = "Regular.ArrowHookDownLeft24", 24f) {
      materialPath {
          moveTo(7.0F, 4.75F)
          curveTo(7.0F, 4.336F, 7.336F, 4.0F, 7.75F, 4.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.979F, 0.0F, 3.504F, 0.823F, 4.52F, 2.074F)
          curveTo(19.52F, 7.307F, 20.0F, 8.92F, 20.0F, 10.5F)
          reflectiveCurveToRelative(-0.48F, 3.193F, -1.48F, 4.426F)
          curveTo(17.504F, 16.177F, 15.979F, 17.0F, 14.0F, 17.0F)
          horizontalLineTo(7.56F)
          lineToRelative(2.47F, 2.47F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-3.75F, -3.75F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.75F, -3.75F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(7.56F, 15.5F)
          horizontalLineTo(14.0F)
          curveToRelative(1.521F, 0.0F, 2.62F, -0.615F, 3.355F, -1.52F)
          curveToRelative(0.75F, -0.923F, 1.145F, -2.185F, 1.145F, -3.48F)
          reflectiveCurveToRelative(-0.396F, -2.557F, -1.145F, -3.48F)
          curveTo(16.621F, 6.114F, 15.521F, 5.5F, 14.0F, 5.5F)
          horizontalLineTo(7.75F)
          curveTo(7.336F, 5.5F, 7.0F, 5.164F, 7.0F, 4.75F)
          close()        
      }
    }
    return _arrowHookDownLeft24!!
  }

private var _arrowHookDownLeft24: ImageVector? = null
