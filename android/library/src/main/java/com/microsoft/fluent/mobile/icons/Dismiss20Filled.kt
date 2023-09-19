package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dismiss20: ImageVector
  get() {
    if (_dismiss20 != null) {
      return _dismiss20!!
    }
    _dismiss20 = fluentIcon(name = "Filled.Dismiss20", 20f) {
      materialPath {
          moveTo(3.897F, 4.054F)
          lineTo(3.97F, 3.97F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(5.03F, 3.97F)
          lineTo(10.0F, 8.939F)
          lineToRelative(4.97F, -4.97F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.976F, -0.072F)
          lineTo(16.03F, 3.97F)
          curveToRelative(0.267F, 0.266F, 0.29F, 0.683F, 0.073F, 0.976F)
          lineTo(16.03F, 5.03F)
          lineTo(11.061F, 10.0F)
          lineToRelative(4.97F, 4.97F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.072F, 0.976F)
          lineTo(16.03F, 16.03F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(14.97F, 16.03F)
          lineTo(10.0F, 11.061F)
          lineToRelative(-4.97F, 4.97F)
          curveToRelative(-0.266F, 0.266F, -0.683F, 0.29F, -0.976F, 0.072F)
          lineTo(3.97F, 16.03F)
          curveToRelative(-0.267F, -0.266F, -0.29F, -0.683F, -0.073F, -0.976F)
          lineTo(3.97F, 14.97F)
          lineTo(8.939F, 10.0F)
          lineToRelative(-4.97F, -4.97F)
          curveTo(3.704F, 4.764F, 3.68F, 4.347F, 3.898F, 4.054F)
          lineTo(3.97F, 3.97F)
          lineTo(3.897F, 4.054F)
          close()        
      }
    }
    return _dismiss20!!
  }

private var _dismiss20: ImageVector? = null
