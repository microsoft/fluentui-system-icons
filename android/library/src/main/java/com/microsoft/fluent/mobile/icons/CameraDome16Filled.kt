package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CameraDome16: ImageVector
  get() {
    if (_cameraDome16 != null) {
      return _cameraDome16!!
    }
    _cameraDome16 = fluentIcon(name = "Filled.CameraDome16", 16f) {
      materialPath {
          moveTo(1.0F, 3.5F)
          curveTo(1.0F, 2.672F, 1.672F, 2.0F, 2.5F, 2.0F)
          horizontalLineToRelative(11.0F)
          curveTo(14.328F, 2.0F, 15.0F, 2.672F, 15.0F, 3.5F)
          reflectiveCurveTo(14.328F, 5.0F, 13.5F, 5.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(1.672F, 5.0F, 1.0F, 4.328F, 1.0F, 3.5F)
          close()
          moveTo(8.0F, 8.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(-1.0F, 2.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          close()
          moveToRelative(7.0F, -4.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 3.314F, 2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(-9.0F, 4.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          close()        
      }
    }
    return _cameraDome16!!
  }

private var _cameraDome16: ImageVector? = null
