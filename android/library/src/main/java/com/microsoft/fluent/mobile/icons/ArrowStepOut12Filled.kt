package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepOut12: ImageVector
  get() {
    if (_arrowStepOut12 != null) {
      return _arrowStepOut12!!
    }
    _arrowStepOut12 = fluentIcon(name = "Filled.ArrowStepOut12", 12f) {
      materialPath {
          moveTo(5.5F, 6.5F)
          curveTo(5.5F, 6.776F, 5.724F, 7.0F, 6.0F, 7.0F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(2.707F)
          lineToRelative(1.146F, 1.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineTo(5.5F, 2.707F)
          verticalLineTo(6.5F)
          close()
          moveTo(6.0F, 11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(6.828F, 8.0F, 6.0F, 8.0F)
          reflectiveCurveTo(4.5F, 8.672F, 4.5F, 9.5F)
          reflectiveCurveTo(5.172F, 11.0F, 6.0F, 11.0F)
          close()        
      }
    }
    return _arrowStepOut12!!
  }

private var _arrowStepOut12: ImageVector? = null
