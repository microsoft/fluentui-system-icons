package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrow48: ImageVector
  get() {
    if (_locationArrow48 != null) {
      return _locationArrow48!!
    }
    _locationArrow48 = fluentIcon(name = "Regular.LocationArrow48", 48f) {
      materialPath {
          moveTo(43.827F, 7.403F)
          curveToRelative(0.777F, -2.021F, -1.21F, -4.008F, -3.231F, -3.23F)
          lineTo(5.603F, 17.632F)
          curveToRelative(-2.265F, 0.87F, -2.086F, 4.133F, 0.26F, 4.75F)
          lineToRelative(14.933F, 3.93F)
          curveToRelative(0.436F, 0.115F, 0.777F, 0.455F, 0.891F, 0.89F)
          lineToRelative(3.93F, 14.933F)
          curveToRelative(0.617F, 2.347F, 3.88F, 2.526F, 4.75F, 0.262F)
          lineToRelative(13.46F, -34.994F)
          close()
          moveToRelative(-2.334F, -0.897F)
          lineTo(28.034F, 41.499F)
          lineToRelative(-3.93F, -14.932F)
          curveToRelative(-0.343F, -1.308F, -1.364F, -2.329F, -2.671F, -2.672F)
          lineTo(6.5F, 19.965F)
          lineTo(41.493F, 6.506F)
          close()        
      }
    }
    return _locationArrow48!!
  }

private var _locationArrow48: ImageVector? = null
