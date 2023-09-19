package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Target16: ImageVector
  get() {
    if (_target16 != null) {
      return _target16!!
    }
    _target16 = fluentIcon(name = "Filled.Target16", 16f) {
      materialPath {
          moveTo(8.0F, 9.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveTo(8.552F, 7.0F, 8.0F, 7.0F)
          reflectiveCurveTo(7.0F, 7.448F, 7.0F, 8.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()
          moveTo(4.5F, 8.0F)
          curveToRelative(0.0F, -1.933F, 1.567F, -3.5F, 3.5F, -3.5F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          reflectiveCurveToRelative(-1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(4.5F, 9.933F, 4.5F, 8.0F)
          close()
          moveTo(8.0F, 6.0F)
          curveTo(6.895F, 6.0F, 6.0F, 6.896F, 6.0F, 8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          curveToRelative(0.0F, -1.104F, -0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()
          moveToRelative(6.0F, -4.5F)
          curveTo(5.515F, 3.5F, 3.5F, 5.515F, 3.5F, 8.0F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(10.485F, 3.5F, 8.0F, 3.5F)
          close()        
      }
    }
    return _target16!!
  }

private var _target16: ImageVector? = null
