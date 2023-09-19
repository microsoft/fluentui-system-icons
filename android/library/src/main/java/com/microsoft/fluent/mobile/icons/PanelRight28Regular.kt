package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelRight28: ImageVector
  get() {
    if (_panelRight28 != null) {
      return _panelRight28!!
    }
    _panelRight28 = fluentIcon(name = "Regular.PanelRight28", 28f) {
      materialPath {
          moveTo(22.246F, 4.0F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(5.75F)
          curveTo(3.678F, 23.0F, 2.0F, 21.321F, 2.0F, 19.25F)
          verticalLineTo(7.75F)
          curveTo(2.0F, 5.679F, 3.679F, 4.0F, 5.75F, 4.0F)
          horizontalLineToRelative(16.496F)
          close()
          moveToRelative(2.25F, 3.75F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(19.0F)
          verticalLineToRelative(16.0F)
          horizontalLineToRelative(3.246F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(7.75F)
          close()
          moveTo(17.5F, 21.5F)
          verticalLineToRelative(-16.0F)
          horizontalLineTo(5.75F)
          curveTo(4.507F, 5.5F, 3.5F, 6.507F, 3.5F, 7.75F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineTo(17.5F)
          close()        
      }
    }
    return _panelRight28!!
  }

private var _panelRight28: ImageVector? = null
