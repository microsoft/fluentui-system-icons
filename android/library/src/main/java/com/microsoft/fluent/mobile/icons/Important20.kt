package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Important20: ImageVector
  get() {
    if (_important20 != null) {
      return _important20!!
    }
    _important20 = fluentIcon(name = "Filled.Important20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveTo(8.343F, 2.0F, 7.0F, 3.343F, 7.0F, 5.0F)
          curveToRelative(0.0F, 2.227F, 0.789F, 5.204F, 1.225F, 6.685F)
          curveTo(8.459F, 12.48F, 9.19F, 13.0F, 10.0F, 13.0F)
          curveToRelative(0.81F, 0.0F, 1.54F, -0.518F, 1.775F, -1.31F)
          curveTo(12.212F, 10.213F, 13.0F, 7.25F, 13.0F, 5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          close()
          moveToRelative(0.0F, 12.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()        
      }
    }
    return _important20!!
  }

private var _important20: ImageVector? = null
