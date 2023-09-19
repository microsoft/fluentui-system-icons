package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CameraDome16: ImageVector
  get() {
    if (_cameraDome16 != null) {
      return _cameraDome16!!
    }
    _cameraDome16 = fluentIcon(name = "Regular.CameraDome16", 16f) {
      materialPath {
          moveTo(8.0F, 9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-3.0F, 1.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveToRelative(3.0F, -2.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveTo(1.0F, 3.5F)
          curveTo(1.0F, 2.672F, 1.672F, 2.0F, 2.5F, 2.0F)
          horizontalLineToRelative(11.0F)
          curveTo(14.328F, 2.0F, 15.0F, 2.672F, 15.0F, 3.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.653F, -0.417F, 1.209F, -1.0F, 1.415F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          verticalLineTo(5.915F)
          curveTo(1.417F, 5.709F, 1.0F, 5.153F, 1.0F, 4.5F)
          verticalLineToRelative(-1.0F)
          close()
          moveTo(2.5F, 5.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 5.0F, 14.0F, 4.776F, 14.0F, 4.5F)
          verticalLineToRelative(-1.0F)
          curveTo(14.0F, 3.224F, 13.776F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 3.0F, 2.0F, 3.224F, 2.0F, 3.5F)
          verticalLineToRelative(1.0F)
          curveTo(2.0F, 4.776F, 2.224F, 5.0F, 2.5F, 5.0F)
          close()
          moveTo(3.0F, 6.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _cameraDome16!!
  }

private var _cameraDome16: ImageVector? = null
