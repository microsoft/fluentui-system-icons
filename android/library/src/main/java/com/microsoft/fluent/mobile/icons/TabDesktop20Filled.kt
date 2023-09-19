package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TabDesktop20: ImageVector
  get() {
    if (_tabDesktop20 != null) {
      return _tabDesktop20!!
    }
    _tabDesktop20 = fluentIcon(name = "Filled.TabDesktop20", 20f) {
      materialPath {
          moveTo(5.497F, 3.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(-2.5F)
          close()
          moveToRelative(3.5F, 0.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(7.5F)
          verticalLineTo(5.5F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          horizontalLineToRelative(-5.5F)
          close()        
      }
    }
    return _tabDesktop20!!
  }

private var _tabDesktop20: ImageVector? = null
