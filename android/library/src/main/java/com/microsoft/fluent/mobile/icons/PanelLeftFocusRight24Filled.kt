package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftFocusRight24: ImageVector
  get() {
    if (_panelLeftFocusRight24 != null) {
      return _panelLeftFocusRight24!!
    }
    _panelLeftFocusRight24 = fluentIcon(name = "Filled.PanelLeftFocusRight24", 24f) {
      materialPath {
          moveTo(19.25F, 20.0F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(6.75F)
          curveTo(22.0F, 5.231F, 20.769F, 4.0F, 19.25F, 4.0F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 4.0F, 2.0F, 5.231F, 2.0F, 6.75F)
          verticalLineToRelative(10.5F)
          curveTo(2.0F, 18.769F, 3.231F, 20.0F, 4.75F, 20.0F)
          horizontalLineToRelative(14.5F)
          close()
          moveTo(8.0F, 5.5F)
          verticalLineToRelative(13.0F)
          horizontalLineTo(4.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _panelLeftFocusRight24!!
  }

private var _panelLeftFocusRight24: ImageVector? = null
