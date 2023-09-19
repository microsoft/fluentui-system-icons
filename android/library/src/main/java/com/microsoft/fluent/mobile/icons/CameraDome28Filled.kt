package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CameraDome28: ImageVector
  get() {
    if (_cameraDome28 != null) {
      return _cameraDome28!!
    }
    _cameraDome28 = fluentIcon(name = "Filled.CameraDome28", 28f) {
      materialPath {
          moveTo(2.0F, 4.75F)
          curveTo(2.0F, 3.784F, 2.784F, 3.0F, 3.75F, 3.0F)
          horizontalLineToRelative(20.5F)
          curveTo(25.216F, 3.0F, 26.0F, 3.784F, 26.0F, 4.75F)
          reflectiveCurveTo(25.216F, 6.5F, 24.25F, 6.5F)
          horizontalLineTo(3.75F)
          curveTo(2.784F, 6.5F, 2.0F, 5.716F, 2.0F, 4.75F)
          close()
          moveTo(9.0F, 16.5F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          close()
          moveToRelative(5.0F, 3.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          reflectiveCurveTo(15.933F, 13.0F, 14.0F, 13.0F)
          reflectiveCurveToRelative(-3.5F, 1.567F, -3.5F, 3.5F)
          reflectiveCurveTo(12.067F, 20.0F, 14.0F, 20.0F)
          close()
          moveTo(3.0F, 8.0F)
          horizontalLineToRelative(22.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 6.075F, -4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveTo(3.0F, 21.075F, 3.0F, 15.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(4.5F, 8.5F)
          curveToRelative(0.0F, 3.59F, 2.91F, 6.5F, 6.5F, 6.5F)
          reflectiveCurveToRelative(6.5F, -2.91F, 6.5F, -6.5F)
          reflectiveCurveTo(17.59F, 10.0F, 14.0F, 10.0F)
          reflectiveCurveToRelative(-6.5F, 2.91F, -6.5F, 6.5F)
          close()        
      }
    }
    return _cameraDome28!!
  }

private var _cameraDome28: ImageVector? = null
