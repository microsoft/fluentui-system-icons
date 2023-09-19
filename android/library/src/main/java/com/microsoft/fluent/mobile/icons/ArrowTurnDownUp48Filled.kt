package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnDownUp48: ImageVector
  get() {
    if (_arrowTurnDownUp48 != null) {
      return _arrowTurnDownUp48!!
    }
    _arrowTurnDownUp48 = fluentIcon(name = "Filled.ArrowTurnDownUp48", 48f) {
      materialPath {
          moveTo(38.866F, 6.88F)
          curveToRelative(-0.335F, -0.738F, -1.195F, -1.076F, -1.943F, -0.764F)
          lineToRelative(-12.0F, 5.0F)
          curveToRelative(-0.764F, 0.318F, -1.126F, 1.197F, -0.807F, 1.961F)
          curveToRelative(0.318F, 0.765F, 1.197F, 1.127F, 1.961F, 0.808F)
          lineToRelative(8.781F, -3.659F)
          lineToRelative(-11.822F, 28.137F)
          lineTo(10.893F, 7.944F)
          curveToRelative(-0.307F, -0.77F, -1.18F, -1.144F, -1.949F, -0.837F)
          curveToRelative(-0.77F, 0.307F, -1.144F, 1.18F, -0.837F, 1.95F)
          lineToRelative(12.595F, 31.552F)
          curveToRelative(0.83F, 2.078F, 3.76F, 2.104F, 4.627F, 0.042F)
          lineToRelative(12.293F, -29.258F)
          lineToRelative(3.513F, 7.728F)
          curveToRelative(0.343F, 0.754F, 1.232F, 1.088F, 1.986F, 0.745F)
          curveToRelative(0.754F, -0.343F, 1.088F, -1.232F, 0.745F, -1.986F)
          lineToRelative(-5.0F, -11.0F)
          close()        
      }
    }
    return _arrowTurnDownUp48!!
  }

private var _arrowTurnDownUp48: ImageVector? = null
