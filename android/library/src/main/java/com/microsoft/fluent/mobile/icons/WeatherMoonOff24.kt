package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.WeatherMoonOff24: ImageVector
  get() {
    if (_weatherMoonOff24 != null) {
      return _weatherMoonOff24!!
    }
    _weatherMoonOff24 = fluentIcon(name = "Regular.WeatherMoonOff24", 24f) {
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
          moveToRelative(13.881F, 16.002F)
          curveToRelative(-2.662F, 2.482F, -6.731F, 3.055F, -10.047F, 1.141F)
          curveToRelative(-0.82F, -0.474F, -1.544F, -1.07F, -2.152F, -1.766F)
          curveToRelative(3.268F, -1.305F, 5.28F, -2.88F, 6.551F, -5.023F)
          lineToRelative(5.648F, 5.648F)
          close()
          moveTo(15.615F, 4.638F)
          curveToRelative(3.915F, 2.26F, 5.352F, 7.164F, 3.359F, 11.154F)
          lineToRelative(1.11F, 1.11F)
          curveToRelative(2.681F, -4.77F, 1.032F, -10.82F, -3.719F, -13.563F)
          curveToRelative(-1.379F, -0.796F, -2.9F, -1.244F, -4.457F, -1.327F)
          curveToRelative(-0.502F, -0.027F, -0.888F, 0.438F, -0.769F, 0.926F)
          curveToRelative(0.505F, 2.07F, 0.605F, 3.812F, 0.354F, 5.373F)
          lineToRelative(1.265F, 1.266F)
          curveToRelative(0.455F, -1.76F, 0.497F, -3.697F, 0.065F, -5.955F)
          curveToRelative(0.973F, 0.17F, 1.915F, 0.51F, 2.792F, 1.016F)
          close()        
      }
    }
    return _weatherMoonOff24!!
  }

private var _weatherMoonOff24: ImageVector? = null
