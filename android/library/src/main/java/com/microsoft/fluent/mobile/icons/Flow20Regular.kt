package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flow20: ImageVector
  get() {
    if (_flow20 != null) {
      return _flow20!!
    }
    _flow20 = fluentIcon(name = "Regular.Flow20", 20f) {
      materialPath {
          moveTo(15.0F, 5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(-2.959F, 1.5F)
          curveTo(12.28F, 5.081F, 13.514F, 4.0F, 15.0F, 4.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          curveToRelative(-1.486F, 0.0F, -2.72F, -1.081F, -2.959F, -2.5F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(7.958F)
          curveTo(7.72F, 14.92F, 6.487F, 16.0F, 5.0F, 16.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(1.487F, 0.0F, 2.72F, 1.081F, 2.958F, 2.5F)
          horizontalLineTo(8.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(0.041F)
          close()
          moveTo(5.0F, 11.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()        
      }
    }
    return _flow20!!
  }

private var _flow20: ImageVector? = null
