package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowStepInRight12: ImageVector
  get() {
    if (_arrowStepInRight12 != null) {
      return _arrowStepInRight12!!
    }
    _arrowStepInRight12 = fluentIcon(name = "Regular.ArrowStepInRight12", 12f) {
      materialPath {
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(3.793F)
          lineTo(4.146F, 4.354F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(5.293F, 6.5F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 6.5F, 1.0F, 6.276F, 1.0F, 6.0F)
          close()
          moveToRelative(8.5F, -1.5F)
          curveTo(10.328F, 4.5F, 11.0F, 5.172F, 11.0F, 6.0F)
          reflectiveCurveToRelative(-0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(8.0F, 6.828F, 8.0F, 6.0F)
          reflectiveCurveToRelative(0.672F, -1.5F, 1.5F, -1.5F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(9.224F, 5.5F, 9.0F, 5.724F, 9.0F, 6.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(10.0F, 6.276F, 10.0F, 6.0F)
          reflectiveCurveTo(9.776F, 5.5F, 9.5F, 5.5F)
          close()        
      }
    }
    return _arrowStepInRight12!!
  }

private var _arrowStepInRight12: ImageVector? = null
