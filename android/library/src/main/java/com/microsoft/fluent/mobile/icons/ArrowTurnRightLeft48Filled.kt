package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRightLeft48: ImageVector
  get() {
    if (_arrowTurnRightLeft48 != null) {
      return _arrowTurnRightLeft48!!
    }
    _arrowTurnRightLeft48 = fluentIcon(name = "Filled.ArrowTurnRightLeft48", 48f) {
      materialPath {
          moveTo(8.944F, 9.893F)
          curveTo(8.174F, 9.586F, 7.8F, 8.713F, 8.107F, 7.944F)
          curveToRelative(0.307F, -0.77F, 1.18F, -1.144F, 1.95F, -0.837F)
          lineToRelative(31.552F, 12.595F)
          curveToRelative(2.078F, 0.83F, 2.104F, 3.76F, 0.042F, 4.627F)
          lineTo(12.393F, 36.622F)
          lineToRelative(7.728F, 3.513F)
          curveToRelative(0.754F, 0.343F, 1.088F, 1.232F, 0.745F, 1.986F)
          curveToRelative(-0.343F, 0.754F, -1.232F, 1.088F, -1.986F, 0.745F)
          lineToRelative(-11.0F, -5.0F)
          curveToRelative(-0.738F, -0.335F, -1.076F, -1.195F, -0.764F, -1.943F)
          lineToRelative(5.0F, -12.0F)
          curveToRelative(0.318F, -0.764F, 1.197F, -1.126F, 1.961F, -0.807F)
          curveToRelative(0.765F, 0.318F, 1.127F, 1.197F, 0.808F, 1.961F)
          lineToRelative(-3.659F, 8.781F)
          lineToRelative(28.137F, -11.822F)
          lineTo(8.944F, 9.893F)
          close()        
      }
    }
    return _arrowTurnRightLeft48!!
  }

private var _arrowTurnRightLeft48: ImageVector? = null
