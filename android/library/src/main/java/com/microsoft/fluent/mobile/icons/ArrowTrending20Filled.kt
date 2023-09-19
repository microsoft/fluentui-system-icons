package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTrending20: ImageVector
  get() {
    if (_arrowTrending20 != null) {
      return _arrowTrending20!!
    }
    _arrowTrending20 = fluentIcon(name = "Filled.ArrowTrending20", 20f) {
      materialPath {
          moveTo(17.943F, 5.463F)
          curveToRelative(-0.036F, -0.088F, -0.09F, -0.17F, -0.161F, -0.242F)
          lineTo(17.78F, 5.22F)
          verticalLineTo(5.218F)
          curveTo(17.643F, 5.083F, 17.456F, 5.0F, 17.25F, 5.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(11.336F, 5.0F, 11.0F, 5.336F, 11.0F, 5.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.69F)
          lineToRelative(-4.94F, 4.94F)
          lineToRelative(-1.97F, -1.97F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-5.25F, 5.25F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(8.0F, 11.06F)
          lineToRelative(1.97F, 1.97F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(5.47F, -5.47F)
          verticalLineToRelative(3.69F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(18.0F, 11.664F, 18.0F, 11.25F)
          verticalLineToRelative(-5.5F)
          curveToRelative(0.0F, -0.102F, -0.02F, -0.199F, -0.057F, -0.287F)
          close()        
      }
    }
    return _arrowTrending20!!
  }

private var _arrowTrending20: ImageVector? = null
