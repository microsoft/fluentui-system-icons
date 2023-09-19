package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelLeftHeader32: ImageVector
  get() {
    if (_panelLeftHeader32 != null) {
      return _panelLeftHeader32!!
    }
    _panelLeftHeader32 = fluentIcon(name = "Regular.PanelLeftHeader32", 32f) {
      materialPath {
          moveTo(6.5F, 4.0F)
          curveTo(4.015F, 4.0F, 2.0F, 6.015F, 2.0F, 8.5F)
          verticalLineToRelative(15.0F)
          curveTo(2.0F, 25.985F, 4.015F, 28.0F, 6.5F, 28.0F)
          horizontalLineToRelative(19.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-15.0F)
          curveTo(30.0F, 6.015F, 27.985F, 4.0F, 25.5F, 4.0F)
          horizontalLineToRelative(-19.0F)
          close()
          moveToRelative(5.5F, 9.0F)
          horizontalLineToRelative(16.0F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(13.0F)
          close()
          moveToRelative(16.0F, -2.0F)
          horizontalLineTo(12.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(13.5F)
          curveTo(26.88F, 6.0F, 28.0F, 7.12F, 28.0F, 8.5F)
          verticalLineTo(11.0F)
          close()
          moveTo(6.5F, 6.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(20.0F)
          horizontalLineTo(6.5F)
          curveTo(5.12F, 26.0F, 4.0F, 24.88F, 4.0F, 23.5F)
          verticalLineToRelative(-15.0F)
          curveTo(4.0F, 7.12F, 5.12F, 6.0F, 6.5F, 6.0F)
          close()        
      }
    }
    return _panelLeftHeader32!!
  }

private var _panelLeftHeader32: ImageVector? = null
