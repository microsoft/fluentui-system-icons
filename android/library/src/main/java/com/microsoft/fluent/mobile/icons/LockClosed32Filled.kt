package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LockClosed32: ImageVector
  get() {
    if (_lockClosed32 != null) {
      return _lockClosed32!!
    }
    _lockClosed32 = fluentIcon(name = "Filled.LockClosed32", 32f) {
      materialPath {
          moveTo(10.0F, 8.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(8.5F)
          curveTo(6.567F, 10.0F, 5.0F, 11.567F, 5.0F, 13.5F)
          verticalLineToRelative(13.0F)
          curveTo(5.0F, 28.433F, 6.567F, 30.0F, 8.5F, 30.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-13.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          horizontalLineTo(22.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          reflectiveCurveToRelative(-6.0F, 2.686F, -6.0F, 6.0F)
          close()
          moveToRelative(6.0F, -4.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          close()
          moveToRelative(0.0F, 18.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          close()        
      }
    }
    return _lockClosed32!!
  }

private var _lockClosed32: ImageVector? = null
