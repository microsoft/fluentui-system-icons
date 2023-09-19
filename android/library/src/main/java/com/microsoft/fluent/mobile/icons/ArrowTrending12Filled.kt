package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowTrending12: ImageVector
  get() {
    if (_arrowTrending12 != null) {
      return _arrowTrending12!!
    }
    _arrowTrending12 = fluentIcon(name = "Filled.ArrowTrending12", 12f) {
      materialPath {
          moveTo(6.25F, 1.5F)
          curveTo(5.836F, 1.5F, 5.5F, 1.836F, 5.5F, 2.25F)
          reflectiveCurveTo(5.836F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(2.323F)
          lineTo(5.97F, 5.91F)
          lineTo(5.03F, 4.97F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(1.22F, 7.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(4.5F, 6.56F)
          lineToRelative(0.97F, 0.97F)
          curveToRelative(0.145F, 0.146F, 0.345F, 0.225F, 0.55F, 0.22F)
          curveToRelative(0.208F, -0.006F, 0.403F, -0.096F, 0.54F, -0.25F)
          lineTo(9.5F, 4.213F)
          verticalLineTo(6.25F)
          curveTo(9.5F, 6.664F, 9.836F, 7.0F, 10.25F, 7.0F)
          reflectiveCurveTo(11.0F, 6.664F, 11.0F, 6.25F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _arrowTrending12!!
  }

private var _arrowTrending12: ImageVector? = null
