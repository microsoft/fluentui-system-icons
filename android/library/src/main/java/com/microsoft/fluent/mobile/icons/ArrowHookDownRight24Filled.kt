package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowHookDownRight24: ImageVector
  get() {
    if (_arrowHookDownRight24 != null) {
      return _arrowHookDownRight24!!
    }
    _arrowHookDownRight24 = fluentIcon(name = "Filled.ArrowHookDownRight24", 24f) {
      materialPath {
          moveTo(10.5F, 6.0F)
          horizontalLineTo(16.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(6.91F, 4.0F, 4.0F, 6.91F, 4.0F, 10.5F)
          reflectiveCurveTo(6.91F, 17.0F, 10.5F, 17.0F)
          horizontalLineToRelative(5.14F)
          lineToRelative(-1.933F, 1.933F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(3.53F, -3.529F)
          curveToRelative(0.09F, -0.091F, 0.161F, -0.196F, 0.21F, -0.308F)
          curveTo(18.949F, 16.36F, 19.0F, 16.186F, 19.0F, 16.0F)
          curveToRelative(0.0F, -0.29F, -0.123F, -0.55F, -0.32F, -0.733F)
          lineToRelative(-0.027F, -0.029F)
          lineToRelative(-3.531F, -3.53F)
          curveToRelative(-0.391F, -0.391F, -1.024F, -0.391F, -1.415F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.023F, 0.0F, 1.413F)
          lineTo(15.586F, 15.0F)
          horizontalLineTo(10.5F)
          curveTo(8.015F, 15.0F, 6.0F, 12.985F, 6.0F, 10.5F)
          reflectiveCurveTo(8.015F, 6.0F, 10.5F, 6.0F)
          close()        
      }
    }
    return _arrowHookDownRight24!!
  }

private var _arrowHookDownRight24: ImageVector? = null
