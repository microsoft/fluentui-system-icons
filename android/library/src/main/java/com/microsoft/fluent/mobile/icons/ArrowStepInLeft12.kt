package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowStepInLeft12: ImageVector
  get() {
    if (_arrowStepInLeft12 != null) {
      return _arrowStepInLeft12!!
    }
    _arrowStepInLeft12 = fluentIcon(name = "Filled.ArrowStepInLeft12", 12f) {
      materialPath {
          moveTo(11.0F, 6.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(6.707F)
          lineToRelative(1.147F, -1.146F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(6.707F, 6.5F)
          horizontalLineTo(10.5F)
          curveTo(10.776F, 6.5F, 11.0F, 6.276F, 11.0F, 6.0F)
          close()
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveTo(4.0F, 5.172F, 4.0F, 6.0F)
          reflectiveCurveTo(3.328F, 7.5F, 2.5F, 7.5F)
          reflectiveCurveTo(1.0F, 6.828F, 1.0F, 6.0F)
          close()        
      }
    }
    return _arrowStepInLeft12!!
  }

private var _arrowStepInLeft12: ImageVector? = null
