package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherFog20: ImageVector
  get() {
    if (_weatherFog20 != null) {
      return _weatherFog20!!
    }
    _weatherFog20 = fluentIcon(name = "Filled.WeatherFog20", 20f) {
      materialPath {
          moveTo(6.5F, 15.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(13.5F, 16.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 16.0F, 6.0F, 15.776F, 6.0F, 15.5F)
          curveToRelative(0.0F, -0.245F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(6.5F, 15.0F)
          close()
          moveToRelative(-1.996F, -2.0F)
          horizontalLineToRelative(10.992F)
          curveTo(15.774F, 13.0F, 16.0F, 13.224F, 16.0F, 13.5F)
          curveToRelative(0.0F, 0.245F, -0.178F, 0.45F, -0.413F, 0.492F)
          lineTo(15.497F, 14.0F)
          horizontalLineTo(4.503F)
          curveTo(4.226F, 14.0F, 4.0F, 13.776F, 4.0F, 13.5F)
          curveToRelative(0.0F, -0.245F, 0.178F, -0.45F, 0.413F, -0.492F)
          lineTo(4.503F, 13.0F)
          close()
          moveTo(10.0F, 3.0F)
          curveToRelative(2.465F, 0.0F, 3.863F, 1.574F, 4.066F, 3.474F)
          horizontalLineToRelative(0.062F)
          curveTo(15.714F, 6.474F, 17.0F, 7.711F, 17.0F, 9.237F)
          curveTo(17.0F, 10.763F, 15.714F, 12.0F, 14.128F, 12.0F)
          horizontalLineTo(5.872F)
          curveTo(4.286F, 12.0F, 3.0F, 10.763F, 3.0F, 9.237F)
          curveToRelative(0.0F, -1.47F, 1.192F, -2.671F, 2.697F, -2.758F)
          lineToRelative(0.237F, -0.005F)
          curveTo(6.138F, 4.561F, 7.535F, 3.0F, 10.0F, 3.0F)
          close()        
      }
    }
    return _weatherFog20!!
  }

private var _weatherFog20: ImageVector? = null
