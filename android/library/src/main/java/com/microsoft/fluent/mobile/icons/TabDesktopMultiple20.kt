package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabDesktopMultiple20: ImageVector
  get() {
    if (_tabDesktopMultiple20 != null) {
      return _tabDesktopMultiple20!!
    }
    _tabDesktopMultiple20 = fluentIcon(name = "Filled.TabDesktopMultiple20", 20f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(2.5F)
          curveTo(6.0F, 5.328F, 6.672F, 6.0F, 7.5F, 6.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-8.0F)
          curveTo(3.12F, 15.0F, 2.0F, 13.88F, 2.0F, 12.5F)
          verticalLineToRelative(-8.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(5.5F)
          curveTo(13.88F, 2.0F, 15.0F, 3.12F, 15.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(7.5F)
          curveTo(7.224F, 5.0F, 7.0F, 4.776F, 7.0F, 4.5F)
          close()
          moveTo(7.5F, 18.0F)
          curveToRelative(-1.21F, 0.0F, -2.219F, -0.859F, -2.45F, -2.0F)
          horizontalLineToRelative(7.45F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(5.05F)
          curveToRelative(1.14F, 0.232F, 2.0F, 1.24F, 2.0F, 2.45F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 2.21F, -1.791F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(7.5F)
          close()        
      }
    }
    return _tabDesktopMultiple20!!
  }

private var _tabDesktopMultiple20: ImageVector? = null
