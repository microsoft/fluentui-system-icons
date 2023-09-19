package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherRain24: ImageVector
  get() {
    if (_weatherRain24 != null) {
      return _weatherRain24!!
    }
    _weatherRain24 = fluentIcon(name = "Filled.WeatherRain24", 24f) {
      materialPath {
          moveTo(12.0F, 4.001F)
          curveToRelative(3.168F, 0.0F, 4.966F, 2.097F, 5.227F, 4.63F)
          horizontalLineToRelative(0.08F)
          curveToRelative(2.04F, 0.0F, 3.692F, 1.649F, 3.692F, 3.683F)
          curveToRelative(0.0F, 2.033F, -1.653F, 3.682F, -3.692F, 3.682F)
          horizontalLineToRelative(-0.582F)
          lineToRelative(-1.583F, 2.637F)
          curveToRelative(-0.207F, 0.358F, -0.666F, 0.481F, -1.024F, 0.274F)
          curveToRelative(-0.33F, -0.19F, -0.46F, -0.59F, -0.32F, -0.933F)
          lineToRelative(0.045F, -0.091F)
          lineToRelative(1.15F, -1.887F)
          horizontalLineToRelative(-2.136F)
          lineToRelative(-1.583F, 2.637F)
          curveToRelative(-0.207F, 0.358F, -0.666F, 0.481F, -1.025F, 0.274F)
          curveToRelative(-0.328F, -0.19F, -0.46F, -0.59F, -0.319F, -0.933F)
          lineToRelative(0.045F, -0.091F)
          lineToRelative(1.15F, -1.887F)
          horizontalLineTo(8.987F)
          lineToRelative(-1.582F, 2.637F)
          curveTo(7.199F, 18.99F, 6.74F, 19.114F, 6.38F, 18.907F)
          curveToRelative(-0.329F, -0.19F, -0.46F, -0.59F, -0.32F, -0.933F)
          lineToRelative(0.046F, -0.091F)
          lineToRelative(1.148F, -1.887F)
          horizontalLineTo(6.693F)
          curveTo(4.653F, 15.996F, 3.0F, 14.347F, 3.0F, 12.314F)
          curveTo(3.0F, 10.28F, 4.654F, 8.63F, 6.693F, 8.63F)
          horizontalLineToRelative(0.08F)
          curveTo(7.035F, 6.081F, 8.83F, 4.001F, 12.0F, 4.001F)
          close()        
      }
    }
    return _weatherRain24!!
  }

private var _weatherRain24: ImageVector? = null
