package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRightDown20: ImageVector
  get() {
    if (_arrowTurnRightDown20 != null) {
      return _arrowTurnRightDown20!!
    }
    _arrowTurnRightDown20 = fluentIcon(name = "Filled.ArrowTurnRightDown20", 20f) {
      materialPath {
          moveTo(16.78F, 10.72F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.72F, 2.72F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 5.5F, 3.0F, 5.164F, 3.0F, 4.75F)
          reflectiveCurveTo(3.336F, 4.0F, 3.75F, 4.0F)
          horizontalLineTo(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(6.44F)
          lineToRelative(2.72F, -2.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _arrowTurnRightDown20!!
  }

private var _arrowTurnRightDown20: ImageVector? = null
