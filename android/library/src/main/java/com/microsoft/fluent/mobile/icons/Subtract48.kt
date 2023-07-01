package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Subtract48: ImageVector
  get() {
    if (_subtract48 != null) {
      return _subtract48!!
    }
    _subtract48 = fluentIcon(name = "Filled.Subtract48", 48f) {
      materialPath {
          moveTo(6.0F, 23.5F)
          curveTo(6.0F, 22.672F, 6.672F, 22.0F, 7.5F, 22.0F)
          horizontalLineToRelative(33.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(41.328F, 25.0F, 40.5F, 25.0F)
          horizontalLineToRelative(-33.0F)
          curveTo(6.672F, 25.0F, 6.0F, 24.328F, 6.0F, 23.5F)
          close()        
      }
    }
    return _subtract48!!
  }

private var _subtract48: ImageVector? = null
