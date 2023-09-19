package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoonOff24: ImageVector
  get() {
    if (_weatherMoonOff24 != null) {
      return _weatherMoonOff24!!
    }
    _weatherMoonOff24 = fluentIcon(name = "Filled.WeatherMoonOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(8.192F, 8.193F)
          curveToRelative(-1.176F, 2.197F, -3.19F, 3.741F, -6.918F, 5.075F)
          curveToRelative(-0.463F, 0.166F, -0.644F, 0.726F, -0.365F, 1.132F)
          curveToRelative(0.836F, 1.212F, 1.932F, 2.23F, 3.235F, 2.982F)
          curveToRelative(3.917F, 2.262F, 8.728F, 1.572F, 11.859F, -1.378F)
          lineToRelative(2.496F, 2.497F)
          curveToRelative(0.293F, 0.292F, 0.768F, 0.292F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(13.085F, 1.119F)
          curveToRelative(4.75F, 2.743F, 6.4F, 8.794F, 3.718F, 13.562F)
          lineToRelative(-8.59F, -8.59F)
          curveToRelative(0.251F, -1.561F, 0.151F, -3.303F, -0.354F, -5.373F)
          curveToRelative(-0.119F, -0.488F, 0.267F, -0.953F, 0.769F, -0.926F)
          curveToRelative(1.557F, 0.083F, 3.078F, 0.53F, 4.457F, 1.327F)
          close()        
      }
    }
    return _weatherMoonOff24!!
  }

private var _weatherMoonOff24: ImageVector? = null
