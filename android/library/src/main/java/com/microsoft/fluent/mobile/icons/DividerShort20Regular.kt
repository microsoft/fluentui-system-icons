package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DividerShort20: ImageVector
  get() {
    if (_dividerShort20 != null) {
      return _dividerShort20!!
    }
    _dividerShort20 = fluentIcon(name = "Regular.DividerShort20", 20f) {
      materialPath {
          moveTo(9.5F, 3.0F)
          curveTo(9.776F, 3.0F, 10.0F, 3.224F, 10.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(9.0F, 16.776F, 9.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          curveTo(9.0F, 3.224F, 9.224F, 3.0F, 9.5F, 3.0F)
          close()        
      }
    }
    return _dividerShort20!!
  }

private var _dividerShort20: ImageVector? = null
