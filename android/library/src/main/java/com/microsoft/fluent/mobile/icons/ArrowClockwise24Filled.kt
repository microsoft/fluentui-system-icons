package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowClockwise24: ImageVector
  get() {
    if (_arrowClockwise24 != null) {
      return _arrowClockwise24!!
    }
    _arrowClockwise24 = fluentIcon(name = "Filled.ArrowClockwise24", 24f) {
      materialPath {
          moveTo(12.0F, 4.75F)
          curveToRelative(-4.004F, 0.0F, -7.25F, 3.246F, -7.25F, 7.25F)
          reflectiveCurveToRelative(3.246F, 7.25F, 7.25F, 7.25F)
          reflectiveCurveToRelative(7.25F, -3.246F, 7.25F, -7.25F)
          curveToRelative(0.0F, -0.286F, -0.017F, -0.567F, -0.049F, -0.844F)
          curveTo(19.133F, 10.568F, 19.56F, 10.0F, 20.151F, 10.0F)
          curveToRelative(0.515F, 0.0F, 0.968F, 0.358F, 1.03F, 0.87F)
          curveToRelative(0.046F, 0.37F, 0.069F, 0.747F, 0.069F, 1.13F)
          curveToRelative(0.0F, 5.109F, -4.141F, 9.25F, -9.25F, 9.25F)
          reflectiveCurveTo(2.75F, 17.109F, 2.75F, 12.0F)
          reflectiveCurveTo(6.891F, 2.75F, 12.0F, 2.75F)
          curveToRelative(2.173F, 0.0F, 4.171F, 0.75F, 5.75F, 2.004F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(2.698F)
          lineTo(19.784F, 7.0F)
          horizontalLineTo(19.75F)
          verticalLineToRelative(0.25F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-3.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(0.666F)
          curveToRelative(-1.222F, -0.94F, -2.754F, -1.5F, -4.416F, -1.5F)
          close()        
      }
    }
    return _arrowClockwise24!!
  }

private var _arrowClockwise24: ImageVector? = null
