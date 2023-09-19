package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnRight20: ImageVector
  get() {
    if (_arrowTurnRight20 != null) {
      return _arrowTurnRight20!!
    }
    _arrowTurnRight20 = fluentIcon(name = "Regular.ArrowTurnRight20", 20f) {
      materialPath {
          moveTo(11.146F, 3.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(14.293F, 8.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(6.5F)
          curveTo(6.0F, 16.776F, 5.776F, 17.0F, 5.5F, 17.0F)
          reflectiveCurveTo(5.0F, 16.776F, 5.0F, 16.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(6.293F)
          lineToRelative(-3.147F, -3.147F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          close()        
      }
    }
    return _arrowTurnRight20!!
  }

private var _arrowTurnRight20: ImageVector? = null
