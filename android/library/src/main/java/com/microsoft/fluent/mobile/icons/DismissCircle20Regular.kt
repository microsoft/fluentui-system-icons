package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DismissCircle20: ImageVector
  get() {
    if (_dismissCircle20 != null) {
      return _dismissCircle20!!
    }
    _dismissCircle20 = fluentIcon(name = "Regular.DismissCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveTo(7.81F, 7.114F)
          lineToRelative(0.069F, 0.058F)
          lineTo(10.0F, 9.292F)
          lineToRelative(2.121F, -2.12F)
          curveToRelative(0.174F, -0.174F, 0.443F, -0.193F, 0.638F, -0.058F)
          lineToRelative(0.07F, 0.058F)
          curveToRelative(0.173F, 0.173F, 0.192F, 0.443F, 0.057F, 0.637F)
          lineToRelative(-0.058F, 0.07F)
          lineTo(10.708F, 10.0F)
          lineToRelative(2.12F, 2.121F)
          curveToRelative(0.174F, 0.174F, 0.193F, 0.443F, 0.058F, 0.638F)
          lineToRelative(-0.058F, 0.07F)
          curveToRelative(-0.173F, 0.173F, -0.443F, 0.192F, -0.637F, 0.057F)
          lineToRelative(-0.07F, -0.058F)
          lineTo(10.0F, 10.708F)
          lineToRelative(-2.121F, 2.12F)
          curveToRelative(-0.174F, 0.174F, -0.443F, 0.193F, -0.638F, 0.058F)
          lineToRelative(-0.07F, -0.058F)
          curveToRelative(-0.173F, -0.173F, -0.192F, -0.443F, -0.057F, -0.637F)
          lineToRelative(0.058F, -0.07F)
          lineTo(9.292F, 10.0F)
          lineToRelative(-2.12F, -2.121F)
          curveTo(6.998F, 7.705F, 6.979F, 7.436F, 7.114F, 7.24F)
          lineToRelative(0.058F, -0.07F)
          curveToRelative(0.173F, -0.171F, 0.443F, -0.19F, 0.637F, -0.055F)
          close()        
      }
    }
    return _dismissCircle20!!
  }

private var _dismissCircle20: ImageVector? = null
