package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceBlocked24: ImageVector
  get() {
    if (_presenceBlocked24 != null) {
      return _presenceBlocked24!!
    }
    _presenceBlocked24 = fluentIcon(name = "Regular.PresenceBlocked24", 24f) {
      materialPath {
          moveTo(24.0F, 12.0F)
          curveToRelative(0.0F, 6.627F, -5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(0.0F, 18.627F, 0.0F, 12.0F)
          reflectiveCurveTo(5.373F, 0.0F, 12.0F, 0.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          close()
          moveToRelative(-3.0F, 0.0F)
          curveToRelative(0.0F, -1.944F, -0.616F, -3.744F, -1.664F, -5.215F)
          lineTo(6.786F, 19.336F)
          curveTo(8.255F, 20.384F, 10.055F, 21.0F, 12.0F, 21.0F)
          curveToRelative(4.97F, 0.0F, 9.0F, -4.03F, 9.0F, -9.0F)
          close()
          moveToRelative(-3.785F, -7.336F)
          curveTo(15.743F, 3.616F, 13.944F, 3.0F, 12.0F, 3.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          curveToRelative(0.0F, 1.944F, 0.616F, 3.743F, 1.664F, 5.215F)
          lineToRelative(12.55F, -12.551F)
          close()        
      }
    }
    return _presenceBlocked24!!
  }

private var _presenceBlocked24: ImageVector? = null
