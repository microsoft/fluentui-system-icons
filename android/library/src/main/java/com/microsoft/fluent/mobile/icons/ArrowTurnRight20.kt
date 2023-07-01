package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRight20: ImageVector
  get() {
    if (_arrowTurnRight20 != null) {
      return _arrowTurnRight20!!
    }
    _arrowTurnRight20 = fluentIcon(name = "Filled.ArrowTurnRight20", 20f) {
      materialPath {
          moveTo(10.72F, 3.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.72F, -2.72F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(6.25F)
          curveTo(5.5F, 16.664F, 5.164F, 17.0F, 4.75F, 17.0F)
          reflectiveCurveTo(4.0F, 16.664F, 4.0F, 16.25F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(6.44F)
          lineToRelative(-2.72F, -2.72F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowTurnRight20!!
  }

private var _arrowTurnRight20: ImageVector? = null
