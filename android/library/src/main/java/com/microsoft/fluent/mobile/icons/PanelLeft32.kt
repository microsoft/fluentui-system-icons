package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelLeft32: ImageVector
  get() {
    if (_panelLeft32 != null) {
      return _panelLeft32!!
    }
    _panelLeft32 = fluentIcon(name = "Regular.PanelLeft32", 32f) {
      materialPath {
          moveTo(12.0F, 6.0F)
          verticalLineToRelative(20.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-15.0F)
          curveTo(28.0F, 7.12F, 26.88F, 6.0F, 25.5F, 6.0F)
          horizontalLineTo(12.0F)
          close()
          moveToRelative(-2.0F, 0.0F)
          horizontalLineTo(6.5F)
          curveTo(5.12F, 6.0F, 4.0F, 7.12F, 4.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveTo(4.0F, 24.88F, 5.12F, 26.0F, 6.5F, 26.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(6.0F)
          close()
          moveTo(2.0F, 8.5F)
          curveTo(2.0F, 6.015F, 4.015F, 4.0F, 6.5F, 4.0F)
          horizontalLineToRelative(19.0F)
          curveTo(27.985F, 4.0F, 30.0F, 6.015F, 30.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-19.0F)
          curveTo(4.015F, 28.0F, 2.0F, 25.985F, 2.0F, 23.5F)
          verticalLineToRelative(-15.0F)
          close()        
      }
    }
    return _panelLeft32!!
  }

private var _panelLeft32: ImageVector? = null
