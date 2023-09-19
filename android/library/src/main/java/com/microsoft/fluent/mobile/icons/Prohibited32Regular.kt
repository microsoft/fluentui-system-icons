package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Prohibited32: ImageVector
  get() {
    if (_prohibited32 != null) {
      return _prohibited32!!
    }
    _prohibited32 = fluentIcon(name = "Regular.Prohibited32", 32f) {
      materialPath {
          moveTo(6.837F, 23.749F)
          curveTo(5.067F, 21.659F, 4.0F, 18.954F, 4.0F, 16.0F)
          curveTo(4.0F, 9.373F, 9.373F, 4.0F, 16.0F, 4.0F)
          curveToRelative(2.954F, 0.0F, 5.658F, 1.067F, 7.749F, 2.837F)
          lineTo(6.837F, 23.749F)
          close()
          moveToRelative(1.414F, 1.414F)
          lineTo(25.163F, 8.251F)
          curveTo(26.933F, 10.341F, 28.0F, 13.046F, 28.0F, 16.0F)
          curveToRelative(0.0F, 6.627F, -5.373F, 12.0F, -12.0F, 12.0F)
          curveToRelative(-2.954F, 0.0F, -5.658F, -1.067F, -7.749F, -2.837F)
          close()
          moveTo(2.0F, 16.0F)
          curveToRelative(0.0F, 7.732F, 6.268F, 14.0F, 14.0F, 14.0F)
          reflectiveCurveToRelative(14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveTo(23.732F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveTo(2.0F, 8.268F, 2.0F, 16.0F)
          close()        
      }
    }
    return _prohibited32!!
  }

private var _prohibited32: ImageVector? = null
