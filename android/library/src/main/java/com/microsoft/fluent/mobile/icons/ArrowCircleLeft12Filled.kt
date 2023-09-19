package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleLeft12: ImageVector
  get() {
    if (_arrowCircleLeft12 != null) {
      return _arrowCircleLeft12!!
    }
    _arrowCircleLeft12 = fluentIcon(name = "Filled.ArrowCircleLeft12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveTo(3.239F, 1.0F, 1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(5.902F, 3.647F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.511F, 0.0F, 0.707F)
          lineTo(4.756F, 5.5F)
          horizontalLineTo(8.5F)
          curveTo(8.776F, 5.5F, 9.0F, 5.724F, 9.0F, 6.0F)
          reflectiveCurveTo(8.776F, 6.5F, 8.5F, 6.5F)
          horizontalLineTo(4.756F)
          lineToRelative(1.146F, 1.146F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveTo(3.0F, 6.158F, 3.0F, 5.841F, 3.195F, 5.646F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          close()        
      }
    }
    return _arrowCircleLeft12!!
  }

private var _arrowCircleLeft12: ImageVector? = null
