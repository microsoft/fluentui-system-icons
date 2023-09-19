package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrow24: ImageVector
  get() {
    if (_locationArrow24 != null) {
      return _locationArrow24!!
    }
    _locationArrow24 = fluentIcon(name = "Regular.LocationArrow24", 24f) {
      materialPath {
          moveTo(19.958F, 2.104F)
          curveToRelative(1.213F, -0.467F, 2.405F, 0.725F, 1.938F, 1.938F)
          lineTo(15.36F, 21.038F)
          curveToRelative(-0.522F, 1.36F, -2.48F, 1.252F, -2.85F, -0.156F)
          lineToRelative(-1.845F, -7.011F)
          curveToRelative(-0.07F, -0.262F, -0.273F, -0.466F, -0.535F, -0.535F)
          lineToRelative(-7.01F, -1.845F)
          curveToRelative(-1.409F, -0.37F, -1.516F, -2.327F, -0.157F, -2.85F)
          lineToRelative(16.996F, -6.537F)
          close()
          moveToRelative(0.538F, 1.4F)
          lineTo(3.5F, 10.04F)
          lineToRelative(7.011F, 1.845F)
          curveToRelative(0.784F, 0.206F, 1.397F, 0.819F, 1.603F, 1.603F)
          lineToRelative(1.845F, 7.01F)
          lineToRelative(6.537F, -16.995F)
          close()        
      }
    }
    return _locationArrow24!!
  }

private var _locationArrow24: ImageVector? = null
