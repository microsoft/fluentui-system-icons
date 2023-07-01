package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FStop24: ImageVector
  get() {
    if (_fStop24 != null) {
      return _fStop24!!
    }
    _fStop24 = fluentIcon(name = "Filled.FStop24", 24f) {
      materialPath {
          moveTo(13.442F, 6.57F)
          curveToRelative(0.312F, -1.827F, 2.188F, -2.937F, 3.94F, -2.33F)
          lineToRelative(0.59F, 0.205F)
          curveToRelative(0.523F, 0.18F, 1.092F, -0.096F, 1.273F, -0.617F)
          curveToRelative(0.18F, -0.522F, -0.096F, -1.092F, -0.617F, -1.273F)
          lineTo(18.036F, 2.35F)
          curveToRelative(-2.918F, -1.01F, -6.046F, 0.84F, -6.566F, 3.883F)
          lineTo(10.742F, 10.5F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(3.4F)
          lineToRelative(-0.69F, 4.042F)
          curveToRelative(-0.347F, 2.033F, -2.595F, 3.117F, -4.403F, 2.123F)
          lineToRelative(-0.075F, -0.041F)
          curveToRelative(-0.484F, -0.266F, -1.092F, -0.09F, -1.358F, 0.394F)
          reflectiveCurveToRelative(-0.09F, 1.092F, 0.394F, 1.358F)
          lineToRelative(0.076F, 0.042F)
          curveToRelative(3.012F, 1.657F, 6.76F, -0.15F, 7.338F, -3.54F)
          lineToRelative(0.747F, -4.378F)
          horizontalLineTo(16.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.23F)
          lineToRelative(0.672F, -3.93F)
          close()        
      }
    }
    return _fStop24!!
  }

private var _fStop24: ImageVector? = null
