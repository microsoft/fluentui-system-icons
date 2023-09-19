package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Person48: ImageVector
  get() {
    if (_person48 != null) {
      return _person48!!
    }
    _person48 = fluentIcon(name = "Filled.Person48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(-5.523F, 0.0F, -10.0F, 4.477F, -10.0F, 10.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(29.523F, 4.0F, 24.0F, 4.0F)
          close()
          moveTo(12.25F, 28.0F)
          curveTo(9.903F, 28.0F, 8.0F, 29.901F, 8.0F, 32.249F)
          verticalLineTo(33.0F)
          curveToRelative(0.0F, 3.755F, 1.942F, 6.567F, 4.92F, 8.38F)
          curveTo(15.85F, 43.163F, 19.786F, 44.0F, 24.0F, 44.0F)
          reflectiveCurveToRelative(8.15F, -0.837F, 11.08F, -2.62F)
          curveTo(38.058F, 39.567F, 40.0F, 36.755F, 40.0F, 33.0F)
          verticalLineToRelative(-0.751F)
          curveTo(40.0F, 29.9F, 38.097F, 28.0F, 35.75F, 28.0F)
          horizontalLineToRelative(-23.5F)
          close()        
      }
    }
    return _person48!!
  }

private var _person48: ImageVector? = null
