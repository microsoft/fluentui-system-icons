package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Circle32: ImageVector
  get() {
    if (_circle32 != null) {
      return _circle32!!
    }
    _circle32 = fluentIcon(name = "Regular.Circle32", 32f) {
      materialPath {
          moveTo(16.0F, 4.0F)
          curveTo(9.373F, 4.0F, 4.0F, 9.373F, 4.0F, 16.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(22.627F, 4.0F, 16.0F, 4.0F)
          close()
          moveTo(2.0F, 16.0F)
          curveTo(2.0F, 8.268F, 8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          reflectiveCurveTo(2.0F, 23.732F, 2.0F, 16.0F)
          close()        
      }
    }
    return _circle32!!
  }

private var _circle32: ImageVector? = null
