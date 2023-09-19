package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clipboard16: ImageVector
  get() {
    if (_clipboard16 != null) {
      return _clipboard16!!
    }
    _clipboard16 = fluentIcon(name = "Filled.Clipboard16", 16f) {
      materialPath {
          moveTo(5.085F, 2.0F)
          curveTo(5.291F, 1.417F, 5.847F, 1.0F, 6.5F, 1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.653F, 0.0F, 1.209F, 0.417F, 1.415F, 1.0F)
          horizontalLineTo(11.5F)
          curveTo(12.328F, 2.0F, 13.0F, 2.672F, 13.0F, 3.5F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 15.0F, 3.0F, 14.328F, 3.0F, 13.5F)
          verticalLineToRelative(-10.0F)
          curveTo(3.0F, 2.672F, 3.672F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(0.585F)
          close()
          moveTo(6.5F, 2.0F)
          curveTo(6.224F, 2.0F, 6.0F, 2.224F, 6.0F, 2.5F)
          reflectiveCurveTo(6.224F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(3.0F)
          curveTo(9.776F, 3.0F, 10.0F, 2.776F, 10.0F, 2.5F)
          reflectiveCurveTo(9.776F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _clipboard16!!
  }

private var _clipboard16: ImageVector? = null
