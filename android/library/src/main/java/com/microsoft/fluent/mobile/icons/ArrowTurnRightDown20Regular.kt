package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnRightDown20: ImageVector
  get() {
    if (_arrowTurnRightDown20 != null) {
      return _arrowTurnRightDown20!!
    }
    _arrowTurnRightDown20 = fluentIcon(name = "Regular.ArrowTurnRightDown20", 20f) {
      materialPath {
          moveTo(16.854F, 11.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineTo(12.0F, 14.293F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 6.0F, 3.0F, 5.776F, 3.0F, 5.5F)
          reflectiveCurveTo(3.224F, 5.0F, 3.5F, 5.0F)
          horizontalLineTo(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(6.293F)
          lineToRelative(3.146F, -3.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _arrowTurnRightDown20!!
  }

private var _arrowTurnRightDown20: ImageVector? = null
