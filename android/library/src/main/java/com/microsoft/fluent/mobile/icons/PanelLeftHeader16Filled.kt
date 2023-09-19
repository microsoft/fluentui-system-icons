package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftHeader16: ImageVector
  get() {
    if (_panelLeftHeader16 != null) {
      return _panelLeftHeader16!!
    }
    _panelLeftHeader16 = fluentIcon(name = "Filled.PanelLeftHeader16", 16f) {
      materialPath {
          moveTo(2.0F, 5.5F)
          curveTo(2.0F, 4.12F, 3.12F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 3.0F, 14.0F, 4.12F, 14.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 13.0F, 2.0F, 11.88F, 2.0F, 10.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(11.0F, 1.0F)
          verticalLineToRelative(-1.0F)
          curveTo(13.0F, 4.672F, 12.328F, 4.0F, 11.5F, 4.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.5F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(-6.0F, 1.0F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _panelLeftHeader16!!
  }

private var _panelLeftHeader16: ImageVector? = null
