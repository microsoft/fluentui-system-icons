package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleSmall24: ImageVector
  get() {
    if (_circleSmall24 != null) {
      return _circleSmall24!!
    }
    _circleSmall24 = fluentIcon(name = "Filled.CircleSmall24", 24f) {
      materialPath {
          moveTo(8.0F, 12.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          close()        
      }
    }
    return _circleSmall24!!
  }

private var _circleSmall24: ImageVector? = null
