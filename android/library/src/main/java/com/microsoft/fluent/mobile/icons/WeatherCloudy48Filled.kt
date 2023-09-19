package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherCloudy48: ImageVector
  get() {
    if (_weatherCloudy48 != null) {
      return _weatherCloudy48!!
    }
    _weatherCloudy48 = fluentIcon(name = "Filled.WeatherCloudy48", 48f) {
      materialPath {
          moveTo(26.003F, 14.018F)
          curveToRelative(6.337F, 0.0F, 9.932F, 4.194F, 10.455F, 9.26F)
          horizontalLineToRelative(0.16F)
          curveToRelative(4.078F, 0.0F, 7.384F, 3.298F, 7.384F, 7.365F)
          curveToRelative(0.0F, 4.068F, -3.306F, 7.365F, -7.384F, 7.365F)
          horizontalLineToRelative(-21.23F)
          curveToRelative(-4.078F, 0.0F, -7.383F, -3.297F, -7.383F, -7.365F)
          curveToRelative(0.0F, -4.067F, 3.305F, -7.365F, 7.384F, -7.365F)
          horizontalLineToRelative(0.16F)
          curveToRelative(0.526F, -5.099F, 4.117F, -9.26F, 10.454F, -9.26F)
          close()
          moveTo(20.0F, 8.0F)
          curveToRelative(3.234F, 0.0F, 6.099F, 1.63F, 7.8F, 4.125F)
          curveToRelative(-0.582F, -0.071F, -1.182F, -0.107F, -1.8F, -0.107F)
          curveToRelative(-6.078F, 0.0F, -10.476F, 3.438F, -11.96F, 8.614F)
          lineToRelative(-0.08F, 0.29F)
          lineToRelative(-0.115F, 0.475F)
          lineToRelative(-0.414F, 0.077F)
          curveToRelative(-3.216F, 0.674F, -5.831F, 3.001F, -6.905F, 6.06F)
          curveTo(4.99F, 26.334F, 4.0F, 24.462F, 4.0F, 22.359F)
          curveToRelative(0.0F, -3.625F, 2.939F, -6.564F, 6.564F, -6.564F)
          horizontalLineToRelative(0.142F)
          curveTo(11.485F, 11.352F, 15.363F, 8.0F, 20.0F, 8.0F)
          close()        
      }
    }
    return _weatherCloudy48!!
  }

private var _weatherCloudy48: ImageVector? = null
