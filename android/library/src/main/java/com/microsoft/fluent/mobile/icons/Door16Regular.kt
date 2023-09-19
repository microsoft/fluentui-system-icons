package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Door16: ImageVector
  get() {
    if (_door16 != null) {
      return _door16!!
    }
    _door16 = fluentIcon(name = "Regular.Door16", 16f) {
      materialPath {
          moveTo(6.0F, 9.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveTo(6.552F, 7.0F, 6.0F, 7.0F)
          reflectiveCurveTo(5.0F, 7.448F, 5.0F, 8.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()
          moveTo(5.0F, 1.0F)
          curveTo(3.895F, 1.0F, 3.0F, 1.895F, 3.0F, 3.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          close()
          moveTo(4.0F, 3.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(3.0F)
          close()        
      }
    }
    return _door16!!
  }

private var _door16: ImageVector? = null
