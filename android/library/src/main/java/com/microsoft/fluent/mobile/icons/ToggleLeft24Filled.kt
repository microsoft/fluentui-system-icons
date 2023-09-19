package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ToggleLeft24: ImageVector
  get() {
    if (_toggleLeft24 != null) {
      return _toggleLeft24!!
    }
    _toggleLeft24 = fluentIcon(name = "Filled.ToggleLeft24", 24f) {
      materialPath {
          moveTo(17.0F, 7.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          horizontalLineToRelative(10.0F)
          close()
          moveToRelative(-9.75F, 7.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveToRelative(-1.12F, -2.5F, -2.5F, -2.5F)
          reflectiveCurveToRelative(-2.5F, 1.12F, -2.5F, 2.5F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          close()        
      }
    }
    return _toggleLeft24!!
  }

private var _toggleLeft24: ImageVector? = null
