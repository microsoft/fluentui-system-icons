package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrow24: ImageVector
  get() {
    if (_locationArrow24 != null) {
      return _locationArrow24!!
    }
    _locationArrow24 = fluentIcon(name = "Filled.LocationArrow24", 24f) {
      materialPath {
          moveTo(21.896F, 4.042F)
          curveToRelative(0.467F, -1.213F, -0.725F, -2.405F, -1.938F, -1.938F)
          lineTo(2.962F, 8.64F)
          curveToRelative(-1.36F, 0.522F, -1.252F, 2.48F, 0.156F, 2.85F)
          lineToRelative(7.011F, 1.845F)
          curveToRelative(0.262F, 0.07F, 0.466F, 0.273F, 0.535F, 0.535F)
          lineToRelative(1.845F, 7.01F)
          curveToRelative(0.37F, 1.409F, 2.328F, 1.516F, 2.85F, 0.157F)
          lineToRelative(6.537F, -16.996F)
          close()        
      }
    }
    return _locationArrow24!!
  }

private var _locationArrow24: ImageVector? = null
