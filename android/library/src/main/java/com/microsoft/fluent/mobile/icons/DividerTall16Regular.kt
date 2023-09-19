package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DividerTall16: ImageVector
  get() {
    if (_dividerTall16 != null) {
      return _dividerTall16!!
    }
    _dividerTall16 = fluentIcon(name = "Regular.DividerTall16", 16f) {
      materialPath {
          moveTo(7.5F, 1.0F)
          curveTo(7.776F, 1.0F, 8.0F, 1.224F, 8.0F, 1.5F)
          verticalLineToRelative(13.0F)
          curveTo(8.0F, 14.776F, 7.776F, 15.0F, 7.5F, 15.0F)
          reflectiveCurveTo(7.0F, 14.776F, 7.0F, 14.5F)
          verticalLineToRelative(-13.0F)
          curveTo(7.0F, 1.224F, 7.224F, 1.0F, 7.5F, 1.0F)
          close()        
      }
    }
    return _dividerTall16!!
  }

private var _dividerTall16: ImageVector? = null
