package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckmarkCircle20: ImageVector
  get() {
    if (_checkmarkCircle20 != null) {
      return _checkmarkCircle20!!
    }
    _checkmarkCircle20 = fluentIcon(name = "Filled.CheckmarkCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(3.358F, 5.646F)
          curveToRelative(-0.173F, -0.173F, -0.443F, -0.192F, -0.637F, -0.057F)
          lineToRelative(-0.07F, 0.057F)
          lineTo(9.0F, 11.299F)
          lineTo(7.354F, 9.651F)
          lineToRelative(-0.07F, -0.057F)
          curveTo(7.09F, 9.459F, 6.82F, 9.478F, 6.646F, 9.65F)
          curveToRelative(-0.173F, 0.175F, -0.192F, 0.444F, -0.056F, 0.64F)
          lineToRelative(0.057F, 0.07F)
          lineToRelative(2.0F, 2.0F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.17F, 0.118F, 0.398F, 0.118F, 0.568F, 0.0F)
          lineToRelative(0.07F, -0.058F)
          lineToRelative(4.004F, -4.005F)
          lineToRelative(0.058F, -0.069F)
          curveToRelative(0.135F, -0.195F, 0.116F, -0.464F, -0.058F, -0.638F)
          close()        
      }
    }
    return _checkmarkCircle20!!
  }

private var _checkmarkCircle20: ImageVector? = null
