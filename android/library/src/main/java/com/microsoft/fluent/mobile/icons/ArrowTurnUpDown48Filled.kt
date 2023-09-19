package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnUpDown48: ImageVector
  get() {
    if (_arrowTurnUpDown48 != null) {
      return _arrowTurnUpDown48!!
    }
    _arrowTurnUpDown48 = fluentIcon(name = "Filled.ArrowTurnUpDown48", 48f) {
      materialPath {
          moveTo(10.893F, 39.056F)
          curveToRelative(-0.307F, 0.77F, -1.18F, 1.145F, -1.949F, 0.838F)
          curveToRelative(-0.77F, -0.308F, -1.144F, -1.18F, -0.837F, -1.95F)
          lineTo(20.702F, 6.391F)
          curveToRelative(0.83F, -2.077F, 3.76F, -2.103F, 4.627F, -0.041F)
          lineToRelative(12.293F, 29.258F)
          lineToRelative(3.513F, -7.728F)
          curveToRelative(0.343F, -0.755F, 1.232F, -1.088F, 1.986F, -0.745F)
          curveToRelative(0.754F, 0.343F, 1.088F, 1.232F, 0.745F, 1.986F)
          lineToRelative(-5.0F, 11.0F)
          curveToRelative(-0.335F, 0.737F, -1.195F, 1.075F, -1.943F, 0.764F)
          lineToRelative(-12.0F, -5.0F)
          curveToRelative(-0.764F, -0.319F, -1.126F, -1.197F, -0.807F, -1.962F)
          curveToRelative(0.318F, -0.764F, 1.197F, -1.126F, 1.961F, -0.807F)
          lineToRelative(8.781F, 3.659F)
          lineTo(23.036F, 8.637F)
          lineToRelative(-12.143F, 30.42F)
          close()        
      }
    }
    return _arrowTurnUpDown48!!
  }

private var _arrowTurnUpDown48: ImageVector? = null
