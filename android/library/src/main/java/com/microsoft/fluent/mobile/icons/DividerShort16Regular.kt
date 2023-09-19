package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DividerShort16: ImageVector
  get() {
    if (_dividerShort16 != null) {
      return _dividerShort16!!
    }
    _dividerShort16 = fluentIcon(name = "Regular.DividerShort16", 16f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(7.776F, 3.0F, 8.0F, 3.224F, 8.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(8.0F, 12.776F, 7.776F, 13.0F, 7.5F, 13.0F)
          reflectiveCurveTo(7.0F, 12.776F, 7.0F, 12.5F)
          verticalLineToRelative(-9.0F)
          curveTo(7.0F, 3.224F, 7.224F, 3.0F, 7.5F, 3.0F)
          close()        
      }
    }
    return _dividerShort16!!
  }

private var _dividerShort16: ImageVector? = null
