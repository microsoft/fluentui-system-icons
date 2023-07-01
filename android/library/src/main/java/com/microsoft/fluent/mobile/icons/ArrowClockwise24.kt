package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowClockwise24: ImageVector
  get() {
    if (_arrowClockwise24 != null) {
      return _arrowClockwise24!!
    }
    _arrowClockwise24 = fluentIcon(name = "Regular.ArrowClockwise24", 24f) {
      materialPath {
          moveTo(12.0F, 4.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, 3.358F, 7.5F, 7.5F, 7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, -3.358F, 7.5F, -7.5F)
          curveToRelative(0.0F, -0.376F, -0.028F, -0.746F, -0.081F, -1.108F)
          curveTo(19.352F, 10.438F, 19.684F, 10.0F, 20.143F, 10.0F)
          curveToRelative(0.37F, 0.0F, 0.696F, 0.256F, 0.752F, 0.623F)
          curveTo(20.965F, 11.072F, 21.0F, 11.532F, 21.0F, 12.0F)
          curveToRelative(0.0F, 4.97F, -4.03F, 9.0F, -9.0F, 9.0F)
          reflectiveCurveToRelative(-9.0F, -4.03F, -9.0F, -9.0F)
          reflectiveCurveToRelative(4.03F, -9.0F, 9.0F, -9.0F)
          curveToRelative(2.305F, 0.0F, 4.408F, 0.867F, 6.0F, 2.292F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(3.0F)
          curveTo(19.5F, 7.664F, 19.164F, 8.0F, 18.75F, 8.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(15.336F, 8.0F, 15.0F, 7.664F, 15.0F, 7.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(1.35F)
          curveToRelative(-1.34F, -1.241F, -3.13F, -2.0F, -5.1F, -2.0F)
          close()        
      }
    }
    return _arrowClockwise24!!
  }

private var _arrowClockwise24: ImageVector? = null
