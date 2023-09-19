package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeft16: ImageVector
  get() {
    if (_panelLeft16 != null) {
      return _panelLeft16!!
    }
    _panelLeft16 = fluentIcon(name = "Filled.PanelLeft16", 16f) {
      materialPath {
          moveTo(4.5F, 3.0F)
          curveTo(3.12F, 3.0F, 2.0F, 4.12F, 2.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 11.88F, 3.12F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(14.0F, 4.12F, 12.88F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(7.0F, 4.0F)
          horizontalLineToRelative(4.5F)
          curveTo(12.328F, 4.0F, 13.0F, 4.672F, 13.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(7.0F)
          verticalLineTo(4.0F)
          close()        
      }
    }
    return _panelLeft16!!
  }

private var _panelLeft16: ImageVector? = null
