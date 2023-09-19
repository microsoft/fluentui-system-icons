package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleRight12: ImageVector
  get() {
    if (_arrowCircleRight12 != null) {
      return _arrowCircleRight12!!
    }
    _arrowCircleRight12 = fluentIcon(name = "Filled.ArrowCircleRight12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, 2.239F, 5.0F, 5.0F)
          reflectiveCurveToRelative(-2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveToRelative(0.098F, 2.647F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          lineTo(7.244F, 5.5F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 5.5F, 3.0F, 5.724F, 3.0F, 6.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(3.744F)
          lineTo(6.098F, 7.646F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveTo(9.0F, 6.158F, 9.0F, 5.841F, 8.805F, 5.646F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          close()        
      }
    }
    return _arrowCircleRight12!!
  }

private var _arrowCircleRight12: ImageVector? = null
