package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Stop16: ImageVector
  get() {
    if (_stop16 != null) {
      return _stop16!!
    }
    _stop16 = fluentIcon(name = "Filled.Stop16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.672F, 2.0F, 2.0F, 2.672F, 2.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 13.328F, 2.672F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          curveTo(14.0F, 2.672F, 13.328F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _stop16!!
  }

private var _stop16: ImageVector? = null
