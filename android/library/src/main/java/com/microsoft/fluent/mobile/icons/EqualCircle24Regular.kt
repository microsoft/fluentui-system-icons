package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.EqualCircle24: ImageVector
  get() {
    if (_equalCircle24 != null) {
      return _equalCircle24!!
    }
    _equalCircle24 = fluentIcon(name = "Regular.EqualCircle24", 24f) {
      materialPath {
          moveTo(16.258F, 10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.672F, 9.0F, 16.258F, 9.0F)
          horizontalLineTo(7.77F)
          curveTo(7.356F, 9.0F, 7.02F, 9.336F, 7.02F, 9.75F)
          reflectiveCurveToRelative(0.335F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(8.487F)
          close()
          moveToRelative(0.0F, 4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(7.77F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(7.356F, 15.0F, 7.77F, 15.0F)
          horizontalLineToRelative(8.487F)
          close()
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          close()
          moveTo(12.0F, 3.5F)
          curveToRelative(4.694F, 0.0F, 8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          reflectiveCurveToRelative(-8.5F, -3.806F, -8.5F, -8.5F)
          reflectiveCurveTo(7.306F, 3.5F, 12.0F, 3.5F)
          close()        
      }
    }
    return _equalCircle24!!
  }

private var _equalCircle24: ImageVector? = null
