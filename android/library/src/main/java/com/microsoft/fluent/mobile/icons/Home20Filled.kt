package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Home20: ImageVector
  get() {
    if (_home20 != null) {
      return _home20!!
    }
    _home20 = fluentIcon(name = "Filled.Home20", 20f) {
      materialPath {
          moveTo(11.002F, 2.388F)
          curveToRelative(-0.57F, -0.512F, -1.434F, -0.512F, -2.005F, 0.0F)
          lineToRelative(-5.5F, 4.942F)
          curveTo(3.182F, 7.614F, 3.0F, 8.02F, 3.0F, 8.445F)
          verticalLineTo(15.5F)
          curveTo(3.0F, 16.328F, 3.672F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(2.0F)
          curveTo(7.328F, 17.0F, 8.0F, 16.328F, 8.0F, 15.5F)
          verticalLineToRelative(-4.0F)
          curveTo(8.0F, 11.223F, 8.224F, 11.0F, 8.5F, 11.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.223F, 0.5F, 0.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(8.445F)
          curveToRelative(0.0F, -0.425F, -0.18F, -0.83F, -0.497F, -1.115F)
          lineToRelative(-5.5F, -4.942F)
          close()        
      }
    }
    return _home20!!
  }

private var _home20: ImageVector? = null
