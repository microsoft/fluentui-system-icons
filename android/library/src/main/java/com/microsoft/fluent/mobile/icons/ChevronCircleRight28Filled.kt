package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronCircleRight28: ImageVector
  get() {
    if (_chevronCircleRight28 != null) {
      return _chevronCircleRight28!!
    }
    _chevronCircleRight28 = fluentIcon(name = "Filled.ChevronCircleRight28", 28f) {
      materialPath {
          moveTo(14.0F, 26.0F)
          curveTo(7.373F, 26.0F, 2.0F, 20.627F, 2.0F, 14.0F)
          reflectiveCurveTo(7.373F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          close()
          moveToRelative(-2.78F, -7.03F)
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
