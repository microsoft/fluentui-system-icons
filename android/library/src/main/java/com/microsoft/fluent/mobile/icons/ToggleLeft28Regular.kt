package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ToggleLeft28: ImageVector
  get() {
    if (_toggleLeft28 != null) {
      return _toggleLeft28!!
    }
    _toggleLeft28 = fluentIcon(name = "Regular.ToggleLeft28", 28f) {
      materialPath {
          moveTo(9.0F, 17.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          close()
          moveTo(8.0F, 8.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, 2.686F, -6.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(-4.5F, 6.0F)
          curveToRelative(0.0F, -2.485F, 2.015F, -4.5F, 4.5F, -4.5F)
          horizontalLineToRelative(12.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, 2.015F, 4.5F, 4.5F)
          reflectiveCurveToRelative(-2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineTo(8.0F)
          curveToRelative(-2.485F, 0.0F, -4.5F, -2.015F, -4.5F, -4.5F)
          close()        
      }
    }
    return _toggleLeft28!!
  }

private var _toggleLeft28: ImageVector? = null
