package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleRight28: ImageVector
  get() {
    if (_chevronCircleRight28 != null) {
      return _chevronCircleRight28!!
    }
    _chevronCircleRight28 = fluentIcon(name = "Regular.ChevronCircleRight28", 28f) {
      materialPath {
          moveTo(14.0F, 24.5F)
          curveTo(8.201F, 24.5F, 3.5F, 19.799F, 3.5F, 14.0F)
          reflectiveCurveTo(8.201F, 3.5F, 14.0F, 3.5F)
          reflectiveCurveTo(24.5F, 8.201F, 24.5F, 14.0F)
          reflectiveCurveTo(19.799F, 24.5F, 14.0F, 24.5F)
          close()
          moveTo(2.0F, 14.0F)
          curveToRelative(0.0F, 6.627F, 5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveTo(2.0F, 7.373F, 2.0F, 14.0F)
          close()
          moveToRelative(9.22F, 4.97F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(5.5F, -5.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-5.5F, -5.5F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(16.19F, 14.0F)
          lineToRelative(-4.97F, 4.97F)
          close()        
      }
    }
    return _chevronCircleRight28!!
  }

private var _chevronCircleRight28: ImageVector? = null
