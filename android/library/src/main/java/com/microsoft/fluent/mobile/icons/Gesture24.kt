package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Gesture24: ImageVector
  get() {
    if (_gesture24 != null) {
      return _gesture24!!
    }
    _gesture24 = fluentIcon(name = "Filled.Gesture24", 24f) {
      materialPath {
          moveTo(3.0F, 18.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveTo(7.0F, 4.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.513F, -0.386F, 0.936F, -0.883F, 0.993F)
          lineTo(17.0F, 6.0F)
          horizontalLineToRelative(-4.649F)
          lineToRelative(8.01F, 3.102F)
          curveToRelative(0.77F, 0.298F, 0.855F, 1.33F, 0.195F, 1.764F)
          lineToRelative(-0.11F, 0.064F)
          lineToRelative(-14.0F, 6.965F)
          curveToRelative(-0.495F, 0.246F, -1.095F, 0.045F, -1.341F, -0.45F)
          curveToRelative(-0.229F, -0.459F, -0.071F, -1.01F, 0.348F, -1.282F)
          lineToRelative(0.102F, -0.058F)
          lineToRelative(11.97F, -5.956F)
          lineTo(6.64F, 5.933F)
          curveTo(5.645F, 5.548F, 5.873F, 4.112F, 6.88F, 4.005F)
          lineTo(7.0F, 4.0F)
          horizontalLineToRelative(10.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(13.0F, 0.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _gesture24!!
  }

private var _gesture24: ImageVector? = null
