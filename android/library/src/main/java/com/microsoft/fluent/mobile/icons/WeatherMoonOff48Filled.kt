package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoonOff48: ImageVector
  get() {
    if (_weatherMoonOff48 != null) {
      return _weatherMoonOff48!!
    }
    _weatherMoonOff48 = fluentIcon(name = "Filled.WeatherMoonOff48", 48f) {
      materialPath {
          moveTo(6.384F, 4.616F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(16.22F, 16.22F)
          curveToRelative(-0.054F, 0.11F, -0.11F, 0.219F, -0.167F, 0.328F)
          curveToRelative(-2.108F, 4.022F, -5.739F, 6.835F, -12.52F, 9.261F)
          curveTo(7.316F, 32.492F, 6.99F, 33.5F, 7.494F, 34.23F)
          curveToRelative(1.503F, 2.183F, 3.477F, 4.014F, 5.821F, 5.367F)
          curveToRelative(7.198F, 4.156F, 16.073F, 2.776F, 21.695F, -2.82F)
          lineToRelative(6.607F, 6.607F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-37.0F, -37.0F)
          close()
          moveToRelative(24.93F, 3.805F)
          curveToRelative(8.523F, 4.92F, 11.5F, 15.757F, 6.737F, 24.327F)
          lineToRelative(-15.49F, -15.49F)
          curveToRelative(0.432F, -2.78F, 0.245F, -5.882F, -0.652F, -9.558F)
          curveToRelative(-0.215F, -0.88F, 0.48F, -1.716F, 1.383F, -1.668F)
          curveToRelative(2.802F, 0.15F, 5.54F, 0.955F, 8.022F, 2.389F)
          close()        
      }
    }
    return _weatherMoonOff48!!
  }

private var _weatherMoonOff48: ImageVector? = null
