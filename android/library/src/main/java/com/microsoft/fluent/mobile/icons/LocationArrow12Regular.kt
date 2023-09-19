package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrow12: ImageVector
  get() {
    if (_locationArrow12 != null) {
      return _locationArrow12!!
    }
    _locationArrow12 = fluentIcon(name = "Regular.LocationArrow12", 12f) {
      materialPath {
          moveTo(10.932F, 2.361F)
          curveToRelative(0.31F, -0.809F, -0.484F, -1.603F, -1.293F, -1.292F)
          lineTo(1.642F, 4.145F)
          curveToRelative(-0.906F, 0.348F, -0.834F, 1.653F, 0.105F, 1.9F)
          lineToRelative(3.05F, 0.803F)
          curveTo(4.97F, 6.894F, 5.106F, 7.03F, 5.152F, 7.204F)
          lineToRelative(0.802F, 3.05F)
          curveToRelative(0.247F, 0.939F, 1.552F, 1.01F, 1.9F, 0.104F)
          lineToRelative(3.077F, -7.997F)
          close()
          moveTo(9.998F, 2.002F)
          lineTo(6.922F, 10.0F)
          lineTo(6.12F, 6.95F)
          curveTo(5.982F, 6.428F, 5.574F, 6.02F, 5.05F, 5.882F)
          lineTo(2.002F, 5.078F)
          lineToRelative(7.997F, -3.076F)
          close()        
      }
    }
    return _locationArrow12!!
  }

private var _locationArrow12: ImageVector? = null
