package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LockClosed32: ImageVector
  get() {
    if (_lockClosed32 != null) {
      return _lockClosed32!!
    }
    _lockClosed32 = fluentIcon(name = "Regular.LockClosed32", 32f) {
      materialPath {
          moveTo(18.0F, 20.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(-8.0F, -10.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(6.567F, 30.0F, 5.0F, 28.433F, 5.0F, 26.5F)
          verticalLineToRelative(-13.0F)
          curveTo(5.0F, 11.567F, 6.567F, 10.0F, 8.5F, 10.0F)
          horizontalLineTo(10.0F)
          close()
          moveToRelative(2.0F, -2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(8.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveToRelative(-4.0F, 1.79F, -4.0F, 4.0F)
          close()
          moveToRelative(-3.5F, 4.0F)
          curveTo(7.672F, 12.0F, 7.0F, 12.672F, 7.0F, 13.5F)
          verticalLineToRelative(13.0F)
          curveTo(7.0F, 27.328F, 7.672F, 28.0F, 8.5F, 28.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-13.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-15.0F)
          close()        
      }
    }
    return _lockClosed32!!
  }

private var _lockClosed32: ImageVector? = null
