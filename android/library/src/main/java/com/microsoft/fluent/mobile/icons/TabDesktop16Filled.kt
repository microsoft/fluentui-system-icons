package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabDesktop16: ImageVector
  get() {
    if (_tabDesktop16 != null) {
      return _tabDesktop16!!
    }
    _tabDesktop16 = fluentIcon(name = "Filled.TabDesktop16", 16f) {
      materialPath {
          moveTo(7.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          horizontalLineTo(8.5F)
          curveTo(7.672F, 5.0F, 7.0F, 4.328F, 7.0F, 3.5F)
          verticalLineTo(2.0F)
          close()
          moveToRelative(7.0F, 2.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(1.5F)
          curveTo(8.0F, 3.776F, 8.224F, 4.0F, 8.5F, 4.0F)
          horizontalLineTo(14.0F)
          close()        
      }
    }
    return _tabDesktop16!!
  }

private var _tabDesktop16: ImageVector? = null
