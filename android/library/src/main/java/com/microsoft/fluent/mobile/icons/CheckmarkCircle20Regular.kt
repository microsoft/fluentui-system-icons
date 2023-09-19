package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CheckmarkCircle20: ImageVector
  get() {
    if (_checkmarkCircle20 != null) {
      return _checkmarkCircle20!!
    }
    _checkmarkCircle20 = fluentIcon(name = "Regular.CheckmarkCircle20", 20f) {
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
          moveToRelative(3.358F, 4.646F)
          curveToRelative(0.174F, 0.174F, 0.193F, 0.443F, 0.058F, 0.638F)
          lineToRelative(-0.058F, 0.07F)
          lineToRelative(-4.005F, 4.004F)
          curveToRelative(-0.173F, 0.174F, -0.442F, 0.193F, -0.637F, 0.058F)
          lineToRelative(-0.07F, -0.058F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          curveTo(6.82F, 9.478F, 7.09F, 9.46F, 7.284F, 9.594F)
          lineToRelative(0.07F, 0.057F)
          lineTo(9.0F, 11.298F)
          lineToRelative(3.651F, -3.652F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          close()        
      }
    }
    return _checkmarkCircle20!!
  }

private var _checkmarkCircle20: ImageVector? = null
