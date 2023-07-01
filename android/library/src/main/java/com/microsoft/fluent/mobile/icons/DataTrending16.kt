package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataTrending16: ImageVector
  get() {
    if (_dataTrending16 != null) {
      return _dataTrending16!!
    }
    _dataTrending16 = fluentIcon(name = "Filled.DataTrending16", 16f) {
      materialPath {
          moveTo(3.5F, 2.75F)
          curveTo(3.5F, 2.336F, 3.164F, 2.0F, 2.75F, 2.0F)
          reflectiveCurveTo(2.0F, 2.336F, 2.0F, 2.75F)
          verticalLineToRelative(8.5F)
          curveTo(2.0F, 12.769F, 3.231F, 14.0F, 4.75F, 14.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-8.5F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineToRelative(-8.5F)
          close()
          moveToRelative(6.25F, 2.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(0.94F)
          lineTo(9.0F, 7.94F)
          lineTo(7.53F, 6.47F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(7.0F, 8.06F)
          lineToRelative(1.47F, 1.47F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.97F, -2.97F)
          verticalLineToRelative(1.017F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(14.0F, 7.99F, 14.0F, 7.577F)
          verticalLineTo(4.75F)
          curveTo(14.0F, 4.336F, 13.664F, 4.0F, 13.25F, 4.0F)
          horizontalLineTo(10.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          close()        
      }
    }
    return _dataTrending16!!
  }

private var _dataTrending16: ImageVector? = null
