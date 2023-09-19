package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HourglassOneQuarter16: ImageVector
  get() {
    if (_hourglassOneQuarter16 != null) {
      return _hourglassOneQuarter16!!
    }
    _hourglassOneQuarter16 = fluentIcon(name = "Filled.HourglassOneQuarter16", 16f) {
      materialPath {
          moveTo(6.113F, 11.0F)
          lineToRelative(-0.095F, 0.08F)
          curveToRelative(-0.296F, 0.257F, -0.518F, 0.496F, -0.683F, 0.806F)
          curveToRelative(-0.13F, 0.247F, -0.256F, 0.595F, -0.31F, 1.114F)
          horizontalLineToRelative(5.946F)
          curveToRelative(-0.054F, -0.52F, -0.179F, -0.868F, -0.31F, -1.114F)
          curveToRelative(-0.164F, -0.31F, -0.386F, -0.55F, -0.681F, -0.806F)
          lineTo(9.885F, 11.0F)
          horizontalLineTo(6.113F)
          close()        
      }
    }
    return _hourglassOneQuarter16!!
  }

private var _hourglassOneQuarter16: ImageVector? = null
