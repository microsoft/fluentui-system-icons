package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnRightUp20: ImageVector
  get() {
    if (_arrowTurnRightUp20 != null) {
      return _arrowTurnRightUp20!!
    }
    _arrowTurnRightUp20 = fluentIcon(name = "Regular.ArrowTurnRightUp20", 20f) {
      materialPath {
          moveTo(16.854F, 8.854F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineTo(12.0F, 5.707F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 14.0F, 3.0F, 14.224F, 3.0F, 14.5F)
          reflectiveCurveTo(3.224F, 15.0F, 3.5F, 15.0F)
          horizontalLineTo(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(5.707F)
          lineToRelative(3.146F, 3.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _arrowTurnRightUp20!!
  }

private var _arrowTurnRightUp20: ImageVector? = null
