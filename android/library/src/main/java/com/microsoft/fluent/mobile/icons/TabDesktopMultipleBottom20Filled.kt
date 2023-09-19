package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabDesktopMultipleBottom20: ImageVector
  get() {
    if (_tabDesktopMultipleBottom20 != null) {
      return _tabDesktopMultipleBottom20!!
    }
    _tabDesktopMultipleBottom20 = fluentIcon(name = "Filled.TabDesktopMultipleBottom20", 20f) {
      materialPath {
          moveTo(5.05F, 4.0F)
          horizontalLineToRelative(7.45F)
          curveTo(14.435F, 4.0F, 16.0F, 5.567F, 16.0F, 7.5F)
          verticalLineToRelative(7.45F)
          curveToRelative(1.142F, -0.232F, 2.0F, -1.24F, 2.0F, -2.45F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(7.5F)
          curveTo(6.292F, 2.0F, 5.283F, 2.859F, 5.05F, 4.0F)
          close()
          moveTo(2.0F, 7.5F)
          curveTo(2.0F, 6.12F, 3.12F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(8.0F)
          curveTo(13.88F, 5.0F, 15.0F, 6.12F, 15.0F, 7.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(2.0F)
          verticalLineTo(7.5F)
          close()
          moveToRelative(8.0F, 8.0F)
          verticalLineTo(18.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 18.0F, 2.0F, 16.88F, 2.0F, 15.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          close()        
      }
    }
    return _tabDesktopMultipleBottom20!!
  }

private var _tabDesktopMultipleBottom20: ImageVector? = null
