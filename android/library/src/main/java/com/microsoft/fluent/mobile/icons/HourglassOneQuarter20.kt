package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HourglassOneQuarter20: ImageVector
  get() {
    if (_hourglassOneQuarter20 != null) {
      return _hourglassOneQuarter20!!
    }
    _hourglassOneQuarter20 = fluentIcon(name = "Filled.HourglassOneQuarter20", 20f) {
      materialPath {
          moveTo(6.68F, 14.0F)
          curveToRelative(-0.141F, 0.186F, -0.262F, 0.387F, -0.36F, 0.6F)
          curveTo(6.115F, 15.039F, 6.006F, 15.516F, 6.0F, 16.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(-0.005F, -0.483F, -0.11F, -0.96F, -0.31F, -1.4F)
          curveToRelative(-0.101F, -0.213F, -0.225F, -0.414F, -0.367F, -0.6F)
          horizontalLineTo(6.679F)
          close()        
      }
    }
    return _hourglassOneQuarter20!!
  }

private var _hourglassOneQuarter20: ImageVector? = null
