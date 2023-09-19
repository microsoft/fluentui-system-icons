package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Target16: ImageVector
  get() {
    if (_target16 != null) {
      return _target16!!
    }
    _target16 = fluentIcon(name = "Regular.Target16", 16f) {
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
          moveTo(8.0F, 5.5F)
          curveTo(6.62F, 5.5F, 5.5F, 6.62F, 5.5F, 8.0F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveTo(9.38F, 5.5F, 8.0F, 5.5F)
          close()
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -3.313F, 2.687F, -6.0F, 6.0F, -6.0F)
          curveToRelative(3.315F, 0.0F, 6.001F, 2.687F, 6.001F, 6.0F)
          curveToRelative(0.0F, 3.315F, -2.686F, 6.001F, -6.0F, 6.001F)
          reflectiveCurveTo(2.0F, 11.315F, 2.0F, 8.001F)
          close()
          moveToRelative(6.0F, -5.0F)
          curveTo(5.24F, 3.0F, 3.0F, 5.239F, 3.0F, 8.0F)
          curveToRelative(0.0F, 2.762F, 2.239F, 5.001F, 5.0F, 5.001F)
          curveToRelative(2.762F, 0.0F, 5.001F, -2.239F, 5.001F, -5.0F)
          curveToRelative(0.0F, -2.762F, -2.239F, -5.001F, -5.0F, -5.001F)
          close()        
      }
    }
    return _target16!!
  }

private var _target16: ImageVector? = null
