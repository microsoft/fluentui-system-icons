package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCurveDownLeft28: ImageVector
  get() {
    if (_arrowCurveDownLeft28 != null) {
      return _arrowCurveDownLeft28!!
    }
    _arrowCurveDownLeft28 = fluentIcon(name = "Filled.ArrowCurveDownLeft28", 28f) {
      materialPath {
          moveTo(19.868F, 3.504F)
          curveToRelative(0.274F, 0.48F, 0.108F, 1.09F, -0.372F, 1.364F)
          curveTo(15.138F, 7.36F, 15.0F, 11.476F, 15.0F, 15.0F)
          verticalLineToRelative(7.086F)
          lineToRelative(4.293F, -4.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-6.0F, 6.0F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-6.0F, -6.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(13.0F, 22.086F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, -3.475F, 0.063F, -8.759F, 5.504F, -11.868F)
          curveToRelative(0.48F, -0.274F, 1.09F, -0.107F, 1.364F, 0.372F)
          close()        
      }
    }
    return _arrowCurveDownLeft28!!
  }

private var _arrowCurveDownLeft28: ImageVector? = null
