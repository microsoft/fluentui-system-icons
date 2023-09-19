package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AirplaneLanding20: ImageVector
  get() {
    if (_airplaneLanding20 != null) {
      return _airplaneLanding20!!
    }
    _airplaneLanding20 = fluentIcon(name = "Filled.AirplaneLanding20", 20f) {
      materialPath {
          moveTo(11.883F, 6.0F)
          lineToRelative(-1.03F, -2.147F)
          curveTo(10.16F, 2.414F, 8.0F, 2.906F, 8.0F, 4.503F)
          verticalLineToRelative(0.742F)
          lineTo(10.768F, 6.0F)
          horizontalLineToRelative(1.115F)
          close()
          moveToRelative(-1.115F, 1.0F)
          curveToRelative(-0.09F, 0.0F, -0.178F, -0.012F, -0.263F, -0.035F)
          lineTo(6.0F, 5.736F)
          verticalLineTo(4.205F)
          curveToRelative(0.0F, -1.223F, -1.615F, -1.663F, -2.234F, -0.609F)
          lineTo(2.24F, 6.19F)
          curveTo(1.674F, 7.152F, 2.143F, 8.392F, 3.205F, 8.74F)
          lineToRelative(3.411F, 1.117F)
          lineToRelative(-1.672F, 1.527F)
          curveToRelative(-1.178F, 1.076F, -0.085F, 3.003F, 1.442F, 2.545F)
          lineToRelative(6.612F, -1.984F)
          lineToRelative(3.03F, 0.992F)
          curveToRelative(0.97F, 0.317F, 1.967F, -0.405F, 1.967F, -1.426F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineToRelative(-3.227F)
          close()
          moveTo(2.0F, 17.5F)
          curveTo(2.0F, 17.224F, 2.224F, 17.0F, 2.5F, 17.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 18.0F, 17.5F, 18.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 18.0F, 2.0F, 17.776F, 2.0F, 17.5F)
          close()        
      }
    }
    return _airplaneLanding20!!
  }

private var _airplaneLanding20: ImageVector? = null
