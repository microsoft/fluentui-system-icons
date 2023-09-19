package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Record48: ImageVector
  get() {
    if (_record48 != null) {
      return _record48!!
    }
    _record48 = fluentIcon(name = "Regular.Record48", 48f) {
      materialPath {
          moveTo(24.0F, 37.0F)
          curveToRelative(7.18F, 0.0F, 13.0F, -5.82F, 13.0F, -13.0F)
          reflectiveCurveToRelative(-5.82F, -13.0F, -13.0F, -13.0F)
          reflectiveCurveToRelative(-13.0F, 5.82F, -13.0F, 13.0F)
          reflectiveCurveToRelative(5.82F, 13.0F, 13.0F, 13.0F)
          close()
          moveToRelative(0.0F, -33.0F)
          curveTo(12.954F, 4.0F, 4.0F, 12.954F, 4.0F, 24.0F)
          reflectiveCurveToRelative(8.954F, 20.0F, 20.0F, 20.0F)
          reflectiveCurveToRelative(20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          close()
          moveTo(6.5F, 24.0F)
          curveToRelative(0.0F, -9.665F, 7.835F, -17.5F, 17.5F, -17.5F)
          reflectiveCurveTo(41.5F, 14.335F, 41.5F, 24.0F)
          reflectiveCurveTo(33.665F, 41.5F, 24.0F, 41.5F)
          reflectiveCurveTo(6.5F, 33.665F, 6.5F, 24.0F)
          close()        
      }
    }
    return _record48!!
  }

private var _record48: ImageVector? = null
