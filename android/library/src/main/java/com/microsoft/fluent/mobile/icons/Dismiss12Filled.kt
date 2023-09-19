package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dismiss12: ImageVector
  get() {
    if (_dismiss12 != null) {
      return _dismiss12!!
    }
    _dismiss12 = fluentIcon(name = "Filled.Dismiss12", 12f) {
      materialPath {
          moveTo(1.897F, 2.054F)
          lineTo(1.97F, 1.97F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(3.03F, 1.97F)
          lineTo(6.0F, 4.939F)
          lineToRelative(2.97F, -2.97F)
          curveToRelative(0.293F, -0.292F, 0.767F, -0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.294F, 0.293F, 0.768F, 0.0F, 1.061F)
          lineTo(7.061F, 6.0F)
          lineToRelative(2.97F, 2.97F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.072F, 0.976F)
          lineTo(10.03F, 10.03F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(8.97F, 10.03F)
          lineTo(6.0F, 7.061F)
          lineToRelative(-2.97F, 2.97F)
          curveToRelative(-0.293F, 0.292F, -0.767F, 0.292F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.294F, -0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(4.939F, 6.0F)
          lineToRelative(-2.97F, -2.97F)
          curveTo(1.704F, 2.764F, 1.68F, 2.347F, 1.898F, 2.054F)
          lineTo(1.97F, 1.97F)
          lineTo(1.897F, 2.054F)
          close()        
      }
    }
    return _dismiss12!!
  }

private var _dismiss12: ImageVector? = null
