package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowReset32: ImageVector
  get() {
    if (_arrowReset32 != null) {
      return _arrowReset32!!
    }
    _arrowReset32 = fluentIcon(name = "Regular.ArrowReset32", 32f) {
      materialPath {
          moveTo(8.707F, 3.293F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(5.414F, 8.0F)
          horizontalLineTo(17.5F)
          curveTo(23.299F, 8.0F, 28.0F, 12.701F, 28.0F, 18.5F)
          reflectiveCurveTo(23.299F, 29.0F, 17.5F, 29.0F)
          reflectiveCurveTo(7.0F, 24.299F, 7.0F, 18.5F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 4.694F, 3.806F, 8.5F, 8.5F, 8.5F)
          reflectiveCurveToRelative(8.5F, -3.806F, 8.5F, -8.5F)
          reflectiveCurveToRelative(-3.806F, -8.5F, -8.5F, -8.5F)
          horizontalLineTo(5.414F)
          lineToRelative(3.293F, 3.293F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-5.0F, -5.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          close()        
      }
    }
    return _arrowReset32!!
  }

private var _arrowReset32: ImageVector? = null
