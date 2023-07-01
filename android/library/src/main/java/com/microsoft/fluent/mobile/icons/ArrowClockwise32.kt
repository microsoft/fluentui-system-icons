package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowClockwise32: ImageVector
  get() {
    if (_arrowClockwise32 != null) {
      return _arrowClockwise32!!
    }
    _arrowClockwise32 = fluentIcon(name = "Regular.ArrowClockwise32", 32f) {
      materialPath {
          moveTo(27.0F, 16.0F)
          curveToRelative(0.0F, 6.075F, -4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveTo(5.0F, 22.075F, 5.0F, 16.0F)
          reflectiveCurveTo(9.925F, 5.0F, 16.0F, 5.0F)
          curveToRelative(2.923F, 0.0F, 5.58F, 1.14F, 7.55F, 3.0F)
          horizontalLineTo(21.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(2.12F)
          curveTo(22.664F, 4.377F, 19.493F, 3.0F, 16.0F, 3.0F)
          curveTo(8.82F, 3.0F, 3.0F, 8.82F, 3.0F, 16.0F)
          reflectiveCurveToRelative(5.82F, 13.0F, 13.0F, 13.0F)
          reflectiveCurveToRelative(13.0F, -5.82F, 13.0F, -13.0F)
          curveToRelative(0.0F, -0.391F, -0.017F, -0.779F, -0.051F, -1.161F)
          curveTo(28.906F, 14.354F, 28.489F, 14.0F, 28.002F, 14.0F)
          curveToRelative(-0.616F, 0.0F, -1.078F, 0.559F, -1.033F, 1.173F)
          curveTo(26.99F, 15.446F, 27.0F, 15.722F, 27.0F, 16.0F)
          close()        
      }
    }
    return _arrowClockwise32!!
  }

private var _arrowClockwise32: ImageVector? = null
