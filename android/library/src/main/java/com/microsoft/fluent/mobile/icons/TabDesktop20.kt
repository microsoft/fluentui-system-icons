package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TabDesktop20: ImageVector
  get() {
    if (_tabDesktop20 != null) {
      return _tabDesktop20!!
    }
    _tabDesktop20 = fluentIcon(name = "Regular.TabDesktop20", 20f) {
      materialPath {
          moveTo(2.997F, 5.5F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(13.0F, 0.5F)
          verticalLineTo(5.5F)
          curveToRelative(0.0F, -0.828F, -0.671F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(6.5F)
          close()
          moveToRelative(-8.0F, -2.0F)
          horizontalLineToRelative(-2.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-6.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(4.0F)
          close()        
      }
    }
    return _tabDesktop20!!
  }

private var _tabDesktop20: ImageVector? = null
