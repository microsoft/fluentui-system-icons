package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tent48: ImageVector
  get() {
    if (_tent48 != null) {
      return _tent48!!
    }
    _tent48 = fluentIcon(name = "Filled.Tent48", 48f) {
      materialPath {
          moveTo(25.002F, 6.02F)
          curveToRelative(-0.238F, -0.285F, -0.59F, -0.45F, -0.96F, -0.45F)
          curveToRelative(-0.372F, 0.0F, -0.723F, 0.165F, -0.96F, 0.45F)
          curveToRelative(-2.992F, 3.59F, -8.895F, 7.85F, -12.29F, 9.746F)
          curveToRelative(-0.342F, 0.191F, -0.575F, 0.532F, -0.628F, 0.92F)
          lineTo(7.434F, 36.5F)
          horizontalLineTo(5.25F)
          curveTo(4.56F, 36.5F, 4.0F, 37.06F, 4.0F, 37.75F)
          reflectiveCurveTo(4.56F, 39.0F, 5.25F, 39.0F)
          horizontalLineToRelative(37.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-2.1F)
          lineToRelative(-2.73F, -19.813F)
          curveToRelative(-0.054F, -0.389F, -0.287F, -0.73F, -0.63F, -0.92F)
          curveToRelative(-3.394F, -1.897F, -9.297F, -6.157F, -12.288F, -9.747F)
          close()
          moveTo(17.787F, 36.5F)
          curveToRelative(2.097F, -3.048F, 4.261F, -6.965F, 6.213F, -13.152F)
          curveToRelative(1.764F, 5.581F, 3.732F, 9.44F, 6.213F, 13.152F)
          horizontalLineTo(17.786F)
          close()        
      }
    }
    return _tent48!!
  }

private var _tent48: ImageVector? = null
