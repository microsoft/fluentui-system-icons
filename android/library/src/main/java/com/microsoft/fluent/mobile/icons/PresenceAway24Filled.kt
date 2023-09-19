package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAway24: ImageVector
  get() {
    if (_presenceAway24 != null) {
      return _presenceAway24!!
    }
    _presenceAway24 = fluentIcon(name = "Filled.PresenceAway24", 24f) {
      materialPath {
          moveTo(12.0F, 24.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(18.627F, 0.0F, 12.0F, 0.0F)
          reflectiveCurveTo(0.0F, 5.373F, 0.0F, 12.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          close()
          moveToRelative(1.0F, -17.5F)
          verticalLineToRelative(4.81F)
          lineToRelative(2.976F, 2.551F)
          curveToRelative(0.63F, 0.54F, 0.702F, 1.486F, 0.163F, 2.115F)
          curveToRelative(-0.54F, 0.63F, -1.486F, 0.702F, -2.115F, 0.163F)
          lineToRelative(-3.5F, -3.0F)
          curveTo(10.19F, 12.854F, 10.0F, 12.438F, 10.0F, 12.0F)
          verticalLineTo(6.5F)
          curveTo(10.0F, 5.672F, 10.672F, 5.0F, 11.5F, 5.0F)
          reflectiveCurveTo(13.0F, 5.672F, 13.0F, 6.5F)
          close()        
      }
    }
    return _presenceAway24!!
  }

private var _presenceAway24: ImageVector? = null
