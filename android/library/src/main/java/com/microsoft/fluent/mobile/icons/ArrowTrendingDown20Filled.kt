package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTrendingDown20: ImageVector
  get() {
    if (_arrowTrendingDown20 != null) {
      return _arrowTrendingDown20!!
    }
    _arrowTrendingDown20 = fluentIcon(name = "Filled.ArrowTrendingDown20", 20f) {
      materialPath {
          moveTo(17.943F, 14.537F)
          curveToRelative(-0.036F, 0.088F, -0.09F, 0.17F, -0.161F, 0.242F)
          lineTo(17.78F, 14.78F)
          lineToRelative(-0.001F, 0.002F)
          curveTo(17.643F, 14.917F, 17.456F, 15.0F, 17.25F, 15.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(11.336F, 15.0F, 11.0F, 14.664F, 11.0F, 14.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(3.69F)
          lineTo(10.5F, 8.56F)
          lineToRelative(-1.97F, 1.97F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(2.22F, 5.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(8.0F, 8.94F)
          lineToRelative(1.97F, -1.97F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(5.47F, 5.47F)
          verticalLineTo(8.75F)
          curveTo(16.5F, 8.336F, 16.836F, 8.0F, 17.25F, 8.0F)
          reflectiveCurveTo(18.0F, 8.336F, 18.0F, 8.75F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.102F, -0.02F, 0.199F, -0.057F, 0.287F)
          close()        
      }
    }
    return _arrowTrendingDown20!!
  }

private var _arrowTrendingDown20: ImageVector? = null
