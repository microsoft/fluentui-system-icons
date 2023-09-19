package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CheckmarkCircle24: ImageVector
  get() {
    if (_checkmarkCircle24 != null) {
      return _checkmarkCircle24!!
    }
    _checkmarkCircle24 = fluentIcon(name = "Regular.CheckmarkCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveToRelative(-4.694F, 0.0F, -8.5F, 3.806F, -8.5F, 8.5F)
          reflectiveCurveToRelative(3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveToRelative(-3.806F, -8.5F, -8.5F, -8.5F)
          close()
          moveToRelative(-1.25F, 9.94F)
          lineToRelative(4.47F, -4.47F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.267F, 0.266F, 0.29F, 0.683F, 0.073F, 0.976F)
          lineTo(16.28F, 10.03F)
          lineToRelative(-5.0F, 5.0F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(10.22F, 15.03F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(8.78F, 11.47F)
          lineToRelative(1.97F, 1.97F)
          lineToRelative(4.47F, -4.47F)
          lineToRelative(-4.47F, 4.47F)
          close()        
      }
    }
    return _checkmarkCircle24!!
  }

private var _checkmarkCircle24: ImageVector? = null
