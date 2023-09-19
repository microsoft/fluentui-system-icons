package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnLeftDown20: ImageVector
  get() {
    if (_arrowTurnLeftDown20 != null) {
      return _arrowTurnLeftDown20!!
    }
    _arrowTurnLeftDown20 = fluentIcon(name = "Filled.ArrowTurnLeftDown20", 20f) {
      materialPath {
          moveTo(3.22F, 10.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(8.5F, 13.44F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(6.25F)
          curveTo(16.664F, 5.5F, 17.0F, 5.164F, 17.0F, 4.75F)
          reflectiveCurveTo(16.664F, 4.0F, 16.25F, 4.0F)
          horizontalLineTo(10.0F)
          curveTo(8.343F, 4.0F, 7.0F, 5.343F, 7.0F, 7.0F)
          verticalLineToRelative(6.44F)
          lineToRelative(-2.72F, -2.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          close()        
      }
    }
    return _arrowTurnLeftDown20!!
  }

private var _arrowTurnLeftDown20: ImageVector? = null
