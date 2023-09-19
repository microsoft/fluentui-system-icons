package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleUp28: ImageVector
  get() {
    if (_chevronCircleUp28 != null) {
      return _chevronCircleUp28!!
    }
    _chevronCircleUp28 = fluentIcon(name = "Regular.ChevronCircleUp28", 28f) {
      materialPath {
          moveTo(3.5F, 14.0F)
          curveToRelative(0.0F, 5.799F, 4.701F, 10.5F, 10.5F, 10.5F)
          reflectiveCurveTo(24.5F, 19.799F, 24.5F, 14.0F)
          reflectiveCurveTo(19.799F, 3.5F, 14.0F, 3.5F)
          reflectiveCurveTo(3.5F, 8.201F, 3.5F, 14.0F)
          close()
          moveTo(14.0F, 26.0F)
          curveTo(7.373F, 26.0F, 2.0F, 20.627F, 2.0F, 14.0F)
          reflectiveCurveTo(7.373F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          close()
          moveToRelative(-4.97F, -9.22F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(5.5F, -5.5F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(5.5F, 5.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(14.0F, 11.81F)
          lineToRelative(-4.97F, 4.97F)
          close()        
      }
    }
    return _chevronCircleUp28!!
  }

private var _chevronCircleUp28: ImageVector? = null
