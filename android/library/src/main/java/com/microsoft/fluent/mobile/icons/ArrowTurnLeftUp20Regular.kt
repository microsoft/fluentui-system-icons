package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnLeftUp20: ImageVector
  get() {
    if (_arrowTurnLeftUp20 != null) {
      return _arrowTurnLeftUp20!!
    }
    _arrowTurnLeftUp20 = fluentIcon(name = "Regular.ArrowTurnLeftUp20", 20f) {
      materialPath {
          moveTo(3.147F, 8.854F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(8.0F, 5.707F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.776F, 15.0F, 16.5F, 15.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(5.707F)
          lineTo(3.853F, 8.854F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          close()        
      }
    }
    return _arrowTurnLeftUp20!!
  }

private var _arrowTurnLeftUp20: ImageVector? = null
