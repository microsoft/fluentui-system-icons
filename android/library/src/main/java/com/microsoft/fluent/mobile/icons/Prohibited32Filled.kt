package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Prohibited32: ImageVector
  get() {
    if (_prohibited32 != null) {
      return _prohibited32!!
    }
    _prohibited32 = fluentIcon(name = "Filled.Prohibited32", 32f) {
      materialPath {
          moveTo(7.032F, 23.2F)
          curveTo(5.448F, 21.23F, 4.5F, 18.725F, 4.5F, 16.0F)
          curveTo(4.5F, 9.649F, 9.649F, 4.5F, 16.0F, 4.5F)
          curveToRelative(2.725F, 0.0F, 5.23F, 0.948F, 7.2F, 2.532F)
          lineTo(7.032F, 23.2F)
          close()
          moveTo(8.8F, 24.968F)
          lineTo(24.968F, 8.8F)
          curveToRelative(1.584F, 1.97F, 2.532F, 4.475F, 2.532F, 7.2F)
          curveToRelative(0.0F, 6.351F, -5.149F, 11.5F, -11.5F, 11.5F)
          curveToRelative(-2.725F, 0.0F, -5.23F, -0.948F, -7.2F, -2.532F)
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
