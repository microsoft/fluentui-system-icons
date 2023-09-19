package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.WeatherMoon28: ImageVector
  get() {
    if (_weatherMoon28 != null) {
      return _weatherMoon28!!
    }
    _weatherMoon28 = fluentIcon(name = "Regular.WeatherMoon28", 28f) {
      materialPath {
          moveTo(13.823F, 2.302F)
          curveToRelative(-0.156F, 0.185F, -0.214F, 0.433F, -0.155F, 0.668F)
          curveToRelative(0.652F, 2.6F, 1.105F, 6.518F, -0.608F, 9.945F)
          curveToRelative(-0.859F, 1.716F, -2.396F, 3.02F, -4.17F, 4.003F)
          curveToRelative(-1.77F, 0.98F, -3.72F, 1.61F, -5.32F, 2.004F)
          curveToRelative(-0.229F, 0.057F, -0.418F, 0.218F, -0.51F, 0.435F)
          curveToRelative(-0.093F, 0.218F, -0.077F, 0.466F, 0.042F, 0.67F)
          curveTo(5.179F, 23.598F, 9.049F, 26.0F, 13.48F, 26.0F)
          curveToRelative(6.628F, 0.0F, 12.0F, -5.372F, 12.0F, -12.0F)
          curveToRelative(0.0F, -6.299F, -4.853F, -11.464F, -11.024F, -11.96F)
          curveToRelative(-0.241F, -0.02F, -0.477F, 0.078F, -0.633F, 0.262F)
          close()
          moveToRelative(1.54F, 1.366F)
          curveTo(20.262F, 4.556F, 23.98F, 8.845F, 23.98F, 14.0F)
          curveToRelative(0.0F, 5.8F, -4.7F, 10.5F, -10.5F, 10.5F)
          curveToRelative(-3.518F, 0.0F, -6.634F, -1.73F, -8.54F, -4.39F)
          curveToRelative(1.462F, -0.416F, 3.122F, -1.018F, 4.677F, -1.88F)
          curveToRelative(1.924F, -1.066F, 3.742F, -2.56F, 4.784F, -4.644F)
          curveToRelative(1.717F, -3.433F, 1.501F, -7.207F, 0.961F, -9.918F)
          close()        
      }
    }
    return _weatherMoon28!!
  }

private var _weatherMoon28: ImageVector? = null
