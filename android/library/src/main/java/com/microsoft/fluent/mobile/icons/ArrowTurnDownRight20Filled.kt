package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnDownRight20: ImageVector
  get() {
    if (_arrowTurnDownRight20 != null) {
      return _arrowTurnDownRight20!!
    }
    _arrowTurnDownRight20 = fluentIcon(name = "Filled.ArrowTurnDownRight20", 20f) {
      materialPath {
          moveTo(10.72F, 16.78F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.72F, 2.72F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(3.75F)
          curveTo(5.5F, 3.336F, 5.164F, 3.0F, 4.75F, 3.0F)
          reflectiveCurveTo(4.0F, 3.336F, 4.0F, 3.75F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.44F)
          lineToRelative(-2.72F, 2.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _arrowTurnDownRight20!!
  }

private var _arrowTurnDownRight20: ImageVector? = null
