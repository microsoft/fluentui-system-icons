package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ToggleRight16: ImageVector
  get() {
    if (_toggleRight16 != null) {
      return _toggleRight16!!
    }
    _toggleRight16 = fluentIcon(name = "Regular.ToggleRight16", 16f) {
      materialPath {
          moveTo(11.0F, 10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveTo(1.0F, 8.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          close()
          moveToRelative(4.0F, -3.0F)
          curveTo(3.343F, 5.0F, 2.0F, 6.343F, 2.0F, 8.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _toggleRight16!!
  }

private var _toggleRight16: ImageVector? = null
