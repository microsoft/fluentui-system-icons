package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepIn16: ImageVector
  get() {
    if (_arrowStepIn16 != null) {
      return _arrowStepIn16!!
    }
    _arrowStepIn16 = fluentIcon(name = "Filled.ArrowStepIn16", 16f) {
      materialPath {
          moveTo(7.5F, 8.293F)
          verticalLineTo(1.5F)
          curveTo(7.5F, 1.224F, 7.724F, 1.0F, 8.0F, 1.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(6.793F)
          lineToRelative(2.146F, -2.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-3.0F, 3.0F)
          curveTo(8.26F, 9.947F, 8.133F, 10.0F, 8.0F, 10.0F)
          curveToRelative(-0.133F, 0.0F, -0.26F, -0.053F, -0.354F, -0.146F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(7.5F, 8.293F)
          close()
          moveTo(8.0F, 15.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()        
      }
    }
    return _arrowStepIn16!!
  }

private var _arrowStepIn16: ImageVector? = null
