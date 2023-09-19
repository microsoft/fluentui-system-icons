package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Stack20: ImageVector
  get() {
    if (_stack20 != null) {
      return _stack20!!
    }
    _stack20 = fluentIcon(name = "Regular.Stack20", 20f) {
      materialPath {
          moveTo(2.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(2.0F, -1.0F)
          curveTo(3.448F, 4.0F, 3.0F, 4.448F, 3.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(2.0F, 11.0F)
          curveToRelative(-0.74F, 0.0F, -1.387F, -0.402F, -1.732F, -1.0F)
          horizontalLineTo(12.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(5.268F)
          curveTo(15.598F, 5.613F, 16.0F, 6.26F, 16.0F, 7.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(2.0F, 2.0F)
          curveToRelative(-0.74F, 0.0F, -1.387F, -0.402F, -1.732F, -1.0F)
          horizontalLineTo(12.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineTo(7.268F)
          curveTo(17.598F, 7.613F, 18.0F, 8.26F, 18.0F, 9.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _stack20!!
  }

private var _stack20: ImageVector? = null
