package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoon28: ImageVector
  get() {
    if (_weatherMoon28 != null) {
      return _weatherMoon28!!
    }
    _weatherMoon28 = fluentIcon(name = "Filled.WeatherMoon28", 28f) {
      materialPath {
          moveTo(13.668F, 2.97F)
          curveToRelative(-0.059F, -0.235F, -0.001F, -0.483F, 0.155F, -0.668F)
          curveToRelative(0.156F, -0.184F, 0.392F, -0.282F, 0.633F, -0.263F)
          curveTo(20.627F, 2.536F, 25.48F, 7.701F, 25.48F, 14.0F)
          curveToRelative(0.0F, 6.628F, -5.372F, 12.0F, -12.0F, 12.0F)
          curveToRelative(-4.431F, 0.0F, -8.3F, -2.402F, -10.378F, -5.972F)
          curveToRelative(-0.12F, -0.205F, -0.135F, -0.453F, -0.042F, -0.67F)
          curveToRelative(0.092F, -0.218F, 0.281F, -0.38F, 0.51F, -0.436F)
          curveToRelative(1.6F, -0.393F, 3.55F, -1.024F, 5.32F, -2.004F)
          curveToRelative(1.774F, -0.983F, 3.311F, -2.287F, 4.17F, -4.003F)
          curveToRelative(1.713F, -3.427F, 1.26F, -7.345F, 0.608F, -9.945F)
          close()        
      }
    }
    return _weatherMoon28!!
  }

private var _weatherMoon28: ImageVector? = null
