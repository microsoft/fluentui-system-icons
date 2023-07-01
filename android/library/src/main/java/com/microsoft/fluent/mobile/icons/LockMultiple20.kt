package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LockMultiple20: ImageVector
  get() {
    if (_lockMultiple20 != null) {
      return _lockMultiple20!!
    }
    _lockMultiple20 = fluentIcon(name = "Filled.LockMultiple20", 20f) {
      materialPath {
          moveTo(9.0F, 3.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveToRelative(3.0F, 3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveTo(6.0F, 3.343F, 6.0F, 5.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 6.0F, 4.0F, 6.672F, 4.0F, 7.5F)
          verticalLineToRelative(6.0F)
          curveTo(4.0F, 14.328F, 4.672F, 15.0F, 5.5F, 15.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-6.0F)
          curveTo(14.0F, 6.672F, 13.328F, 6.0F, 12.5F, 6.0F)
          horizontalLineTo(12.0F)
          close()
          moveTo(6.086F, 16.0F)
          curveToRelative(0.206F, 0.583F, 0.761F, 1.0F, 1.415F, 1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.653F, -0.418F, -1.209F, -1.0F, -1.415F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(6.086F)
          close()
          moveTo(10.0F, 10.5F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _lockMultiple20!!
  }

private var _lockMultiple20: ImageVector? = null
