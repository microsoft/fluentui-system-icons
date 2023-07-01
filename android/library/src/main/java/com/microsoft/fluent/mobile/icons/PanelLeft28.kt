package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeft28: ImageVector
  get() {
    if (_panelLeft28 != null) {
      return _panelLeft28!!
    }
    _panelLeft28 = fluentIcon(name = "Filled.PanelLeft28", 28f) {
      materialPath {
          moveTo(2.004F, 7.75F)
          curveTo(2.004F, 5.679F, 3.683F, 4.0F, 5.754F, 4.0F)
          horizontalLineTo(22.25F)
          curveTo(24.32F, 4.0F, 26.0F, 5.679F, 26.0F, 7.75F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 2.071F, -1.68F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(5.753F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineTo(7.75F)
          close()
          moveTo(22.25F, 21.5F)
          curveToRelative(1.242F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(7.75F)
          curveToRelative(0.0F, -1.243F, -1.008F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(10.5F)
          verticalLineToRelative(16.0F)
          horizontalLineToRelative(11.75F)
          close()        
      }
    }
    return _panelLeft28!!
  }

private var _panelLeft28: ImageVector? = null
