package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnDownLeft20: ImageVector
  get() {
    if (_arrowTurnDownLeft20 != null) {
      return _arrowTurnDownLeft20!!
    }
    _arrowTurnDownLeft20 = fluentIcon(name = "Regular.ArrowTurnDownLeft20", 20f) {
      materialPath {
          moveTo(8.854F, 16.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(5.707F, 12.0F)
          horizontalLineTo(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(3.5F)
          curveTo(14.0F, 3.224F, 14.224F, 3.0F, 14.5F, 3.0F)
          reflectiveCurveTo(15.0F, 3.224F, 15.0F, 3.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(5.707F)
          lineToRelative(3.147F, 3.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          close()        
      }
    }
    return _arrowTurnDownLeft20!!
  }

private var _arrowTurnDownLeft20: ImageVector? = null
