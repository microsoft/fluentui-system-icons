package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ThumbLike20: ImageVector
  get() {
    if (_thumbLike20 != null) {
      return _thumbLike20!!
    }
    _thumbLike20 = fluentIcon(name = "Filled.ThumbLike20", 20f) {
      materialPath {
          moveTo(12.483F, 1.704F)
          curveToRelative(-0.799F, -0.837F, -2.092F, -0.387F, -2.431F, 0.59F)
          curveTo(9.772F, 3.1F, 9.408F, 4.066F, 9.054F, 4.777F)
          curveTo(7.994F, 6.903F, 7.376F, 8.112F, 5.67F, 9.626F)
          curveToRelative(-0.227F, 0.2F, -0.518F, 0.363F, -0.84F, 0.49F)
          curveToRelative(-1.13F, 0.446F, -2.192F, 1.616F, -1.914F, 3.005F)
          lineToRelative(0.353F, 1.765F)
          curveToRelative(0.186F, 0.928F, 0.88F, 1.672F, 1.793F, 1.922F)
          lineToRelative(5.6F, 1.527F)
          curveToRelative(2.546F, 0.694F, 5.14F, -0.94F, 5.612F, -3.537F)
          lineToRelative(0.684F, -3.761F)
          curveToRelative(0.334F, -1.842F, -1.08F, -3.537F, -2.952F, -3.537F)
          horizontalLineToRelative(-0.883F)
          lineToRelative(0.01F, -0.052F)
          curveToRelative(0.08F, -0.409F, 0.176F, -0.97F, 0.24F, -1.583F)
          curveToRelative(0.065F, -0.61F, 0.1F, -1.285F, 0.049F, -1.913F)
          curveToRelative(-0.05F, -0.616F, -0.184F, -1.249F, -0.504F, -1.73F)
          curveToRelative(-0.11F, -0.164F, -0.272F, -0.348F, -0.435F, -0.518F)
          close()        
      }
    }
    return _thumbLike20!!
  }

private var _thumbLike20: ImageVector? = null
