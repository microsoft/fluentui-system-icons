package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Patient32: ImageVector
  get() {
    if (_patient32 != null) {
      return _patient32!!
    }
    _patient32 = fluentIcon(name = "Filled.Patient32", 32f) {
      materialPath {
          moveTo(20.0F, 10.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          reflectiveCurveToRelative(1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          close()
          moveTo(10.0F, 24.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(10.0F)
          close()
          moveTo(5.0F, 5.5F)
          curveTo(5.0F, 3.567F, 6.567F, 2.0F, 8.5F, 2.0F)
          horizontalLineToRelative(15.0F)
          curveTo(25.433F, 2.0F, 27.0F, 3.567F, 27.0F, 5.5F)
          verticalLineToRelative(21.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(6.567F, 30.0F, 5.0F, 28.433F, 5.0F, 26.5F)
          verticalLineToRelative(-21.0F)
          close()
          moveTo(8.5F, 4.0F)
          curveTo(7.672F, 4.0F, 7.0F, 4.672F, 7.0F, 5.5F)
          verticalLineTo(20.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(5.5F)
          curveTo(25.0F, 4.672F, 24.328F, 4.0F, 23.5F, 4.0F)
          horizontalLineToRelative(-15.0F)
          close()
          moveTo(7.0F, 26.5F)
          curveTo(7.0F, 27.328F, 7.672F, 28.0F, 8.5F, 28.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(22.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(4.5F)
          close()        
      }
    }
    return _patient32!!
  }

private var _patient32: ImageVector? = null
