package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrow20: ImageVector
  get() {
    if (_locationArrow20 != null) {
      return _locationArrow20!!
    }
    _locationArrow20 = fluentIcon(name = "Filled.LocationArrow20", 20f) {
      materialPath {
          moveTo(16.637F, 2.07F)
          curveToRelative(0.81F, -0.312F, 1.604F, 0.483F, 1.293F, 1.292F)
          lineToRelative(-5.384F, 13.997F)
          curveToRelative(-0.348F, 0.906F, -1.653F, 0.834F, -1.9F, -0.105F)
          lineToRelative(-1.572F, -5.973F)
          curveToRelative(-0.046F, -0.174F, -0.182F, -0.31F, -0.356F, -0.356F)
          lineTo(2.745F, 9.353F)
          curveToRelative(-0.94F, -0.247F, -1.01F, -1.552F, -0.105F, -1.9F)
          lineToRelative(13.997F, -5.384F)
          close()        
      }
    }
    return _locationArrow20!!
  }

private var _locationArrow20: ImageVector? = null
