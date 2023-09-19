package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherCloudy20: ImageVector
  get() {
    if (_weatherCloudy20 != null) {
      return _weatherCloudy20!!
    }
    _weatherCloudy20 = fluentIcon(name = "Filled.WeatherCloudy20", 20f) {
      materialPath {
          moveTo(11.0F, 7.0F)
          curveToRelative(2.465F, 0.0F, 3.863F, 1.574F, 4.066F, 3.474F)
          horizontalLineToRelative(0.062F)
          curveToRelative(1.586F, 0.0F, 2.872F, 1.237F, 2.872F, 2.763F)
          curveTo(18.0F, 14.763F, 16.714F, 16.0F, 15.128F, 16.0F)
          horizontalLineTo(6.872F)
          curveTo(5.286F, 16.0F, 4.0F, 14.763F, 4.0F, 13.237F)
          curveToRelative(0.0F, -1.526F, 1.286F, -2.763F, 2.872F, -2.763F)
          horizontalLineToRelative(0.062F)
          curveTo(7.138F, 8.561F, 8.535F, 7.0F, 11.0F, 7.0F)
          close()
          moveTo(8.392F, 4.0F)
          curveToRelative(1.456F, 0.0F, 2.726F, 0.828F, 3.353F, 2.045F)
          curveTo(11.505F, 6.015F, 11.255F, 6.0F, 11.0F, 6.0F)
          curveTo(8.61F, 6.0F, 6.868F, 7.307F, 6.247F, 9.286F)
          lineTo(6.184F, 9.5F)
          lineTo(6.138F, 9.687F)
          lineToRelative(-0.165F, 0.03F)
          curveToRelative(-1.242F, 0.256F, -2.26F, 1.117F, -2.716F, 2.258F)
          curveTo(2.503F, 11.515F, 2.0F, 10.685F, 2.0F, 9.736F)
          curveTo(2.0F, 8.344F, 3.086F, 7.205F, 4.457F, 7.12F)
          lineToRelative(0.222F, -0.005F)
          curveTo(4.99F, 5.339F, 6.54F, 4.0F, 8.392F, 4.0F)
          close()        
      }
    }
    return _weatherCloudy20!!
  }

private var _weatherCloudy20: ImageVector? = null
