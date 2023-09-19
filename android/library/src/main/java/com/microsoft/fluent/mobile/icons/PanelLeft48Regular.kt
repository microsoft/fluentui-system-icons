package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PanelLeft48: ImageVector
  get() {
    if (_panelLeft48 != null) {
      return _panelLeft48!!
    }
    _panelLeft48 = fluentIcon(name = "Regular.PanelLeft48", 48f) {
      materialPath {
          moveTo(10.25F, 7.0F)
          curveTo(6.798F, 7.0F, 4.0F, 9.798F, 4.0F, 13.25F)
          verticalLineToRelative(21.5F)
          curveTo(4.0F, 38.202F, 6.798F, 41.0F, 10.25F, 41.0F)
          horizontalLineToRelative(27.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, -2.798F, 6.25F, -6.25F)
          verticalLineToRelative(-21.5F)
          curveTo(44.0F, 9.798F, 41.202F, 7.0F, 37.75F, 7.0F)
          horizontalLineToRelative(-27.5F)
          close()
          moveTo(6.5F, 13.25F)
          curveToRelative(0.0F, -2.071F, 1.679F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(5.5F)
          verticalLineToRelative(29.0F)
          horizontalLineToRelative(-5.5F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineToRelative(-21.5F)
          close()
          moveTo(18.25F, 38.5F)
          verticalLineToRelative(-29.0F)
          horizontalLineToRelative(19.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineToRelative(21.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineToRelative(-19.5F)
          close()        
      }
    }
    return _panelLeft48!!
  }

private var _panelLeft48: ImageVector? = null
