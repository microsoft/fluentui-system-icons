package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Previous16: ImageVector
  get() {
    if (_previous16 != null) {
      return _previous16!!
    }
    _previous16 = fluentIcon(name = "Filled.Previous16", 16f) {
      materialPath {
          moveTo(14.0F, 3.002F)
          curveToRelative(0.0F, -0.812F, -0.916F, -1.285F, -1.579F, -0.816F)
          lineToRelative(-7.0F, 4.963F)
          curveToRelative(-0.56F, 0.397F, -0.563F, 1.227F, -0.006F, 1.628F)
          lineToRelative(7.0F, 5.037F)
          curveTo(13.078F, 14.29F, 14.0F, 13.818F, 14.0F, 13.003F)
          verticalLineTo(3.002F)
          close()
          moveTo(2.0F, 2.5F)
          curveTo(2.0F, 2.224F, 2.224F, 2.0F, 2.5F, 2.0F)
          reflectiveCurveTo(3.0F, 2.224F, 3.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 13.776F, 2.776F, 14.0F, 2.5F, 14.0F)
          reflectiveCurveTo(2.0F, 13.776F, 2.0F, 13.5F)
          verticalLineToRelative(-11.0F)
          close()        
      }
    }
    return _previous16!!
  }

private var _previous16: ImageVector? = null
