package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Circle32: ImageVector
  get() {
    if (_circle32 != null) {
      return _circle32!!
    }
    _circle32 = fluentIcon(name = "Filled.Circle32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveTo(8.268F, 2.0F, 2.0F, 8.268F, 2.0F, 16.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          reflectiveCurveToRelative(14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveTo(23.732F, 2.0F, 16.0F, 2.0F)
          close()        
      }
    }
    return _circle32!!
  }

private var _circle32: ImageVector? = null
