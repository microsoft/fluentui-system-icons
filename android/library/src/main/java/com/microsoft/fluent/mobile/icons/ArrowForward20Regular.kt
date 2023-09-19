package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowForward20: ImageVector
  get() {
    if (_arrowForward20 != null) {
      return _arrowForward20!!
    }
    _arrowForward20 = fluentIcon(name = "Regular.ArrowForward20", 20f) {
      materialPath {
          moveTo(16.293F, 9.0F)
          lineToRelative(-3.39F, 3.39F)
          curveToRelative(-0.194F, 0.195F, -0.194F, 0.511F, 0.0F, 0.707F)
          curveToRelative(0.174F, 0.173F, 0.444F, 0.193F, 0.639F, 0.058F)
          lineToRelative(0.069F, -0.058F)
          lineToRelative(4.243F, -4.243F)
          curveToRelative(0.173F, -0.174F, 0.192F, -0.443F, 0.057F, -0.638F)
          lineToRelative(-0.057F, -0.07F)
          lineToRelative(-4.243F, -4.242F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.174F, 0.174F, -0.193F, 0.443F, -0.058F, 0.638F)
          lineToRelative(0.058F, 0.07F)
          lineTo(16.293F, 8.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-4.06F, 0.0F, -7.368F, 3.228F, -7.496F, 7.258F)
          lineTo(2.5F, 15.5F)
          curveTo(2.5F, 15.777F, 2.724F, 16.0F, 3.0F, 16.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          curveToRelative(0.0F, -3.512F, 2.785F, -6.374F, 6.267F, -6.496F)
          lineTo(10.0F, 9.0F)
          horizontalLineToRelative(6.293F)
          close()        
      }
    }
    return _arrowForward20!!
  }

private var _arrowForward20: ImageVector? = null
