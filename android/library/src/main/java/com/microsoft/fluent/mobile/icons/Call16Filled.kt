package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Call16: ImageVector
  get() {
    if (_call16 != null) {
      return _call16!!
    }
    _call16 = fluentIcon(name = "Filled.Call16", 16f) {
      materialPath {
          moveTo(6.756F, 7.024F)
          lineTo(7.83F, 6.04F)
          curveToRelative(0.6F, -0.551F, 0.807F, -1.412F, 0.52F, -2.176F)
          lineTo(7.892F, 2.641F)
          curveTo(7.537F, 1.693F, 6.505F, 1.185F, 5.537F, 1.48F)
          curveTo(3.821F, 2.005F, 2.502F, 3.6F, 2.908F, 5.495F)
          curveToRelative(0.267F, 1.246F, 0.778F, 2.81F, 1.746F, 4.474F)
          curveToRelative(0.97F, 1.668F, 2.078F, 2.9F, 3.028F, 3.766F)
          curveToRelative(1.434F, 1.305F, 3.484F, 0.979F, 4.803F, -0.251F)
          curveToRelative(0.734F, -0.684F, 0.809F, -1.821F, 0.171F, -2.596F)
          lineToRelative(-0.84F, -1.02F)
          curveToRelative(-0.519F, -0.63F, -1.367F, -0.882F, -2.145F, -0.637F)
          lineTo(8.283F, 9.668F)
          curveTo(8.229F, 9.613F, 8.168F, 9.548F, 8.1F, 9.472F)
          curveToRelative(-0.228F, -0.254F, -0.513F, -0.61F, -0.753F, -1.027F)
          curveTo(7.107F, 8.03F, 6.94F, 7.605F, 6.834F, 7.28F)
          curveTo(6.803F, 7.184F, 6.777F, 7.097F, 6.756F, 7.024F)
          close()        
      }
    }
    return _call16!!
  }

private var _call16: ImageVector? = null
