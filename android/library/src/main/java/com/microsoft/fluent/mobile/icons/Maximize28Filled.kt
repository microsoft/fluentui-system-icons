package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Maximize28: ImageVector
  get() {
    if (_maximize28 != null) {
      return _maximize28!!
    }
    _maximize28 = fluentIcon(name = "Filled.Maximize28", 28f) {
      materialPath {
          moveTo(3.0F, 7.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(4.0F, -2.0F)
          curveTo(5.895F, 5.0F, 5.0F, 5.895F, 5.0F, 7.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _maximize28!!
  }

private var _maximize28: ImageVector? = null
