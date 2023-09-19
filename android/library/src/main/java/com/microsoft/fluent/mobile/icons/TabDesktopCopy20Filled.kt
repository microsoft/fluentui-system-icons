package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabDesktopCopy20: ImageVector
  get() {
    if (_tabDesktopCopy20 != null) {
      return _tabDesktopCopy20!!
    }
    _tabDesktopCopy20 = fluentIcon(name = "Filled.TabDesktopCopy20", 20f) {
      materialPath {
          moveTo(5.0F, 4.5F)
          curveTo(5.0F, 3.12F, 6.12F, 2.0F, 7.5F, 2.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(2.5F)
          curveTo(9.0F, 5.328F, 9.672F, 6.0F, 10.5F, 6.0F)
          horizontalLineTo(18.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-8.0F)
          curveTo(6.12F, 15.0F, 5.0F, 13.88F, 5.0F, 12.5F)
          verticalLineToRelative(-8.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(5.5F)
          curveTo(16.88F, 2.0F, 18.0F, 3.12F, 18.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(10.224F, 5.0F, 10.0F, 4.776F, 10.0F, 4.5F)
          close()
          moveTo(12.5F, 18.0F)
          curveToRelative(1.21F, 0.0F, 2.219F, -0.859F, 2.45F, -2.0F)
          horizontalLineTo(7.5F)
          curveTo(5.567F, 16.0F, 4.0F, 14.433F, 4.0F, 12.5F)
          verticalLineTo(5.05F)
          curveTo(2.86F, 5.282F, 2.0F, 6.29F, 2.0F, 7.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 2.21F, 1.791F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(6.5F)
          close()        
      }
    }
    return _tabDesktopCopy20!!
  }

private var _tabDesktopCopy20: ImageVector? = null
