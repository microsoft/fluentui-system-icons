package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowTurnDownRight20: ImageVector
  get() {
    if (_arrowTurnDownRight20 != null) {
      return _arrowTurnDownRight20!!
    }
    _arrowTurnDownRight20 = fluentIcon(name = "Regular.ArrowTurnDownRight20", 20f) {
      materialPath {
          moveTo(11.146F, 16.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-4.0F, -4.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(14.293F, 12.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(3.5F)
          curveTo(6.0F, 3.224F, 5.776F, 3.0F, 5.5F, 3.0F)
          reflectiveCurveTo(5.0F, 3.224F, 5.0F, 3.5F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.293F)
          lineToRelative(-3.147F, 3.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          close()        
      }
    }
    return _arrowTurnDownRight20!!
  }

private var _arrowTurnDownRight20: ImageVector? = null
