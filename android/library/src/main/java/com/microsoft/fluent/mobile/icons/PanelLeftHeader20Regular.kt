package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelLeftHeader20: ImageVector
  get() {
    if (_panelLeftHeader20 != null) {
      return _panelLeftHeader20!!
    }
    _panelLeftHeader20 = fluentIcon(name = "Regular.PanelLeftHeader20", 20f) {
      materialPath {
          moveTo(5.0F, 3.0F)
          curveTo(3.343F, 3.0F, 2.0F, 4.343F, 2.0F, 6.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(3.5F, 4.0F)
          verticalLineTo(4.0F)
          horizontalLineTo(15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(8.5F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(8.5F)
          verticalLineTo(8.0F)
          close()
          moveTo(5.0F, 4.0F)
          horizontalLineToRelative(2.5F)
          verticalLineToRelative(11.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()        
      }
    }
    return _panelLeftHeader20!!
  }

private var _panelLeftHeader20: ImageVector? = null
