package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnDownLeft20: ImageVector
  get() {
    if (_arrowTurnDownLeft20 != null) {
      return _arrowTurnDownLeft20!!
    }
    _arrowTurnDownLeft20 = fluentIcon(name = "Filled.ArrowTurnDownLeft20", 20f) {
      materialPath {
          moveTo(9.28F, 16.78F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(6.56F, 11.5F)
          horizontalLineTo(13.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(3.75F)
          curveTo(14.5F, 3.336F, 14.836F, 3.0F, 15.25F, 3.0F)
          reflectiveCurveTo(16.0F, 3.336F, 16.0F, 3.75F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.56F)
          lineToRelative(2.72F, 2.72F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _arrowTurnDownLeft20!!
  }

private var _arrowTurnDownLeft20: ImageVector? = null
