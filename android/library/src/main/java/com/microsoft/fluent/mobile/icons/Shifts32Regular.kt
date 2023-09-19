package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Shifts32: ImageVector
  get() {
    if (_shifts32 != null) {
      return _shifts32!!
    }
    _shifts32 = fluentIcon(name = "Regular.Shifts32", 32f) {
      materialPath {
          moveTo(15.006F, 8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(7.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveTo(9.0F, 4.0F)
          curveTo(6.239F, 4.0F, 4.0F, 6.239F, 4.0F, 9.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          horizontalLineTo(9.0F)
          close()
          moveTo(6.0F, 9.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(9.0F)
          close()        
      }
    }
    return _shifts32!!
  }

private var _shifts32: ImageVector? = null
