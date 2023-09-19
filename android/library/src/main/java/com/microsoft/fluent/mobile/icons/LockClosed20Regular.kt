package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LockClosed20: ImageVector
  get() {
    if (_lockClosed20 != null) {
      return _lockClosed20!!
    }
    _lockClosed20 = fluentIcon(name = "Regular.LockClosed20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          close()
          moveToRelative(4.0F, 5.0F)
          horizontalLineTo(6.0F)
          curveTo(5.448F, 7.0F, 5.0F, 7.448F, 5.0F, 8.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-4.0F, 3.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveTo(10.0F, 3.0F)
          curveTo(8.895F, 3.0F, 8.0F, 3.895F, 8.0F, 5.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()        
      }
    }
    return _lockClosed20!!
  }

private var _lockClosed20: ImageVector? = null
