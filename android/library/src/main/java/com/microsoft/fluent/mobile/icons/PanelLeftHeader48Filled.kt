package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PanelLeftHeader48: ImageVector
  get() {
    if (_panelLeftHeader48 != null) {
      return _panelLeftHeader48!!
    }
    _panelLeftHeader48 = fluentIcon(name = "Filled.PanelLeftHeader48", 48f) {
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
          moveTo(41.5F, 34.75F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineToRelative(-19.5F)
          verticalLineToRelative(-18.0F)
          horizontalLineTo(41.5F)
          verticalLineToRelative(14.25F)
          close()
          moveToRelative(0.0F, -16.75F)
          horizontalLineTo(18.25F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(19.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineTo(18.0F)
          close()        
      }
    }
    return _panelLeftHeader48!!
  }

private var _panelLeftHeader48: ImageVector? = null
