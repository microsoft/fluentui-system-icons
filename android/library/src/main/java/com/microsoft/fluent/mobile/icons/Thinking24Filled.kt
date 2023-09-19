package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Thinking24: ImageVector
  get() {
    if (_thinking24 != null) {
      return _thinking24!!
    }
    _thinking24 = fluentIcon(name = "Filled.Thinking24", 24f) {
      materialPath {
          moveTo(4.0F, 18.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveToRelative(5.5F, -3.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          reflectiveCurveTo(10.88F, 20.0F, 9.5F, 20.0F)
          reflectiveCurveTo(7.0F, 18.88F, 7.0F, 17.5F)
          reflectiveCurveTo(8.12F, 15.0F, 9.5F, 15.0F)
          close()
          moveTo(12.0F, 2.0F)
          curveToRelative(2.66F, 0.0F, 4.884F, 1.923F, 5.33F, 4.47F)
          horizontalLineToRelative(0.082F)
          curveToRelative(2.079F, 0.0F, 3.765F, 1.686F, 3.765F, 3.765F)
          curveToRelative(0.0F, 2.08F, -1.686F, 3.765F, -3.765F, 3.765F)
          horizontalLineTo(6.588F)
          curveToRelative(-2.079F, 0.0F, -3.764F, -1.685F, -3.764F, -3.765F)
          curveToRelative(0.0F, -2.079F, 1.685F, -3.764F, 3.764F, -3.764F)
          horizontalLineTo(6.67F)
          curveTo(7.116F, 3.923F, 9.34F, 2.0F, 12.0F, 2.0F)
          close()        
      }
    }
    return _thinking24!!
  }

private var _thinking24: ImageVector? = null
