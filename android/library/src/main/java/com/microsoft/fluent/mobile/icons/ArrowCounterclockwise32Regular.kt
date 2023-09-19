package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCounterclockwise32: ImageVector
  get() {
    if (_arrowCounterclockwise32 != null) {
      return _arrowCounterclockwise32!!
    }
    _arrowCounterclockwise32 = fluentIcon(name = "Regular.ArrowCounterclockwise32", 32f) {
      materialPath {
          moveTo(5.0F, 16.0F)
          curveToRelative(0.0F, 6.075F, 4.925F, 11.0F, 11.0F, 11.0F)
          reflectiveCurveToRelative(11.0F, -4.925F, 11.0F, -11.0F)
          reflectiveCurveTo(22.075F, 5.0F, 16.0F, 5.0F)
          curveToRelative(-2.923F, 0.0F, -5.58F, 1.14F, -7.55F, 3.0F)
          horizontalLineTo(11.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(2.12F)
          curveTo(9.336F, 4.377F, 12.507F, 3.0F, 16.0F, 3.0F)
          curveToRelative(7.18F, 0.0F, 13.0F, 5.82F, 13.0F, 13.0F)
          reflectiveCurveToRelative(-5.82F, 13.0F, -13.0F, 13.0F)
          reflectiveCurveTo(3.0F, 23.18F, 3.0F, 16.0F)
          curveToRelative(0.0F, -0.391F, 0.017F, -0.779F, 0.051F, -1.161F)
          curveTo(3.094F, 14.354F, 3.511F, 14.0F, 3.998F, 14.0F)
          curveToRelative(0.616F, 0.0F, 1.078F, 0.559F, 1.033F, 1.173F)
          curveTo(5.01F, 15.446F, 5.0F, 15.722F, 5.0F, 16.0F)
          close()        
      }
    }
    return _arrowCounterclockwise32!!
  }

private var _arrowCounterclockwise32: ImageVector? = null
