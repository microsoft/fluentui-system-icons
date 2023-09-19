package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherMoonOff28: ImageVector
  get() {
    if (_weatherMoonOff28 != null) {
      return _weatherMoonOff28!!
    }
    _weatherMoonOff28 = fluentIcon(name = "Filled.WeatherMoonOff28", 28f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(10.397F, 10.398F)
          curveToRelative(-0.894F, 1.346F, -2.226F, 2.408F, -3.727F, 3.24F)
          curveToRelative(-1.77F, 0.98F, -3.72F, 1.61F, -5.32F, 2.004F)
          curveToRelative(-0.229F, 0.056F, -0.418F, 0.218F, -0.51F, 0.435F)
          curveToRelative(-0.093F, 0.218F, -0.077F, 0.466F, 0.042F, 0.67F)
          curveTo(5.179F, 23.597F, 9.049F, 26.0F, 13.48F, 26.0F)
          curveToRelative(3.177F, 0.0F, 6.064F, -1.234F, 8.21F, -3.248F)
          lineToRelative(3.03F, 3.029F)
          curveToRelative(0.292F, 0.292F, 0.767F, 0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(10.594F, 8.473F)
          lineToRelative(9.74F, 9.739F)
          curveToRelative(1.182F, -1.86F, 1.866F, -4.066F, 1.866F, -6.432F)
          curveToRelative(0.0F, -6.3F, -4.853F, -11.464F, -11.024F, -11.96F)
          curveToRelative(-0.241F, -0.02F, -0.477F, 0.078F, -0.633F, 0.262F)
          curveToRelative(-0.156F, 0.184F, -0.214F, 0.433F, -0.155F, 0.667F)
          curveToRelative(0.514F, 2.051F, 0.905F, 4.921F, 0.206F, 7.724F)
          close()        
      }
    }
    return _weatherMoonOff28!!
  }

private var _weatherMoonOff28: ImageVector? = null
