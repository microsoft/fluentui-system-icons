package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowStepOver20: ImageVector
  get() {
    if (_arrowStepOver20 != null) {
      return _arrowStepOver20!!
    }
    _arrowStepOver20 = fluentIcon(name = "Regular.ArrowStepOver20", 20f) {
      materialPath {
          moveTo(12.149F, 3.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(15.294F, 7.0F)
          horizontalLineTo(10.0F)
          curveToRelative(-2.932F, 0.0F, -5.593F, 1.64F, -6.936F, 4.043F)
          curveToRelative(-0.135F, 0.24F, -0.049F, 0.545F, 0.192F, 0.68F)
          reflectiveCurveToRelative(0.546F, 0.049F, 0.68F, -0.192F)
          curveTo(5.107F, 9.438F, 7.437F, 8.0F, 10.0F, 8.0F)
          horizontalLineToRelative(5.293F)
          lineToRelative(-3.144F, 3.145F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.196F, 0.512F, 0.196F, 0.707F, 0.0F)
          lineToRelative(3.984F, -3.985F)
          curveTo(16.938F, 7.776F, 17.0F, 7.645F, 17.0F, 7.5F)
          curveToRelative(0.0F, -0.128F, -0.049F, -0.256F, -0.146F, -0.354F)
          lineToRelative(-3.998F, -4.0F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          close()
          moveTo(12.0F, 15.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          curveToRelative(-1.104F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.896F, 2.0F, 2.0F, 2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          close()
          moveToRelative(-2.0F, -1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _arrowStepOver20!!
  }

private var _arrowStepOver20: ImageVector? = null
