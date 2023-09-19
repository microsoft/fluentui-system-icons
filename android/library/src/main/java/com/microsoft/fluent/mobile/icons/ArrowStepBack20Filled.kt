package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepBack20: ImageVector
  get() {
    if (_arrowStepBack20 != null) {
      return _arrowStepBack20!!
    }
    _arrowStepBack20 = fluentIcon(name = "Filled.ArrowStepBack20", 20f) {
      materialPath {
          moveTo(7.851F, 3.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(4.706F, 7.0F)
          horizontalLineTo(10.0F)
          curveToRelative(2.932F, 0.0F, 5.593F, 1.64F, 6.936F, 4.043F)
          curveToRelative(0.135F, 0.24F, 0.049F, 0.545F, -0.192F, 0.68F)
          reflectiveCurveToRelative(-0.546F, 0.049F, -0.68F, -0.192F)
          curveTo(14.894F, 9.438F, 12.564F, 8.0F, 10.0F, 8.0F)
          horizontalLineTo(4.707F)
          lineToRelative(3.144F, 3.145F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.195F, 0.196F, -0.512F, 0.196F, -0.707F, 0.0F)
          lineTo(3.16F, 7.867F)
          curveTo(3.063F, 7.776F, 3.0F, 7.645F, 3.0F, 7.5F)
          curveToRelative(0.0F, -0.128F, 0.049F, -0.256F, 0.146F, -0.354F)
          lineToRelative(3.998F, -4.0F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          close()
          moveTo(12.0F, 15.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()        
      }
    }
    return _arrowStepBack20!!
  }

private var _arrowStepBack20: ImageVector? = null
