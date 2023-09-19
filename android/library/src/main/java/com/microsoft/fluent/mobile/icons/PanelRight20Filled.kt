package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelRight20: ImageVector
  get() {
    if (_panelRight20 != null) {
      return _panelRight20!!
    }
    _panelRight20 = fluentIcon(name = "Filled.PanelRight20", 20f) {
      materialPath {
          moveTo(15.0F, 3.0F)
          curveToRelative(1.656F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.657F, -1.344F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.656F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, 1.344F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(10.0F)
          close()
          moveTo(5.0F, 4.0F)
          curveTo(3.894F, 4.0F, 3.0F, 4.895F, 3.0F, 6.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, 0.894F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.5F)
          verticalLineTo(4.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _panelRight20!!
  }

private var _panelRight20: ImageVector? = null
