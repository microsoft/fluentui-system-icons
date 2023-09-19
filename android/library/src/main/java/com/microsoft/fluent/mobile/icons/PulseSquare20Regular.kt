package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PulseSquare20: ImageVector
  get() {
    if (_pulseSquare20 != null) {
      return _pulseSquare20!!
    }
    _pulseSquare20 = fluentIcon(name = "Regular.PulseSquare20", 20f) {
      materialPath {
          moveTo(8.97F, 6.332F)
          curveTo(8.9F, 6.134F, 8.715F, 6.002F, 8.505F, 6.0F)
          curveToRelative(-0.21F, -0.002F, -0.399F, 0.128F, -0.472F, 0.324F)
          lineTo(6.654F, 10.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 10.0F, 5.0F, 10.224F, 5.0F, 10.5F)
          reflectiveCurveTo(5.224F, 11.0F, 5.5F, 11.0F)
          horizontalLineTo(7.0F)
          curveToRelative(0.208F, 0.0F, 0.395F, -0.13F, 0.468F, -0.324F)
          lineToRelative(1.02F, -2.721F)
          lineToRelative(2.041F, 5.713F)
          curveToRelative(0.068F, 0.189F, 0.24F, 0.319F, 0.44F, 0.331F)
          curveToRelative(0.2F, 0.012F, 0.389F, -0.096F, 0.478F, -0.275F)
          lineTo(12.81F, 11.0F)
          horizontalLineToRelative(1.69F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 10.0F, 14.5F, 10.0F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.19F, 0.0F, -0.363F, 0.107F, -0.447F, 0.276F)
          lineToRelative(-0.976F, 1.952F)
          lineTo(8.97F, 6.332F)
          close()
          moveTo(5.0F, 3.0F)
          curveTo(3.895F, 3.0F, 3.0F, 3.895F, 3.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          close()
          moveTo(4.0F, 5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          close()        
      }
    }
    return _pulseSquare20!!
  }

private var _pulseSquare20: ImageVector? = null
