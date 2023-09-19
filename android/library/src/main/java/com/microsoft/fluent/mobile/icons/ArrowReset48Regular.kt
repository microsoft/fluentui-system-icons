package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowReset48: ImageVector
  get() {
    if (_arrowReset48 != null) {
      return _arrowReset48!!
    }
    _arrowReset48 = fluentIcon(name = "Regular.ArrowReset48", 48f) {
      materialPath {
          moveTo(13.634F, 6.634F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(-1.28F, -0.488F, -1.768F, 0.0F)
          lineToRelative(-7.5F, 7.5F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(7.5F, 7.5F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineTo(8.268F, 14.5F)
          horizontalLineTo(26.5F)
          curveToRelative(7.18F, 0.0F, 13.0F, 5.82F, 13.0F, 13.0F)
          reflectiveCurveToRelative(-5.82F, 13.0F, -13.0F, 13.0F)
          reflectiveCurveToRelative(-13.0F, -5.82F, -13.0F, -13.0F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveTo(11.0F, 26.81F, 11.0F, 27.5F)
          curveTo(11.0F, 36.06F, 17.94F, 43.0F, 26.5F, 43.0F)
          curveTo(35.06F, 43.0F, 42.0F, 36.06F, 42.0F, 27.5F)
          curveTo(42.0F, 18.94F, 35.06F, 12.0F, 26.5F, 12.0F)
          horizontalLineTo(8.268F)
          lineToRelative(5.366F, -5.366F)
          close()        
      }
    }
    return _arrowReset48!!
  }

private var _arrowReset48: ImageVector? = null
