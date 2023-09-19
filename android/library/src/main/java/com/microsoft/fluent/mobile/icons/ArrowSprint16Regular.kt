package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSprint16: ImageVector
  get() {
    if (_arrowSprint16 != null) {
      return _arrowSprint16!!
    }
    _arrowSprint16 = fluentIcon(name = "Regular.ArrowSprint16", 16f) {
      materialPath {
          moveTo(8.0F, 4.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          curveToRelative(0.0F, 0.537F, -0.12F, 1.045F, -0.337F, 1.5F)
          horizontalLineTo(10.0F)
          curveToRelative(0.314F, -0.418F, 0.5F, -0.937F, 0.5F, -1.5F)
          curveTo(10.5F, 6.12F, 9.38F, 5.0F, 8.0F, 5.0F)
          reflectiveCurveTo(5.5F, 6.12F, 5.5F, 7.5F)
          reflectiveCurveTo(6.62F, 10.0F, 8.0F, 10.0F)
          horizontalLineToRelative(5.293F)
          lineToRelative(-0.647F, -0.646F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(13.293F, 11.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-1.933F, 0.0F, -3.5F, -1.567F, -3.5F, -3.5F)
          reflectiveCurveTo(6.067F, 4.0F, 8.0F, 4.0F)
          close()
          moveToRelative(-3.742F, 6.0F)
          curveToRelative(0.253F, 0.378F, 0.561F, 0.715F, 0.913F, 1.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 11.0F, 2.0F, 10.776F, 2.0F, 10.5F)
          reflectiveCurveTo(2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineToRelative(1.758F)
          close()        
      }
    }
    return _arrowSprint16!!
  }

private var _arrowSprint16: ImageVector? = null
