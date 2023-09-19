package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ErrorCircle20: ImageVector
  get() {
    if (_errorCircle20 != null) {
      return _errorCircle20!!
    }
    _errorCircle20 = fluentIcon(name = "Regular.ErrorCircle20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveToRelative(0.0F, 9.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(10.414F, 14.0F, 10.0F, 14.0F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(9.586F, 12.5F, 10.0F, 12.5F)
          close()
          moveTo(10.0F, 6.0F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(10.5F, 6.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          curveToRelative(-0.245F, 0.0F, -0.45F, -0.177F, -0.492F, -0.41F)
          lineTo(9.5F, 11.0F)
          verticalLineTo(6.5F)
          curveTo(9.5F, 6.224F, 9.724F, 6.0F, 10.0F, 6.0F)
          close()        
      }
    }
    return _errorCircle20!!
  }

private var _errorCircle20: ImageVector? = null
