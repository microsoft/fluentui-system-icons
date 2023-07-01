package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnLeftRight48: ImageVector
  get() {
    if (_arrowTurnLeftRight48 != null) {
      return _arrowTurnLeftRight48!!
    }
    _arrowTurnLeftRight48 = fluentIcon(name = "Filled.ArrowTurnLeftRight48", 48f) {
      materialPath {
          moveTo(40.056F, 9.893F)
          curveToRelative(0.77F, -0.307F, 1.145F, -1.18F, 0.838F, -1.949F)
          curveToRelative(-0.308F, -0.77F, -1.18F, -1.144F, -1.95F, -0.837F)
          lineTo(7.391F, 19.702F)
          curveToRelative(-2.077F, 0.83F, -2.103F, 3.76F, -0.041F, 4.627F)
          lineToRelative(29.258F, 12.293F)
          lineToRelative(-7.728F, 3.513F)
          curveToRelative(-0.755F, 0.343F, -1.088F, 1.232F, -0.745F, 1.986F)
          curveToRelative(0.343F, 0.754F, 1.232F, 1.088F, 1.986F, 0.745F)
          lineToRelative(11.0F, -5.0F)
          curveToRelative(0.737F, -0.335F, 1.075F, -1.195F, 0.764F, -1.943F)
          lineToRelative(-5.0F, -12.0F)
          curveToRelative(-0.319F, -0.764F, -1.197F, -1.126F, -1.962F, -0.807F)
          curveToRelative(-0.764F, 0.318F, -1.126F, 1.197F, -0.807F, 1.961F)
          lineToRelative(3.659F, 8.781F)
          lineTo(9.637F, 22.036F)
          lineToRelative(30.42F, -12.143F)
          close()        
      }
    }
    return _arrowTurnLeftRight48!!
  }

private var _arrowTurnLeftRight48: ImageVector? = null
