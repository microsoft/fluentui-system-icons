package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DismissCircle20: ImageVector
  get() {
    if (_dismissCircle20 != null) {
      return _dismissCircle20!!
    }
    _dismissCircle20 = fluentIcon(name = "Filled.DismissCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveTo(7.81F, 7.114F)
          curveTo(7.614F, 6.979F, 7.344F, 6.998F, 7.171F, 7.172F)
          lineTo(7.114F, 7.24F)
          curveTo(6.979F, 7.436F, 6.998F, 7.705F, 7.172F, 7.879F)
          lineTo(9.292F, 10.0F)
          lineToRelative(-2.12F, 2.121F)
          lineToRelative(-0.058F, 0.07F)
          curveToRelative(-0.135F, 0.194F, -0.116F, 0.464F, 0.058F, 0.637F)
          lineToRelative(0.069F, 0.058F)
          curveToRelative(0.195F, 0.135F, 0.464F, 0.116F, 0.638F, -0.058F)
          lineTo(10.0F, 10.708F)
          lineToRelative(2.121F, 2.12F)
          lineToRelative(0.07F, 0.058F)
          curveToRelative(0.194F, 0.135F, 0.464F, 0.116F, 0.637F, -0.058F)
          lineToRelative(0.058F, -0.069F)
          curveToRelative(0.135F, -0.195F, 0.116F, -0.464F, -0.058F, -0.638F)
          lineTo(10.708F, 10.0F)
          lineToRelative(2.12F, -2.121F)
          lineToRelative(0.058F, -0.07F)
          curveToRelative(0.135F, -0.194F, 0.116F, -0.464F, -0.058F, -0.637F)
          lineTo(12.76F, 7.114F)
          curveToRelative(-0.195F, -0.135F, -0.464F, -0.116F, -0.638F, 0.058F)
          lineTo(10.0F, 9.292F)
          lineToRelative(-2.121F, -2.12F)
          lineToRelative(-0.07F, -0.058F)
          close()        
      }
    }
    return _dismissCircle20!!
  }

private var _dismissCircle20: ImageVector? = null
