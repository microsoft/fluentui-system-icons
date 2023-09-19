package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Record32: ImageVector
  get() {
    if (_record32 != null) {
      return _record32!!
    }
    _record32 = fluentIcon(name = "Filled.Record32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveTo(8.268F, 2.0F, 2.0F, 8.268F, 2.0F, 16.0F)
          reflectiveCurveToRelative(6.268F, 14.0F, 14.0F, 14.0F)
          reflectiveCurveToRelative(14.0F, -6.268F, 14.0F, -14.0F)
          reflectiveCurveTo(23.732F, 2.0F, 16.0F, 2.0F)
          close()
          moveToRelative(0.0F, 23.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, -4.03F, -9.0F, -9.0F)
          reflectiveCurveToRelative(4.03F, -9.0F, 9.0F, -9.0F)
          reflectiveCurveToRelative(9.0F, 4.03F, 9.0F, 9.0F)
          reflectiveCurveToRelative(-4.03F, 9.0F, -9.0F, 9.0F)
          close()        
      }
    }
    return _record32!!
  }

private var _record32: ImageVector? = null
