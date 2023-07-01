package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CameraDome20: ImageVector
  get() {
    if (_cameraDome20 != null) {
      return _cameraDome20!!
    }
    _cameraDome20 = fluentIcon(name = "Regular.CameraDome20", 20f) {
      materialPath {
          moveTo(8.0F, 12.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(2.0F, -4.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          close()
          moveToRelative(-3.0F, 4.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.672F, 2.672F, 3.0F, 3.5F, 3.0F)
          horizontalLineToRelative(13.0F)
          curveTo(17.328F, 3.0F, 18.0F, 3.672F, 18.0F, 4.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.653F, -0.417F, 1.209F, -1.0F, 1.415F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          verticalLineTo(6.915F)
          curveTo(2.417F, 6.709F, 2.0F, 6.153F, 2.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          close()
          moveTo(4.0F, 7.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 3.314F, 2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(4.0F)
          close()
          moveTo(3.5F, 4.0F)
          curveTo(3.224F, 4.0F, 3.0F, 4.224F, 3.0F, 4.5F)
          verticalLineToRelative(1.0F)
          curveTo(3.0F, 5.776F, 3.224F, 6.0F, 3.5F, 6.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 6.0F, 17.0F, 5.776F, 17.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          curveTo(17.0F, 4.224F, 16.776F, 4.0F, 16.5F, 4.0F)
          horizontalLineToRelative(-13.0F)
          close()        
      }
    }
    return _cameraDome20!!
  }

private var _cameraDome20: ImageVector? = null
