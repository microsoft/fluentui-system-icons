package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftHeader28: ImageVector
  get() {
    if (_panelLeftHeader28 != null) {
      return _panelLeftHeader28!!
    }
    _panelLeftHeader28 = fluentIcon(name = "Filled.PanelLeftHeader28", 28f) {
      materialPath {
          moveTo(5.754F, 4.0F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineTo(22.25F)
          curveToRelative(2.07F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(7.75F)
          curveTo(26.0F, 5.679F, 24.32F, 4.0F, 22.25F, 4.0F)
          horizontalLineTo(5.753F)
          close()
          moveTo(24.5F, 19.25F)
          curveToRelative(0.0F, 1.243F, -1.008F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(10.5F)
          verticalLineToRelative(-10.0F)
          horizontalLineToRelative(14.0F)
          verticalLineToRelative(7.75F)
          close()
          moveToRelative(0.0F, -9.25F)
          horizontalLineToRelative(-14.0F)
          verticalLineTo(5.5F)
          horizontalLineToRelative(11.75F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineTo(10.0F)
          close()        
      }
    }
    return _panelLeftHeader28!!
  }

private var _panelLeftHeader28: ImageVector? = null
