package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SubtractCircle28: ImageVector
  get() {
    if (_subtractCircle28 != null) {
      return _subtractCircle28!!
    }
    _subtractCircle28 = fluentIcon(name = "Regular.SubtractCircle28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(2.0F, 20.627F, 2.0F, 14.0F)
          reflectiveCurveTo(7.373F, 2.0F, 14.0F, 2.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveTo(8.201F, 3.5F, 3.5F, 8.201F, 3.5F, 14.0F)
          reflectiveCurveTo(8.201F, 24.5F, 14.0F, 24.5F)
          reflectiveCurveTo(24.5F, 19.799F, 24.5F, 14.0F)
          reflectiveCurveTo(19.799F, 3.5F, 14.0F, 3.5F)
          close()
          moveToRelative(5.25F, 9.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(8.75F)
          curveTo(8.336F, 14.75F, 8.0F, 14.414F, 8.0F, 14.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(10.5F)
          close()        
      }
    }
    return _subtractCircle28!!
  }

private var _subtractCircle28: ImageVector? = null
