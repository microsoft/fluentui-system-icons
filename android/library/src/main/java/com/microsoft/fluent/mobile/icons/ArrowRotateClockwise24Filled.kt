package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRotateClockwise24: ImageVector
  get() {
    if (_arrowRotateClockwise24 != null) {
      return _arrowRotateClockwise24!!
    }
    _arrowRotateClockwise24 = fluentIcon(name = "Filled.ArrowRotateClockwise24", 24f) {
      materialPath {
          moveTo(12.0F, 3.0F)
          curveToRelative(4.97F, 0.0F, 9.0F, 4.03F, 9.0F, 9.0F)
          curveToRelative(0.0F, 3.436F, -1.942F, 6.488F, -4.873F, 8.001F)
          lineTo(18.0F, 20.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.513F, -0.386F, 0.936F, -0.883F, 0.993F)
          lineTo(18.0F, 22.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.513F, 0.0F, -0.935F, -0.386F, -0.993F, -0.883F)
          lineTo(13.0F, 21.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          curveToRelative(0.513F, 0.0F, 0.935F, 0.386F, 0.993F, 0.883F)
          lineTo(15.0F, 17.0F)
          lineToRelative(0.001F, 1.327F)
          curveTo(17.397F, 17.19F, 19.0F, 14.753F, 19.0F, 12.0F)
          curveToRelative(0.0F, -3.866F, -3.134F, -7.0F, -7.0F, -7.0F)
          reflectiveCurveToRelative(-7.0F, 3.134F, -7.0F, 7.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          close()
          moveToRelative(0.0F, 6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _arrowRotateClockwise24!!
  }

private var _arrowRotateClockwise24: ImageVector? = null
