package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleSmall20: ImageVector
  get() {
    if (_circleSmall20 != null) {
      return _circleSmall20!!
    }
    _circleSmall20 = fluentIcon(name = "Filled.CircleSmall20", 20f) {
      materialPath {
          moveTo(13.0F, 10.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()        
      }
    }
    return _circleSmall20!!
  }

private var _circleSmall20: ImageVector? = null
