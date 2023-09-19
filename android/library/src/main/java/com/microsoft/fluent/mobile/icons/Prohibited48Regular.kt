package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Prohibited48: ImageVector
  get() {
    if (_prohibited48 != null) {
      return _prohibited48!!
    }
    _prohibited48 = fluentIcon(name = "Regular.Prohibited48", 48f) {
      materialPath {
          moveTo(24.0F, 5.0F)
          curveToRelative(10.493F, 0.0F, 19.0F, 8.507F, 19.0F, 19.0F)
          reflectiveCurveToRelative(-8.507F, 19.0F, -19.0F, 19.0F)
          reflectiveCurveTo(5.0F, 34.493F, 5.0F, 24.0F)
          reflectiveCurveTo(13.507F, 5.0F, 24.0F, 5.0F)
          close()
          moveToRelative(12.518F, 8.25F)
          lineTo(13.25F, 36.518F)
          curveTo(16.138F, 39.0F, 19.894F, 40.5F, 24.0F, 40.5F)
          curveToRelative(9.113F, 0.0F, 16.5F, -7.387F, 16.5F, -16.5F)
          curveToRelative(0.0F, -4.106F, -1.5F, -7.862F, -3.982F, -10.75F)
          close()
          moveTo(24.0F, 7.5F)
          curveTo(14.887F, 7.5F, 7.5F, 14.887F, 7.5F, 24.0F)
          curveToRelative(0.0F, 4.106F, 1.5F, 7.862F, 3.982F, 10.75F)
          lineTo(34.75F, 11.482F)
          curveTo(31.862F, 9.0F, 28.106F, 7.5F, 24.0F, 7.5F)
          close()        
      }
    }
    return _prohibited48!!
  }

private var _prohibited48: ImageVector? = null
