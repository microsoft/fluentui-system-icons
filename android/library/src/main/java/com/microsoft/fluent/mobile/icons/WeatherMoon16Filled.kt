package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoon16: ImageVector
  get() {
    if (_weatherMoon16 != null) {
      return _weatherMoon16!!
    }
    _weatherMoon16 = fluentIcon(name = "Filled.WeatherMoon16", 16f) {
      materialPath {
          moveTo(7.456F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          curveToRelative(-2.381F, 0.0F, -4.437F, -1.387F, -5.406F, -3.395F)
          curveToRelative(-0.068F, -0.141F, -0.066F, -0.305F, 0.004F, -0.444F)
          curveToRelative(0.071F, -0.14F, 0.203F, -0.238F, 0.357F, -0.266F)
          curveToRelative(1.275F, -0.231F, 3.277F, -0.937F, 4.077F, -3.07F)
          curveTo(7.051F, 5.324F, 7.0F, 3.81F, 6.771F, 2.594F)
          curveToRelative(-0.026F, -0.142F, 0.01F, -0.29F, 0.101F, -0.404F)
          curveTo(6.964F, 2.077F, 7.1F, 2.009F, 7.246F, 2.004F)
          curveTo(7.316F, 2.0F, 7.386F, 2.0F, 7.456F, 2.0F)
          close()        
      }
    }
    return _weatherMoon16!!
  }

private var _weatherMoon16: ImageVector? = null
