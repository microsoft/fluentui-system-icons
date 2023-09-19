package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrow28: ImageVector
  get() {
    if (_locationArrow28 != null) {
      return _locationArrow28!!
    }
    _locationArrow28 = fluentIcon(name = "Regular.LocationArrow28", 28f) {
      materialPath {
          moveTo(25.897F, 4.042F)
          curveToRelative(0.467F, -1.213F, -0.725F, -2.405F, -1.938F, -1.938F)
          lineTo(2.962F, 10.178F)
          curveToRelative(-1.36F, 0.523F, -1.252F, 2.48F, 0.156F, 2.851F)
          lineToRelative(8.96F, 2.358F)
          curveToRelative(0.262F, 0.069F, 0.466F, 0.273F, 0.535F, 0.534F)
          lineToRelative(2.358F, 8.96F)
          curveToRelative(0.37F, 1.408F, 2.328F, 1.516F, 2.85F, 0.157F)
          lineToRelative(8.076F, -20.997F)
          close()
          moveToRelative(-1.4F, -0.538F)
          lineTo(16.421F, 24.5F)
          lineToRelative(-2.358F, -8.96F)
          curveToRelative(-0.206F, -0.785F, -0.819F, -1.397F, -1.603F, -1.604F)
          lineTo(3.5F, 11.58F)
          lineToRelative(20.997F, -8.075F)
          close()        
      }
    }
    return _locationArrow28!!
  }

private var _locationArrow28: ImageVector? = null
