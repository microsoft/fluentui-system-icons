package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WeatherFog48: ImageVector
  get() {
    if (_weatherFog48 != null) {
      return _weatherFog48!!
    }
    _weatherFog48 = fluentIcon(name = "Filled.WeatherFog48", 48f) {
      materialPath {
          moveTo(32.25F, 38.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          curveToRelative(0.0F, 0.918F, -0.706F, 1.671F, -1.606F, 1.744F)
          lineTo(32.251F, 42.0F)
          horizontalLineToRelative(-16.5F)
          curveTo(14.784F, 42.0F, 14.0F, 41.217F, 14.0F, 40.25F)
          curveToRelative(0.0F, -0.918F, 0.707F, -1.671F, 1.606F, -1.744F)
          lineTo(15.75F, 38.5F)
          horizontalLineToRelative(16.5F)
          close()
          moveToRelative(6.0F, -5.995F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.783F, 1.75F, 1.75F)
          curveToRelative(0.0F, 0.918F, -0.706F, 1.671F, -1.606F, 1.744F)
          lineToRelative(-0.143F, 0.006F)
          horizontalLineTo(9.75F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          curveToRelative(0.0F, -0.918F, 0.707F, -1.671F, 1.607F, -1.744F)
          lineToRelative(0.143F, -0.006F)
          horizontalLineToRelative(28.5F)
          close()
          moveTo(24.0F, 6.01F)
          curveToRelative(6.337F, 0.0F, 9.932F, 4.194F, 10.455F, 9.26F)
          horizontalLineToRelative(0.16F)
          curveToRelative(4.078F, 0.0F, 7.384F, 3.297F, 7.384F, 7.365F)
          reflectiveCurveTo(38.692F, 30.0F, 34.614F, 30.0F)
          horizontalLineToRelative(-21.23F)
          curveTo(9.306F, 30.0F, 6.0F, 26.703F, 6.0F, 22.635F)
          reflectiveCurveToRelative(3.306F, -7.365F, 7.384F, -7.365F)
          horizontalLineToRelative(0.16F)
          curveTo(14.07F, 10.171F, 17.662F, 6.01F, 24.0F, 6.01F)
          close()        
      }
    }
    return _weatherFog48!!
  }

private var _weatherFog48: ImageVector? = null
