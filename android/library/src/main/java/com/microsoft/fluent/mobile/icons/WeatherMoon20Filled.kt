package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoon20: ImageVector
  get() {
    if (_weatherMoon20 != null) {
      return _weatherMoon20!!
    }
    _weatherMoon20 = fluentIcon(name = "Filled.WeatherMoon20", 20f) {
      materialPath {
          moveTo(16.36F, 13.997F)
          curveToRelative(-2.205F, 3.817F, -7.086F, 5.125F, -10.903F, 2.921F)
          curveToRelative(-1.04F, -0.6F, -1.915F, -1.412F, -2.582F, -2.38F)
          curveToRelative(-0.223F, -0.324F, -0.078F, -0.77F, 0.292F, -0.903F)
          curveToRelative(3.006F, -1.076F, 4.616F, -2.323F, 5.55F, -4.107F)
          curveToRelative(0.984F, -1.877F, 1.239F, -3.934F, 0.55F, -6.753F)
          curveToRelative(-0.095F, -0.39F, 0.213F, -0.761F, 0.614F, -0.74F)
          curveToRelative(1.242F, 0.067F, 2.456F, 0.424F, 3.557F, 1.06F)
          curveToRelative(3.817F, 2.203F, 5.125F, 7.084F, 2.921F, 10.902F)
          close()        
      }
    }
    return _weatherMoon20!!
  }

private var _weatherMoon20: ImageVector? = null
