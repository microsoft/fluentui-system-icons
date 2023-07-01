package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ToggleRight16: ImageVector
  get() {
    if (_toggleRight16 != null) {
      return _toggleRight16!!
    }
    _toggleRight16 = fluentIcon(name = "Filled.ToggleRight16", 16f) {
      materialPath {
          moveTo(5.0F, 4.0F)
          curveTo(2.79F, 4.0F, 1.0F, 5.79F, 1.0F, 8.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(6.0F, 6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          close()        
      }
    }
    return _toggleRight16!!
  }

private var _toggleRight16: ImageVector? = null
