package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ToggleLeft28: ImageVector
  get() {
    if (_toggleLeft28 != null) {
      return _toggleLeft28!!
    }
    _toggleLeft28 = fluentIcon(name = "Filled.ToggleLeft28", 28f) {
      materialPath {
          moveTo(2.0F, 14.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(7.0F, 3.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          close()        
      }
    }
    return _toggleLeft28!!
  }

private var _toggleLeft28: ImageVector? = null
