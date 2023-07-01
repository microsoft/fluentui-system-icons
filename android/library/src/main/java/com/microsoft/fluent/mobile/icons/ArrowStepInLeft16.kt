package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowStepInLeft16: ImageVector
  get() {
    if (_arrowStepInLeft16 != null) {
      return _arrowStepInLeft16!!
    }
    _arrowStepInLeft16 = fluentIcon(name = "Regular.ArrowStepInLeft16", 16f) {
      materialPath {
          moveTo(7.707F, 8.5F)
          horizontalLineTo(14.5F)
          curveTo(14.776F, 8.5F, 15.0F, 8.276F, 15.0F, 8.0F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(7.707F)
          lineToRelative(2.147F, -2.146F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-3.0F, 3.0F)
          curveTo(6.052F, 7.74F, 6.0F, 7.867F, 6.0F, 8.0F)
          curveToRelative(0.0F, 0.133F, 0.053F, 0.26F, 0.146F, 0.354F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.196F, 0.196F, -0.512F, 0.0F, -0.708F)
          lineTo(7.708F, 8.5F)
          close()
          moveTo(1.0F, 8.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          close()        
      }
    }
    return _arrowStepInLeft16!!
  }

private var _arrowStepInLeft16: ImageVector? = null
