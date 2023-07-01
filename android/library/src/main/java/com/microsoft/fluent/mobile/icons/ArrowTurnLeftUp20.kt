package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnLeftUp20: ImageVector
  get() {
    if (_arrowTurnLeftUp20 != null) {
      return _arrowTurnLeftUp20!!
    }
    _arrowTurnLeftUp20 = fluentIcon(name = "Filled.ArrowTurnLeftUp20", 20f) {
      materialPath {
          moveTo(3.22F, 9.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(8.5F, 6.56F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(6.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(16.664F, 16.0F, 16.25F, 16.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.56F)
          lineTo(4.28F, 9.28F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          close()        
      }
    }
    return _arrowTurnLeftUp20!!
  }

private var _arrowTurnLeftUp20: ImageVector? = null
