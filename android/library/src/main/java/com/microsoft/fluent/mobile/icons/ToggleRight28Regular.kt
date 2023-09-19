package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ToggleRight28: ImageVector
  get() {
    if (_toggleRight28 != null) {
      return _toggleRight28!!
    }
    _toggleRight28 = fluentIcon(name = "Regular.ToggleRight28", 28f) {
      materialPath {
          moveTo(19.0F, 17.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          close()
          moveToRelative(1.0F, -9.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          horizontalLineToRelative(12.0F)
          close()
          moveToRelative(4.5F, 6.0F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          horizontalLineTo(8.0F)
          curveToRelative(-2.485F, 0.0F, -4.5F, 2.015F, -4.5F, 4.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineToRelative(12.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          close()        
      }
    }
    return _toggleRight28!!
  }

private var _toggleRight28: ImageVector? = null
