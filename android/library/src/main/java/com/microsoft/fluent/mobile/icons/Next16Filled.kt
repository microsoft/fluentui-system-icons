package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Next16: ImageVector
  get() {
    if (_next16 != null) {
      return _next16!!
    }
    _next16 = fluentIcon(name = "Filled.Next16", 16f) {
      materialPath {
          moveTo(2.0F, 3.002F)
          curveTo(2.0F, 2.19F, 2.916F, 1.717F, 3.58F, 2.186F)
          lineToRelative(7.0F, 4.963F)
          curveToRelative(0.56F, 0.397F, 0.563F, 1.227F, 0.006F, 1.628F)
          lineToRelative(-7.0F, 5.037F)
          curveTo(2.922F, 14.29F, 2.0F, 13.818F, 2.0F, 13.003F)
          verticalLineTo(3.002F)
          close()
          moveTo(14.0F, 2.5F)
          curveTo(14.0F, 2.224F, 13.776F, 2.0F, 13.5F, 2.0F)
          reflectiveCurveTo(13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          close()        
      }
    }
    return _next16!!
  }

private var _next16: ImageVector? = null
