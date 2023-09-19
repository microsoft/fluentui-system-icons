package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DividerTall20: ImageVector
  get() {
    if (_dividerTall20 != null) {
      return _dividerTall20!!
    }
    _dividerTall20 = fluentIcon(name = "Regular.DividerTall20", 20f) {
      materialPath {
          moveTo(9.5F, 1.0F)
          curveTo(9.776F, 1.0F, 10.0F, 1.224F, 10.0F, 1.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(9.0F, 18.776F, 9.0F, 18.5F)
          verticalLineToRelative(-17.0F)
          curveTo(9.0F, 1.224F, 9.224F, 1.0F, 9.5F, 1.0F)
          close()        
      }
    }
    return _dividerTall20!!
  }

private var _dividerTall20: ImageVector? = null
