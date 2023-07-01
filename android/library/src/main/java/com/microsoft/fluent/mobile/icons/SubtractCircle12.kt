package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SubtractCircle12: ImageVector
  get() {
    if (_subtractCircle12 != null) {
      return _subtractCircle12!!
    }
    _subtractCircle12 = fluentIcon(name = "Filled.SubtractCircle12", 12f) {
      materialPath {
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(3.0F, -0.5F)
          curveTo(3.724F, 5.5F, 3.5F, 5.724F, 3.5F, 6.0F)
          reflectiveCurveTo(3.724F, 6.5F, 4.0F, 6.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(8.276F, 5.5F, 8.0F, 5.5F)
          horizontalLineTo(4.0F)
          close()        
      }
    }
    return _subtractCircle12!!
  }

private var _subtractCircle12: ImageVector? = null
