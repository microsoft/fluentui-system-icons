package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Target32: ImageVector
  get() {
    if (_target32 != null) {
      return _target32!!
    }
    _target32 = fluentIcon(name = "Regular.Target32", 32f) {
      materialPath {
          moveTo(16.0F, 18.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(-7.0F, -2.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()
          moveToRelative(7.0F, -5.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(4.0F, 16.001F)
          curveTo(4.0F, 9.373F, 9.373F, 4.0F, 16.001F, 4.0F)
          curveToRelative(6.628F, 0.0F, 12.002F, 5.373F, 12.002F, 12.001F)
          curveToRelative(0.0F, 6.628F, -5.373F, 12.002F, -12.002F, 12.002F)
          curveTo(9.373F, 28.003F, 4.0F, 22.63F, 4.0F, 16.0F)
          close()
          moveTo(16.001F, 6.0F)
          curveTo(10.478F, 6.0F, 6.0F, 10.478F, 6.0F, 16.001F)
          curveToRelative(0.0F, 5.524F, 4.478F, 10.002F, 10.001F, 10.002F)
          curveToRelative(5.524F, 0.0F, 10.002F, -4.478F, 10.002F, -10.002F)
          curveTo(26.003F, 10.478F, 21.525F, 6.0F, 16.0F, 6.0F)
          close()        
      }
    }
    return _target32!!
  }

private var _target32: ImageVector? = null
