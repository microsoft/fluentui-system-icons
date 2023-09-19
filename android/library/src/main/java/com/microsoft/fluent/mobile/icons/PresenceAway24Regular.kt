package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAway24: ImageVector
  get() {
    if (_presenceAway24 != null) {
      return _presenceAway24!!
    }
    _presenceAway24 = fluentIcon(name = "Regular.PresenceAway24", 24f) {
      materialPath {
          moveTo(13.0F, 11.31F)
          verticalLineTo(6.5F)
          curveTo(13.0F, 5.672F, 12.328F, 5.0F, 11.5F, 5.0F)
          reflectiveCurveTo(10.0F, 5.672F, 10.0F, 6.5F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, 0.438F, 0.191F, 0.854F, 0.524F, 1.139F)
          lineToRelative(3.5F, 3.0F)
          curveToRelative(0.629F, 0.539F, 1.576F, 0.466F, 2.115F, -0.163F)
          curveToRelative(0.539F, -0.629F, 0.466F, -1.576F, -0.163F, -2.115F)
          lineTo(13.0F, 11.311F)
          close()
          moveTo(0.0F, 12.0F)
          curveTo(0.0F, 5.373F, 5.373F, 0.0F, 12.0F, 0.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(0.0F, 18.627F, 0.0F, 12.0F)
          close()
          moveToRelative(12.0F, -9.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          reflectiveCurveToRelative(4.03F, 9.0F, 9.0F, 9.0F)
          reflectiveCurveToRelative(9.0F, -4.03F, 9.0F, -9.0F)
          reflectiveCurveToRelative(-4.03F, -9.0F, -9.0F, -9.0F)
          close()        
      }
    }
    return _presenceAway24!!
  }

private var _presenceAway24: ImageVector? = null
