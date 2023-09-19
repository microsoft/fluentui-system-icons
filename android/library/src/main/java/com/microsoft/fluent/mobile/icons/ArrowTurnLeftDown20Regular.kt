package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnLeftDown20: ImageVector
  get() {
    if (_arrowTurnLeftDown20 != null) {
      return _arrowTurnLeftDown20!!
    }
    _arrowTurnLeftDown20 = fluentIcon(name = "Regular.ArrowTurnLeftDown20", 20f) {
      materialPath {
          moveTo(3.147F, 11.146F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(8.0F, 14.293F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(6.5F)
          curveTo(16.776F, 6.0F, 17.0F, 5.776F, 17.0F, 5.5F)
          reflectiveCurveTo(16.776F, 5.0F, 16.5F, 5.0F)
          horizontalLineTo(10.0F)
          curveTo(8.343F, 5.0F, 7.0F, 6.343F, 7.0F, 8.0F)
          verticalLineToRelative(6.293F)
          lineToRelative(-3.147F, -3.147F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          close()        
      }
    }
    return _arrowTurnLeftDown20!!
  }

private var _arrowTurnLeftDown20: ImageVector? = null
