package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataTrending24: ImageVector
  get() {
    if (_dataTrending24 != null) {
      return _dataTrending24!!
    }
    _dataTrending24 = fluentIcon(name = "Regular.DataTrending24", 24f) {
      materialPath {
          moveTo(4.5F, 3.75F)
          curveTo(4.5F, 3.336F, 4.164F, 3.0F, 3.75F, 3.0F)
          reflectiveCurveTo(3.0F, 3.336F, 3.0F, 3.75F)
          verticalLineToRelative(14.0F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-14.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-14.0F)
          close()
          moveTo(14.75F, 6.0F)
          curveTo(14.336F, 6.0F, 14.0F, 6.336F, 14.0F, 6.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.19F)
          lineToRelative(-4.69F, 4.69F)
          lineToRelative(-1.97F, -1.97F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-3.75F, 3.75F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(3.22F, -3.22F)
          lineToRelative(1.97F, 1.97F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(5.222F, -5.22F)
          verticalLineToRelative(3.195F)
          curveToRelative(0.0F, 0.414F, 0.335F, 0.75F, 0.75F, 0.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(14.75F)
          close()        
      }
    }
    return _dataTrending24!!
  }

private var _dataTrending24: ImageVector? = null
