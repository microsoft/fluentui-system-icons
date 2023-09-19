package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.WeatherMoonOff16: ImageVector
  get() {
    if (_weatherMoonOff16 != null) {
      return _weatherMoonOff16!!
    }
    _weatherMoonOff16 = fluentIcon(name = "Regular.WeatherMoonOff16", 16f) {
      materialPath {
          moveTo(11.616F, 12.323F)
          lineToRelative(2.53F, 2.53F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(6.38F, 7.086F)
          curveToRelative(-0.86F, 1.93F, -2.748F, 2.586F, -3.97F, 2.808F)
          curveToRelative(-0.153F, 0.028F, -0.285F, 0.126F, -0.356F, 0.266F)
          curveToRelative(-0.07F, 0.139F, -0.072F, 0.303F, -0.004F, 0.444F)
          curveTo(3.019F, 12.613F, 5.075F, 14.0F, 7.456F, 14.0F)
          curveToRelative(1.616F, 0.0F, 3.082F, -0.638F, 4.16F, -1.677F)
          close()
          moveToRelative(-0.707F, -0.707F)
          curveTo(10.012F, 12.473F, 8.795F, 13.0F, 7.456F, 13.0F)
          curveToRelative(-1.754F, 0.0F, -3.299F, -0.904F, -4.191F, -2.273F)
          curveToRelative(1.257F, -0.34F, 2.923F, -1.116F, 3.863F, -2.892F)
          lineToRelative(3.781F, 3.781F)
          close()
          moveTo(12.456F, 8.0F)
          curveToRelative(0.0F, 0.69F, -0.14F, 1.346F, -0.391F, 1.943F)
          lineToRelative(0.753F, 0.753F)
          curveTo(13.226F, 9.886F, 13.456F, 8.97F, 13.456F, 8.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          curveToRelative(-0.07F, 0.0F, -0.14F, 0.001F, -0.21F, 0.004F)
          curveTo(7.1F, 2.009F, 6.964F, 2.077F, 6.872F, 2.19F)
          curveToRelative(-0.09F, 0.114F, -0.127F, 0.262F, -0.1F, 0.405F)
          curveToRelative(0.124F, 0.661F, 0.196F, 1.41F, 0.144F, 2.199F)
          lineToRelative(0.902F, 0.902F)
          curveTo(7.977F, 4.742F, 7.955F, 3.825F, 7.85F, 3.015F)
          curveTo(10.428F, 3.216F, 12.456F, 5.371F, 12.456F, 8.0F)
          close()        
      }
    }
    return _weatherMoonOff16!!
  }

private var _weatherMoonOff16: ImageVector? = null
