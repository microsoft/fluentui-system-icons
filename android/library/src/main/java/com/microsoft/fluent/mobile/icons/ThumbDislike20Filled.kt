package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ThumbDislike20: ImageVector
  get() {
    if (_thumbDislike20 != null) {
      return _thumbDislike20!!
    }
    _thumbDislike20 = fluentIcon(name = "Filled.ThumbDislike20", 20f) {
      materialPath {
          moveTo(12.483F, 18.296F)
          curveToRelative(-0.799F, 0.837F, -2.092F, 0.387F, -2.431F, -0.59F)
          curveToRelative(-0.28F, -0.807F, -0.644F, -1.772F, -0.998F, -2.483F)
          curveToRelative(-1.06F, -2.126F, -1.678F, -3.336F, -3.384F, -4.85F)
          curveToRelative(-0.227F, -0.2F, -0.518F, -0.362F, -0.84F, -0.49F)
          curveTo(3.7F, 9.438F, 2.637F, 8.269F, 2.915F, 6.88F)
          lineToRelative(0.353F, -1.765F)
          curveToRelative(0.186F, -0.929F, 0.88F, -1.673F, 1.793F, -1.922F)
          lineToRelative(5.6F, -1.527F)
          curveToRelative(2.546F, -0.694F, 5.14F, 0.94F, 5.612F, 3.536F)
          lineToRelative(0.684F, 3.762F)
          curveToRelative(0.334F, 1.842F, -1.08F, 3.537F, -2.952F, 3.537F)
          horizontalLineToRelative(-0.883F)
          lineToRelative(0.01F, 0.052F)
          curveToRelative(0.08F, 0.408F, 0.176F, 0.97F, 0.24F, 1.583F)
          curveToRelative(0.065F, 0.61F, 0.1F, 1.284F, 0.049F, 1.912F)
          curveToRelative(-0.05F, 0.617F, -0.184F, 1.25F, -0.504F, 1.73F)
          curveToRelative(-0.11F, 0.164F, -0.272F, 0.348F, -0.435F, 0.519F)
          close()        
      }
    }
    return _thumbDislike20!!
  }

private var _thumbDislike20: ImageVector? = null
