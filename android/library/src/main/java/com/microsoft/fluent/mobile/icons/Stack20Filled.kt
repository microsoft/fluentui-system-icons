package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Stack20: ImageVector
  get() {
    if (_stack20 != null) {
      return _stack20!!
    }
    _stack20 = fluentIcon(name = "Filled.Stack20", 20f) {
      materialPath {
          moveTo(4.0F, 3.0F)
          curveTo(2.895F, 3.0F, 2.0F, 3.895F, 2.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(0.268F, 11.0F)
          curveTo(4.613F, 14.598F, 5.26F, 15.0F, 6.0F, 15.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.74F, -0.402F, -1.387F, -1.0F, -1.732F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(4.268F)
          close()
          moveToRelative(2.0F, 2.0F)
          curveTo(6.613F, 16.598F, 7.26F, 17.0F, 8.0F, 17.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.74F, -0.402F, -1.387F, -1.0F, -1.732F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          horizontalLineTo(6.268F)
          close()        
      }
    }
    return _stack20!!
  }

private var _stack20: ImageVector? = null
