package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherCloudy24: ImageVector
  get() {
    if (_weatherCloudy24 != null) {
      return _weatherCloudy24!!
    }
    _weatherCloudy24 = fluentIcon(name = "Filled.WeatherCloudy24", 24f) {
      materialPath {
          moveTo(13.002F, 7.009F)
          curveToRelative(3.168F, 0.0F, 4.966F, 2.097F, 5.227F, 4.63F)
          horizontalLineToRelative(0.08F)
          curveToRelative(2.04F, 0.0F, 3.692F, 1.649F, 3.692F, 3.683F)
          curveToRelative(0.0F, 2.033F, -1.653F, 3.682F, -3.692F, 3.682F)
          horizontalLineTo(7.694F)
          curveToRelative(-2.039F, 0.0F, -3.692F, -1.649F, -3.692F, -3.682F)
          curveToRelative(0.0F, -2.034F, 1.653F, -3.683F, 3.692F, -3.683F)
          horizontalLineToRelative(0.08F)
          curveToRelative(0.263F, -2.55F, 2.06F, -4.63F, 5.228F, -4.63F)
          close()
          moveTo(10.0F, 4.0F)
          curveToRelative(1.617F, 0.0F, 3.05F, 0.815F, 3.9F, 2.062F)
          curveToRelative(-0.29F, -0.035F, -0.59F, -0.053F, -0.898F, -0.053F)
          curveToRelative(-2.994F, 0.0F, -5.171F, 1.677F, -5.937F, 4.213F)
          lineToRelative(-0.068F, 0.24F)
          lineTo(6.939F, 10.7F)
          lineToRelative(-0.206F, 0.04F)
          curveToRelative(-1.609F, 0.338F, -2.917F, 1.508F, -3.449F, 3.045F)
          curveTo(2.504F, 13.184F, 2.0F, 12.24F, 2.0F, 11.18F)
          curveTo(2.0F, 9.43F, 3.37F, 8.0F, 5.096F, 7.903F)
          lineToRelative(0.257F, -0.006F)
          curveTo(5.743F, 5.677F, 7.682F, 4.0F, 10.0F, 4.0F)
          close()        
      }
    }
    return _weatherCloudy24!!
  }

private var _weatherCloudy24: ImageVector? = null
