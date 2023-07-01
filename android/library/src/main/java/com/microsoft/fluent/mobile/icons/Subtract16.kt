package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Subtract16: ImageVector
  get() {
    if (_subtract16 != null) {
      return _subtract16!!
    }
    _subtract16 = fluentIcon(name = "Regular.Subtract16", 16f) {
      materialPath {
          moveTo(3.0F, 8.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(9.0F)
          curveTo(12.776F, 7.5F, 13.0F, 7.724F, 13.0F, 8.0F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.224F, 8.5F, 3.0F, 8.276F, 3.0F, 8.0F)
          close()        
      }
    }
    return _subtract16!!
  }

private var _subtract16: ImageVector? = null
