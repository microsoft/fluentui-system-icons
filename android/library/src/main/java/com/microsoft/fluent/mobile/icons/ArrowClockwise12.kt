package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowClockwise12: ImageVector
  get() {
    if (_arrowClockwise12 != null) {
      return _arrowClockwise12!!
    }
    _arrowClockwise12 = fluentIcon(name = "Filled.ArrowClockwise12", 12f) {
      materialPath {
          moveTo(10.5F, 2.0F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(9.0F, 1.586F, 9.0F, 2.0F)
          verticalLineToRelative(0.646F)
          curveTo(8.204F, 1.933F, 7.152F, 1.5F, 6.0F, 1.5F)
          curveTo(3.515F, 1.5F, 1.5F, 3.515F, 1.5F, 6.0F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          curveToRelative(2.194F, 0.0F, 4.021F, -1.57F, 4.42F, -3.648F)
          curveTo(10.507F, 6.387F, 10.115F, 6.0F, 9.642F, 6.0F)
          curveToRelative(-0.354F, 0.0F, -0.635F, 0.291F, -0.71F, 0.638F)
          curveTo(8.639F, 7.988F, 7.438F, 9.0F, 6.0F, 9.0F)
          curveTo(4.343F, 9.0F, 3.0F, 7.657F, 3.0F, 6.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(0.617F, 0.0F, 1.19F, 0.186F, 1.666F, 0.505F)
          horizontalLineTo(7.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(2.0F)
          close()        
      }
    }
    return _arrowClockwise12!!
  }

private var _arrowClockwise12: ImageVector? = null
