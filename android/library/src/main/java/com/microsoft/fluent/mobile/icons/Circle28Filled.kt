package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Circle28: ImageVector
  get() {
    if (_circle28 != null) {
      return _circle28!!
    }
    _circle28 = fluentIcon(name = "Filled.Circle28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveTo(7.373F, 2.0F, 2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          close()        
      }
    }
    return _circle28!!
  }

private var _circle28: ImageVector? = null
