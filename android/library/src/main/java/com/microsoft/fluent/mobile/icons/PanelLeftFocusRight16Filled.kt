package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftFocusRight16: ImageVector
  get() {
    if (_panelLeftFocusRight16 != null) {
      return _panelLeftFocusRight16!!
    }
    _panelLeftFocusRight16 = fluentIcon(name = "Filled.PanelLeftFocusRight16", 16f) {
      materialPath {
          moveTo(12.004F, 13.0F)
          curveToRelative(1.104F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.896F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveTo(6.0F, 4.0F)
          verticalLineToRelative(8.0F)
          horizontalLineTo(4.004F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _panelLeftFocusRight16!!
  }

private var _panelLeftFocusRight16: ImageVector? = null
