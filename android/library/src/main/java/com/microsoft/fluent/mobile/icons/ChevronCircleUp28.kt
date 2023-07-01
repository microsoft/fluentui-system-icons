package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronCircleUp28: ImageVector
  get() {
    if (_chevronCircleUp28 != null) {
      return _chevronCircleUp28!!
    }
    _chevronCircleUp28 = fluentIcon(name = "Filled.ChevronCircleUp28", 28f) {
      materialPath {
          moveTo(2.0F, 14.0F)
          curveToRelative(0.0F, 6.627F, 5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveTo(2.0F, 7.373F, 2.0F, 14.0F)
          close()
          moveToRelative(7.03F, 2.78F)
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
