package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleRight24: ImageVector
  get() {
    if (_chevronCircleRight24 != null) {
      return _chevronCircleRight24!!
    }
    _chevronCircleRight24 = fluentIcon(name = "Regular.ChevronCircleRight24", 24f) {
      materialPath {
          moveTo(2.0F, 12.0F)
          curveTo(2.0F, 6.477F, 6.477F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.523F, 2.0F, 12.0F)
          close()
          moveToRelative(1.5F, 0.0F)
          curveToRelative(0.0F, 4.694F, 3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveToRelative(-3.806F, -8.5F, -8.5F, -8.5F)
          reflectiveCurveTo(3.5F, 7.306F, 3.5F, 12.0F)
          close()
          moveToRelative(6.47F, 4.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(13.44F, 12.0F)
          lineTo(9.97F, 8.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          close()        
      }
    }
    return _chevronCircleRight24!!
  }

private var _chevronCircleRight24: ImageVector? = null
