package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EqualCircle24: ImageVector
  get() {
    if (_equalCircle24 != null) {
      return _equalCircle24!!
    }
    _equalCircle24 = fluentIcon(name = "Filled.EqualCircle24", 24f) {
      materialPath {
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          close()
          moveToRelative(-5.748F, -1.5F)
          horizontalLineToRelative(-8.5F)
          curveToRelative(-0.413F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(7.34F, 9.0F, 7.753F, 9.0F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          close()
          moveToRelative(0.0F, 4.5F)
          horizontalLineToRelative(-8.5F)
          curveToRelative(-0.413F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveToRelative(0.337F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(8.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(16.666F, 15.0F, 16.252F, 15.0F)
          close()        
      }
    }
    return _equalCircle24!!
  }

private var _equalCircle24: ImageVector? = null
