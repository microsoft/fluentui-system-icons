package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTurnRight24: ImageVector
  get() {
    if (_arrowTurnRight24 != null) {
      return _arrowTurnRight24!!
    }
    _arrowTurnRight24 = fluentIcon(name = "Filled.ArrowTurnRight24", 24f) {
      materialPath {
          moveTo(16.458F, 3.293F)
          curveToRelative(-0.39F, -0.39F, -1.023F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.023F, 0.0F, 1.414F)
          lineTo(17.337F, 7.0F)
          horizontalLineTo(10.5F)
          curveTo(8.015F, 7.0F, 6.0F, 9.015F, 6.0F, 11.5F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-8.5F)
          curveTo(8.0F, 10.12F, 9.12F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(7.335F)
          lineToRelative(-2.792F, 2.791F)
          curveToRelative(-0.39F, 0.391F, -0.39F, 1.024F, 0.0F, 1.415F)
          curveToRelative(0.39F, 0.39F, 1.023F, 0.39F, 1.414F, 0.0F)
          lineToRelative(4.25F, -4.25F)
          curveTo(20.895F, 8.77F, 21.0F, 8.516F, 21.0F, 8.25F)
          curveToRelative(0.0F, -0.266F, -0.105F, -0.52F, -0.293F, -0.707F)
          lineToRelative(-4.249F, -4.25F)
          close()        
      }
    }
    return _arrowTurnRight24!!
  }

private var _arrowTurnRight24: ImageVector? = null
