package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowClockwise28: ImageVector
  get() {
    if (_arrowClockwise28 != null) {
      return _arrowClockwise28!!
    }
    _arrowClockwise28 = fluentIcon(name = "Filled.ArrowClockwise28", 28f) {
      materialPath {
          moveTo(19.657F, 7.0F)
          curveTo(18.111F, 5.748F, 16.143F, 5.0F, 14.0F, 5.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          reflectiveCurveToRelative(4.03F, 9.0F, 9.0F, 9.0F)
          reflectiveCurveToRelative(9.0F, -4.03F, 9.0F, -9.0F)
          curveToRelative(0.0F, -0.305F, -0.015F, -0.605F, -0.044F, -0.901F)
          curveToRelative(-0.055F, -0.55F, 0.346F, -1.04F, 0.896F, -1.094F)
          curveToRelative(0.55F, -0.055F, 1.04F, 0.347F, 1.094F, 0.896F)
          curveTo(24.982F, 13.263F, 25.0F, 13.63F, 25.0F, 14.0F)
          curveToRelative(0.0F, 6.075F, -4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveTo(3.0F, 20.075F, 3.0F, 14.0F)
          reflectiveCurveTo(7.925F, 3.0F, 14.0F, 3.0F)
          curveToRelative(2.66F, 0.0F, 5.099F, 0.944F, 7.0F, 2.514F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(4.029F)
          curveTo(22.984F, 8.568F, 22.543F, 9.0F, 22.0F, 9.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(1.657F)
          close()        
      }
    }
    return _arrowClockwise28!!
  }

private var _arrowClockwise28: ImageVector? = null
