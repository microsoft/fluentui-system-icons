package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrow48: ImageVector
  get() {
    if (_locationArrow48 != null) {
      return _locationArrow48!!
    }
    _locationArrow48 = fluentIcon(name = "Filled.LocationArrow48", 48f) {
      materialPath {
          moveTo(40.596F, 4.173F)
          curveToRelative(2.022F, -0.778F, 4.008F, 1.209F, 3.23F, 3.23F)
          lineTo(30.369F, 42.397F)
          curveToRelative(-0.871F, 2.264F, -4.134F, 2.085F, -4.751F, -0.262F)
          lineToRelative(-3.93F, -14.932F)
          curveToRelative(-0.114F, -0.436F, -0.455F, -0.776F, -0.89F, -0.89F)
          lineToRelative(-14.933F, -3.93F)
          curveToRelative(-2.347F, -0.618F, -2.526F, -3.88F, -0.261F, -4.752F)
          lineTo(40.596F, 4.173F)
          close()        
      }
    }
    return _locationArrow48!!
  }

private var _locationArrow48: ImageVector? = null
