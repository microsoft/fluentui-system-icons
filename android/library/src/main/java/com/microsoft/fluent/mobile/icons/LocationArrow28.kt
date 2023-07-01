package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrow28: ImageVector
  get() {
    if (_locationArrow28 != null) {
      return _locationArrow28!!
    }
    _locationArrow28 = fluentIcon(name = "Filled.LocationArrow28", 28f) {
      materialPath {
          moveTo(23.959F, 2.104F)
          curveToRelative(1.213F, -0.467F, 2.405F, 0.725F, 1.938F, 1.938F)
          lineTo(17.821F, 25.04F)
          curveToRelative(-0.522F, 1.36F, -2.48F, 1.251F, -2.85F, -0.157F)
          lineToRelative(-2.358F, -8.96F)
          curveToRelative(-0.069F, -0.261F, -0.273F, -0.465F, -0.535F, -0.534F)
          lineToRelative(-8.96F, -2.358F)
          curveToRelative(-1.408F, -0.37F, -1.515F, -2.328F, -0.156F, -2.85F)
          lineToRelative(20.997F, -8.076F)
          close()        
      }
    }
    return _locationArrow28!!
  }

private var _locationArrow28: ImageVector? = null
