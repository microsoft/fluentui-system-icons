package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowStepInRight16: ImageVector
  get() {
    if (_arrowStepInRight16 != null) {
      return _arrowStepInRight16!!
    }
    _arrowStepInRight16 = fluentIcon(name = "Regular.ArrowStepInRight16", 16f) {
      materialPath {
          moveTo(8.293F, 8.5F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 8.5F, 1.0F, 8.276F, 1.0F, 8.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(6.793F)
          lineTo(6.147F, 5.354F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, 3.0F)
          curveTo(9.947F, 7.74F, 10.0F, 7.867F, 10.0F, 8.0F)
          curveToRelative(0.0F, 0.133F, -0.053F, 0.26F, -0.146F, 0.354F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(8.293F, 8.5F)
          close()
          moveTo(15.0F, 8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          reflectiveCurveToRelative(-2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _arrowStepInRight16!!
  }

private var _arrowStepInRight16: ImageVector? = null
