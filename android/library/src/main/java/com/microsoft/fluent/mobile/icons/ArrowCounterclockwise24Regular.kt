package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCounterclockwise24: ImageVector
  get() {
    if (_arrowCounterclockwise24 != null) {
      return _arrowCounterclockwise24!!
    }
    _arrowCounterclockwise24 = fluentIcon(name = "Regular.ArrowCounterclockwise24", 24f) {
      materialPath {
          moveTo(12.0F, 4.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          curveToRelative(0.0F, -0.376F, 0.028F, -0.746F, 0.081F, -1.108F)
          curveTo(4.648F, 10.438F, 4.316F, 10.0F, 3.857F, 10.0F)
          curveToRelative(-0.37F, 0.0F, -0.696F, 0.256F, -0.752F, 0.623F)
          curveTo(3.035F, 11.072F, 3.0F, 11.532F, 3.0F, 12.0F)
          curveToRelative(0.0F, 4.97F, 4.03F, 9.0F, 9.0F, 9.0F)
          reflectiveCurveToRelative(9.0F, -4.03F, 9.0F, -9.0F)
          reflectiveCurveToRelative(-4.03F, -9.0F, -9.0F, -9.0F)
          curveTo(9.695F, 3.0F, 7.592F, 3.867F, 6.0F, 5.292F)
          verticalLineTo(4.25F)
          curveTo(6.0F, 3.836F, 5.664F, 3.5F, 5.25F, 3.5F)
          reflectiveCurveTo(4.5F, 3.836F, 4.5F, 4.25F)
          verticalLineToRelative(3.0F)
          curveTo(4.5F, 7.664F, 4.836F, 8.0F, 5.25F, 8.0F)
          horizontalLineToRelative(3.0F)
          curveTo(8.664F, 8.0F, 9.0F, 7.664F, 9.0F, 7.25F)
          reflectiveCurveTo(8.664F, 6.5F, 8.25F, 6.5F)
          horizontalLineTo(6.9F)
          curveToRelative(1.34F, -1.241F, 3.13F, -2.0F, 5.1F, -2.0F)
          close()        
      }
    }
    return _arrowCounterclockwise24!!
  }

private var _arrowCounterclockwise24: ImageVector? = null
