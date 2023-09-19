package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ScreenPerson20: ImageVector
  get() {
    if (_screenPerson20 != null) {
      return _screenPerson20!!
    }
    _screenPerson20 = fluentIcon(name = "Filled.ScreenPerson20", 20f) {
      materialPath {
          moveTo(5.0F, 4.0F)
          curveTo(3.343F, 4.0F, 2.0F, 5.343F, 2.0F, 7.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.05F)
          curveToRelative(0.217F, -1.069F, 1.116F, -1.89F, 2.223F, -1.99F)
          curveToRelative(-0.48F, -0.532F, -0.773F, -1.237F, -0.773F, -2.01F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(1.044F, 0.0F, 1.962F, 0.533F, 2.5F, 1.341F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(12.5F, 8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.245F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(12.0F, 17.75F, 12.0F, 16.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _screenPerson20!!
  }

private var _screenPerson20: ImageVector? = null
