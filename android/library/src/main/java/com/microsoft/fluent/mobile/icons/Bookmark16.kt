package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Bookmark16: ImageVector
  get() {
    if (_bookmark16 != null) {
      return _bookmark16!!
    }
    _bookmark16 = fluentIcon(name = "Filled.Bookmark16", 16f) {
      materialPath {
          moveTo(3.78F, 13.918F)
          curveToRelative(-0.333F, 0.222F, -0.778F, -0.016F, -0.778F, -0.416F)
          verticalLineTo(4.01F)
          curveToRelative(0.0F, -1.103F, 0.893F, -1.998F, 1.996F, -2.0F)
          lineToRelative(6.0F, -0.011F)
          curveTo(12.103F, 1.998F, 13.0F, 2.892F, 13.002F, 3.996F)
          verticalLineToRelative(9.506F)
          curveToRelative(0.0F, 0.4F, -0.445F, 0.638F, -0.778F, 0.416F)
          lineToRelative(-4.222F, -2.82F)
          lineToRelative(-4.222F, 2.82F)
          close()        
      }
    }
    return _bookmark16!!
  }

private var _bookmark16: ImageVector? = null
