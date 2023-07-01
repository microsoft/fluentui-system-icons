package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelLeft20: ImageVector
  get() {
    if (_panelLeft20 != null) {
      return _panelLeft20!!
    }
    _panelLeft20 = fluentIcon(name = "Regular.PanelLeft20", 20f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(6.5F, -2.0F)
          verticalLineToRelative(11.0F)
          horizontalLineTo(15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(8.5F)
          close()
          moveToRelative(-1.0F, 0.0F)
          horizontalLineTo(5.0F)
          curveTo(3.895F, 4.0F, 3.0F, 4.895F, 3.0F, 6.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(4.0F)
          close()        
      }
    }
    return _panelLeft20!!
  }

private var _panelLeft20: ImageVector? = null
