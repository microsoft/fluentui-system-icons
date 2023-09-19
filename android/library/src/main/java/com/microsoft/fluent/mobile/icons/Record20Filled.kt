package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Record20: ImageVector
  get() {
    if (_record20 != null) {
      return _record20!!
    }
    _record20 = fluentIcon(name = "Filled.Record20", 20f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(8.0F, 4.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(12.485F, 5.5F, 10.0F, 5.5F)
          reflectiveCurveTo(5.5F, 7.515F, 5.5F, 10.0F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          close()        
      }
    }
    return _record20!!
  }

private var _record20: ImageVector? = null
