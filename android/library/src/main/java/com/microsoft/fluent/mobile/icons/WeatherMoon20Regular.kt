package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.WeatherMoon20: ImageVector
  get() {
    if (_weatherMoon20 != null) {
      return _weatherMoon20!!
    }
    _weatherMoon20 = fluentIcon(name = "Regular.WeatherMoon20", 20f) {
      materialPath {
          moveTo(15.493F, 13.497F)
          curveToRelative(-1.928F, 3.339F, -6.197F, 4.483F, -9.536F, 2.555F)
          curveToRelative(-0.757F, -0.437F, -1.412F, -1.0F, -1.946F, -1.663F)
          curveToRelative(2.83F, -1.087F, 4.557F, -2.42F, 5.592F, -4.396F)
          curveToRelative(1.048F, -2.0F, 1.337F, -4.161F, 0.76F, -6.91F)
          curveToRelative(0.898F, 0.118F, 1.77F, 0.412F, 2.575F, 0.877F)
          curveToRelative(3.339F, 1.928F, 4.483F, 6.198F, 2.555F, 9.537F)
          close()
          moveTo(5.457F, 16.918F)
          curveToRelative(3.817F, 2.204F, 8.698F, 0.896F, 10.902F, -2.921F)
          curveToRelative(2.204F, -3.818F, 0.896F, -8.699F, -2.921F, -10.903F)
          curveToRelative(-1.1F, -0.635F, -2.315F, -0.992F, -3.557F, -1.059F)
          curveToRelative(-0.4F, -0.021F, -0.709F, 0.35F, -0.614F, 0.74F)
          curveToRelative(0.689F, 2.819F, 0.434F, 4.876F, -0.55F, 6.753F)
          curveToRelative(-0.934F, 1.784F, -2.544F, 3.031F, -5.55F, 4.107F)
          curveToRelative(-0.37F, 0.132F, -0.514F, 0.58F, -0.292F, 0.903F)
          curveToRelative(0.667F, 0.968F, 1.542F, 1.78F, 2.582F, 2.38F)
          close()        
      }
    }
    return _weatherMoon20!!
  }

private var _weatherMoon20: ImageVector? = null
