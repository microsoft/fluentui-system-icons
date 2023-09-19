package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepOver16: ImageVector
  get() {
    if (_arrowStepOver16 != null) {
      return _arrowStepOver16!!
    }
    _arrowStepOver16 = fluentIcon(name = "Filled.ArrowStepOver16", 16f) {
      materialPath {
          moveTo(10.146F, 2.147F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(12.293F, 5.0F)
          horizontalLineTo(9.957F)
          curveTo(8.49F, 5.0F, 7.052F, 5.0F, 5.731F, 5.396F)
          curveTo(4.366F, 5.806F, 3.146F, 6.63F, 2.084F, 8.223F)
          curveToRelative(-0.153F, 0.23F, -0.091F, 0.54F, 0.139F, 0.693F)
          curveToRelative(0.23F, 0.153F, 0.54F, 0.091F, 0.693F, -0.139F)
          curveTo(3.854F, 7.37F, 4.885F, 6.694F, 6.02F, 6.354F)
          curveTo(7.185F, 6.004F, 8.483F, 6.0F, 10.0F, 6.0F)
          horizontalLineToRelative(2.293F)
          lineToRelative(-2.146F, 2.146F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.195F, 0.196F, 0.511F, 0.196F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          close()
          moveTo(8.0F, 15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          curveToRelative(-1.104F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.896F, 2.0F, 2.0F, 2.0F)
          close()        
      }
    }
    return _arrowStepOver16!!
  }

private var _arrowStepOver16: ImageVector? = null
