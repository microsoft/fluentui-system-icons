package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelRight32: ImageVector
  get() {
    if (_panelRight32 != null) {
      return _panelRight32!!
    }
    _panelRight32 = fluentIcon(name = "Filled.PanelRight32", 32f) {
      materialPath {
          moveTo(6.5F, 28.0F)
          curveTo(4.015F, 28.0F, 2.0F, 25.985F, 2.0F, 23.5F)
          verticalLineToRelative(-15.0F)
          curveTo(2.0F, 6.015F, 4.015F, 4.0F, 6.5F, 4.0F)
          horizontalLineToRelative(19.0F)
          curveTo(27.985F, 4.0F, 30.0F, 6.015F, 30.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-19.0F)
          close()
          moveToRelative(0.0F, -22.0F)
          curveTo(5.12F, 6.0F, 4.0F, 7.12F, 4.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveTo(4.0F, 24.88F, 5.12F, 26.0F, 6.5F, 26.0F)
          horizontalLineTo(20.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(6.5F)
          close()        
      }
    }
    return _panelRight32!!
  }

private var _panelRight32: ImageVector? = null
