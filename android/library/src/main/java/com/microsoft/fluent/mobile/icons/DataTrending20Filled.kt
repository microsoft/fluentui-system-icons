package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataTrending20: ImageVector
  get() {
    if (_dataTrending20 != null) {
      return _dataTrending20!!
    }
    _dataTrending20 = fluentIcon(name = "Filled.DataTrending20", 20f) {
      materialPath {
          moveTo(4.5F, 3.75F)
          curveTo(4.5F, 3.336F, 4.164F, 3.0F, 3.75F, 3.0F)
          reflectiveCurveTo(3.0F, 3.336F, 3.0F, 3.75F)
          verticalLineToRelative(10.5F)
          curveTo(3.0F, 15.769F, 4.231F, 17.0F, 5.75F, 17.0F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(5.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(3.75F)
          close()
          moveTo(12.75F, 5.0F)
          curveTo(12.336F, 5.0F, 12.0F, 5.336F, 12.0F, 5.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(1.69F)
          lineTo(11.0F, 9.94F)
          lineTo(9.53F, 8.47F)
          curveTo(9.39F, 8.329F, 9.2F, 8.25F, 9.0F, 8.25F)
          reflectiveCurveTo(8.61F, 8.329F, 8.47F, 8.47F)
          lineToRelative(-2.75F, 2.75F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(9.0F, 10.06F)
          lineToRelative(1.47F, 1.47F)
          curveToRelative(0.14F, 0.141F, 0.331F, 0.22F, 0.53F, 0.22F)
          reflectiveCurveToRelative(0.39F, -0.079F, 0.53F, -0.22F)
          lineToRelative(3.97F, -3.97F)
          verticalLineToRelative(1.69F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(17.0F, 9.664F, 17.0F, 9.25F)
          verticalLineToRelative(-3.5F)
          curveTo(17.0F, 5.336F, 16.664F, 5.0F, 16.25F, 5.0F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _dataTrending20!!
  }

private var _dataTrending20: ImageVector? = null
