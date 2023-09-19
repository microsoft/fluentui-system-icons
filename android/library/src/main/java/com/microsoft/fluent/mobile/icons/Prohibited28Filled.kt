package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Prohibited28: ImageVector
  get() {
    if (_prohibited28 != null) {
      return _prohibited28!!
    }
    _prohibited28 = fluentIcon(name = "Filled.Prohibited28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(2.0F, 20.627F, 2.0F, 14.0F)
          reflectiveCurveTo(7.373F, 2.0F, 14.0F, 2.0F)
          close()
          moveToRelative(7.543F, 6.224F)
          lineTo(8.224F, 21.544F)
          curveTo(9.824F, 22.77F, 11.827F, 23.5F, 14.0F, 23.5F)
          curveToRelative(5.247F, 0.0F, 9.5F, -4.253F, 9.5F, -9.5F)
          curveToRelative(0.0F, -2.173F, -0.73F, -4.175F, -1.957F, -5.776F)
          close()
          moveTo(14.0F, 4.5F)
          curveToRelative(-5.247F, 0.0F, -9.5F, 4.253F, -9.5F, 9.5F)
          curveToRelative(0.0F, 2.173F, 0.73F, 4.175F, 1.957F, 5.776F)
          lineToRelative(13.319F, -13.32F)
          curveTo(18.176F, 5.23F, 16.173F, 4.5F, 14.0F, 4.5F)
          close()        
      }
    }
    return _prohibited28!!
  }

private var _prohibited28: ImageVector? = null
