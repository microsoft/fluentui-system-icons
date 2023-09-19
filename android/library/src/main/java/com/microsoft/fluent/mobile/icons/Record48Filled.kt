package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Record48: ImageVector
  get() {
    if (_record48 != null) {
      return _record48!!
    }
    _record48 = fluentIcon(name = "Filled.Record48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveTo(12.954F, 4.0F, 4.0F, 12.954F, 4.0F, 24.0F)
          reflectiveCurveToRelative(8.954F, 20.0F, 20.0F, 20.0F)
          reflectiveCurveToRelative(20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(0.0F, 33.0F)
          curveToRelative(-7.18F, 0.0F, -13.0F, -5.82F, -13.0F, -13.0F)
          reflectiveCurveToRelative(5.82F, -13.0F, 13.0F, -13.0F)
          reflectiveCurveToRelative(13.0F, 5.82F, 13.0F, 13.0F)
          reflectiveCurveToRelative(-5.82F, 13.0F, -13.0F, 13.0F)
          close()        
      }
    }
    return _record48!!
  }

private var _record48: ImageVector? = null
