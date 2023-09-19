package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoonOff20: ImageVector
  get() {
    if (_weatherMoonOff20 != null) {
      return _weatherMoonOff20!!
    }
    _weatherMoonOff20 = fluentIcon(name = "Filled.WeatherMoonOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(8.754F, 9.46F)
          lineTo(8.716F, 9.529F)
          curveToRelative(-0.935F, 1.783F, -2.545F, 3.03F, -5.551F, 4.106F)
          curveToRelative(-0.37F, 0.133F, -0.514F, 0.58F, -0.292F, 0.903F)
          curveToRelative(0.667F, 0.968F, 1.542F, 1.78F, 2.582F, 2.38F)
          curveToRelative(3.167F, 1.829F, 7.066F, 1.24F, 9.561F, -1.194F)
          lineToRelative(2.13F, 2.13F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.165F, -2.165F)
          lineToRelative(-6.507F, -6.506F)
          lineToRelative(-6.329F, -6.329F)
          close()
          moveToRelative(13.505F, 11.85F)
          lineToRelative(-0.089F, 0.15F)
          lineToRelative(-6.777F, -6.776F)
          curveTo(9.76F, 6.046F, 9.703F, 4.564F, 9.266F, 2.775F)
          curveTo(9.171F, 2.385F, 9.48F, 2.014F, 9.88F, 2.035F)
          curveToRelative(1.242F, 0.067F, 2.456F, 0.424F, 3.557F, 1.06F)
          curveToRelative(3.817F, 2.203F, 5.125F, 7.085F, 2.921F, 10.902F)
          close()        
      }
    }
    return _weatherMoonOff20!!
  }

private var _weatherMoonOff20: ImageVector? = null
