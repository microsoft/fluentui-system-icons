package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ToggleLeft16: ImageVector
  get() {
    if (_toggleLeft16 != null) {
      return _toggleLeft16!!
    }
    _toggleLeft16 = fluentIcon(name = "Filled.ToggleLeft16", 16f) {
      materialPath {
          moveTo(11.0F, 4.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(-6.0F, 6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveTo(6.105F, 6.0F, 5.0F, 6.0F)
          reflectiveCurveTo(3.0F, 6.895F, 3.0F, 8.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()        
      }
    }
    return _toggleLeft16!!
  }

private var _toggleLeft16: ImageVector? = null
