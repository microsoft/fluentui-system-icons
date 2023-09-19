package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Maximize16: ImageVector
  get() {
    if (_maximize16 != null) {
      return _maximize16!!
    }
    _maximize16 = fluentIcon(name = "Regular.Maximize16", 16f) {
      materialPath {
          moveTo(4.5F, 3.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(3.0F, 12.328F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-7.0F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineToRelative(7.0F)
          curveTo(11.776F, 4.0F, 12.0F, 4.224F, 12.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.224F, 12.0F, 4.0F, 11.776F, 4.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          curveTo(4.0F, 4.224F, 4.224F, 4.0F, 4.5F, 4.0F)
          close()        
      }
    }
    return _maximize16!!
  }

private var _maximize16: ImageVector? = null
