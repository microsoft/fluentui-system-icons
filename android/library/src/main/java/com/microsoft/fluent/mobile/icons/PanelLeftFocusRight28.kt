package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftFocusRight28: ImageVector
  get() {
    if (_panelLeftFocusRight28 != null) {
      return _panelLeftFocusRight28!!
    }
    _panelLeftFocusRight28 = fluentIcon(name = "Filled.PanelLeftFocusRight28", 28f) {
      materialPath {
          moveTo(2.004F, 20.25F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineTo(22.25F)
          curveToRelative(2.07F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(7.75F)
          curveTo(26.0F, 5.679F, 24.32F, 4.0F, 22.25F, 4.0F)
          horizontalLineTo(5.753F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineToRelative(12.5F)
          close()
          moveToRelative(3.75F, 2.25F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(7.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(17.0F)
          horizontalLineTo(5.754F)
          close()        
      }
    }
    return _panelLeftFocusRight28!!
  }

private var _panelLeftFocusRight28: ImageVector? = null
