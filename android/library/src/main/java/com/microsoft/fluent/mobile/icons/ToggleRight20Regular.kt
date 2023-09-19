package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ToggleRight20: ImageVector
  get() {
    if (_toggleRight20 != null) {
      return _toggleRight20!!
    }
    _toggleRight20 = fluentIcon(name = "Regular.ToggleRight20", 20f) {
      materialPath {
          moveTo(14.0F, 12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          close()
          moveToRelative(4.0F, -3.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _toggleRight20!!
  }

private var _toggleRight20: ImageVector? = null
