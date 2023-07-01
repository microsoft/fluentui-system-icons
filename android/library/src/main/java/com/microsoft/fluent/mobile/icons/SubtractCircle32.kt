package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SubtractCircle32: ImageVector
  get() {
    if (_subtractCircle32 != null) {
      return _subtractCircle32!!
    }
    _subtractCircle32 = fluentIcon(name = "Regular.SubtractCircle32", 32f) {
      materialPath {
          moveTo(21.0F, 15.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(11.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          close()
          moveToRelative(9.0F, 1.0F)
          curveToRelative(0.0F, 7.732F, -6.268F, 14.0F, -14.0F, 14.0F)
          reflectiveCurveTo(2.0F, 23.732F, 2.0F, 16.0F)
          reflectiveCurveTo(8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          close()
          moveToRelative(-2.0F, 0.0F)
          curveToRelative(0.0F, -6.627F, -5.373F, -12.0F, -12.0F, -12.0F)
          reflectiveCurveTo(4.0F, 9.373F, 4.0F, 16.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          close()        
      }
    }
    return _subtractCircle32!!
  }

private var _subtractCircle32: ImageVector? = null
