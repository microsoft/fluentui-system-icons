package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRightUp20: ImageVector
  get() {
    if (_arrowTurnRightUp20 != null) {
      return _arrowTurnRightUp20!!
    }
    _arrowTurnRightUp20 = fluentIcon(name = "Filled.ArrowTurnRightUp20", 20f) {
      materialPath {
          moveTo(16.78F, 9.28F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.72F, -2.72F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 14.5F, 3.0F, 14.836F, 3.0F, 15.25F)
          reflectiveCurveTo(3.336F, 16.0F, 3.75F, 16.0F)
          horizontalLineTo(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.56F)
          lineToRelative(2.72F, 2.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _arrowTurnRightUp20!!
  }

private var _arrowTurnRightUp20: ImageVector? = null
