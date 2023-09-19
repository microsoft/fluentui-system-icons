package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeft32: ImageVector
  get() {
    if (_panelLeft32 != null) {
      return _panelLeft32!!
    }
    _panelLeft32 = fluentIcon(name = "Filled.PanelLeft32", 32f) {
      materialPath {
          moveTo(25.5F, 28.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-15.0F)
          curveTo(30.0F, 6.015F, 27.985F, 4.0F, 25.5F, 4.0F)
          horizontalLineToRelative(-19.0F)
          curveTo(4.015F, 4.0F, 2.0F, 6.015F, 2.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveTo(2.0F, 25.985F, 4.015F, 28.0F, 6.5F, 28.0F)
          horizontalLineToRelative(19.0F)
          close()
          moveToRelative(0.0F, -22.0F)
          curveTo(26.88F, 6.0F, 28.0F, 7.12F, 28.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(13.5F)
          close()        
      }
    }
    return _panelLeft32!!
  }

private var _panelLeft32: ImageVector? = null
