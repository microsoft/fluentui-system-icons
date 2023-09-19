package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Triangle20: ImageVector
  get() {
    if (_triangle20 != null) {
      return _triangle20!!
    }
    _triangle20 = fluentIcon(name = "Filled.Triangle20", 20f) {
      materialPath {
          moveTo(1.176F, 15.8F)
          curveTo(0.648F, 16.799F, 1.372F, 18.0F, 2.502F, 18.0F)
          horizontalLineToRelative(14.995F)
          curveToRelative(1.137F, 0.0F, 1.86F, -1.216F, 1.318F, -2.215F)
          lineToRelative(-7.6F, -14.0F)
          curveTo(10.643F, 0.731F, 9.13F, 0.74F, 8.57F, 1.8F)
          lineToRelative(-7.394F, 14.0F)
          close()        
      }
    }
    return _triangle20!!
  }

private var _triangle20: ImageVector? = null
