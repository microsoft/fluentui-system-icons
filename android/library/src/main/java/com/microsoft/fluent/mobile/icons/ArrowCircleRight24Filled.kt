package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleRight24: ImageVector
  get() {
    if (_arrowCircleRight24 != null) {
      return _arrowCircleRight24!!
    }
    _arrowCircleRight24 = fluentIcon(name = "Filled.ArrowCircleRight24", 24f) {
      materialPath {
          moveTo(12.001F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.477F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveToRelative(-10.0F, -4.477F, -10.0F, -10.0F)
          reflectiveCurveToRelative(4.477F, -10.0F, 10.0F, -10.0F)
          close()
          moveToRelative(0.78F, 5.469F)
          lineToRelative(-0.084F, -0.073F)
          curveToRelative(-0.26F, -0.193F, -0.619F, -0.196F, -0.882F, -0.007F)
          lineTo(11.72F, 7.47F)
          lineToRelative(-0.073F, 0.084F)
          curveToRelative(-0.194F, 0.261F, -0.196F, 0.62F, -0.007F, 0.883F)
          lineToRelative(0.08F, 0.094F)
          lineToRelative(2.72F, 2.72F)
          horizontalLineTo(7.75F)
          lineToRelative(-0.103F, 0.006F)
          curveToRelative(-0.332F, 0.045F, -0.596F, 0.309F, -0.64F, 0.642F)
          lineTo(7.0F, 11.999F)
          lineToRelative(0.007F, 0.102F)
          curveToRelative(0.045F, 0.333F, 0.309F, 0.596F, 0.642F, 0.641F)
          lineTo(7.75F, 12.75F)
          horizontalLineToRelative(6.69F)
          lineToRelative(-2.72F, 2.72F)
          lineToRelative(-0.073F, 0.085F)
          curveToRelative(-0.217F, 0.293F, -0.193F, 0.71F, 0.073F, 0.976F)
          curveToRelative(0.266F, 0.267F, 0.683F, 0.29F, 0.976F, 0.073F)
          lineToRelative(0.085F, -0.072F)
          lineToRelative(4.001F, -4.0F)
          lineToRelative(0.073F, -0.085F)
          curveToRelative(0.193F, -0.26F, 0.196F, -0.619F, 0.007F, -0.882F)
          lineToRelative(-0.08F, -0.094F)
          lineToRelative(-4.0F, -4.001F)
          lineToRelative(-0.085F, -0.073F)
          lineToRelative(0.084F, 0.073F)
          close()        
      }
    }
    return _arrowCircleRight24!!
  }

private var _arrowCircleRight24: ImageVector? = null
