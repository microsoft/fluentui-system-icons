package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrow16: ImageVector
  get() {
    if (_locationArrow16 != null) {
      return _locationArrow16!!
    }
    _locationArrow16 = fluentIcon(name = "Filled.LocationArrow16", 16f) {
      materialPath {
          moveTo(12.637F, 2.07F)
          curveToRelative(0.81F, -0.312F, 1.604F, 0.483F, 1.293F, 1.292F)
          lineToRelative(-3.846F, 9.998F)
          curveToRelative(-0.348F, 0.906F, -1.653F, 0.834F, -1.9F, -0.105F)
          lineToRelative(-1.06F, -4.024F)
          curveTo(7.08F, 9.056F, 6.944F, 8.92F, 6.769F, 8.874F)
          lineTo(2.744F, 7.815F)
          curveToRelative(-0.94F, -0.247F, -1.01F, -1.552F, -0.105F, -1.9F)
          lineToRelative(9.998F, -3.846F)
          close()        
      }
    }
    return _locationArrow16!!
  }

private var _locationArrow16: ImageVector? = null
