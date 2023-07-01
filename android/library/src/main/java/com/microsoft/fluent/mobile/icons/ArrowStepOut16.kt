package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepOut16: ImageVector
  get() {
    if (_arrowStepOut16 != null) {
      return _arrowStepOut16!!
    }
    _arrowStepOut16 = fluentIcon(name = "Filled.ArrowStepOut16", 16f) {
      materialPath {
          moveTo(4.646F, 4.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(7.5F, 2.707F)
          verticalLineTo(9.5F)
          curveTo(7.5F, 9.776F, 7.724F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(2.707F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-3.0F, -3.0F)
          curveTo(8.26F, 1.054F, 8.133F, 1.0F, 8.0F, 1.0F)
          curveTo(7.867F, 1.0F, 7.74F, 1.053F, 7.646F, 1.147F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          close()
          moveTo(8.0F, 15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()        
      }
    }
    return _arrowStepOut16!!
  }

private var _arrowStepOut16: ImageVector? = null
