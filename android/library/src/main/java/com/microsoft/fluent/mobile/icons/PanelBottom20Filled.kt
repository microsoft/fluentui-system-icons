package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelBottom20: ImageVector
  get() {
    if (_panelBottom20 != null) {
      return _panelBottom20!!
    }
    _panelBottom20 = fluentIcon(name = "Filled.PanelBottom20", 20f) {
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
          moveToRelative(3.0F, -2.0F)
          curveTo(3.895F, 4.0F, 3.0F, 4.895F, 3.0F, 6.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(14.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _panelBottom20!!
  }

private var _panelBottom20: ImageVector? = null
