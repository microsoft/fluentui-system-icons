package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AirplaneLanding16: ImageVector
  get() {
    if (_airplaneLanding16 != null) {
      return _airplaneLanding16!!
    }
    _airplaneLanding16 = fluentIcon(name = "Filled.AirplaneLanding16", 16f) {
      materialPath {
          moveTo(8.848F, 2.845F)
          lineToRelative(1.07F, 2.194F)
          lineToRelative(-1.032F, 0.01F)
          lineTo(6.0F, 3.998F)
          verticalLineTo(3.494F)
          curveTo(6.007F, 1.91F, 8.153F, 1.417F, 8.848F, 2.845F)
          close()
          moveToRelative(3.123F, 3.174F)
          curveTo(13.64F, 6.003F, 15.0F, 7.351F, 15.0F, 9.02F)
          verticalLineToRelative(0.482F)
          curveToRelative(0.0F, 1.028F, -1.012F, 1.752F, -1.985F, 1.42F)
          lineToRelative(-2.242F, -0.767F)
          lineToRelative(-5.236F, 1.763F)
          curveTo(4.0F, 12.435F, 2.85F, 10.487F, 4.044F, 9.39F)
          lineToRelative(1.22F, -1.119F)
          lineTo(2.02F, 7.163F)
          curveTo(1.072F, 6.84F, 0.703F, 5.69F, 1.287F, 4.873F)
          lineToRelative(1.719F, -2.41F)
          curveTo(3.626F, 1.593F, 5.0F, 2.032F, 5.0F, 3.103F)
          verticalLineToRelative(1.596F)
          lineToRelative(3.544F, 1.29F)
          curveToRelative(0.112F, 0.04F, 0.231F, 0.06F, 0.351F, 0.06F)
          lineToRelative(3.077F, -0.03F)
          close()
          moveTo(1.0F, 14.5F)
          curveTo(1.0F, 14.224F, 1.224F, 14.0F, 1.5F, 14.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.776F, 15.0F, 14.5F, 15.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(1.224F, 15.0F, 1.0F, 14.776F, 1.0F, 14.5F)
          close()        
      }
    }
    return _airplaneLanding16!!
  }

private var _airplaneLanding16: ImageVector? = null
