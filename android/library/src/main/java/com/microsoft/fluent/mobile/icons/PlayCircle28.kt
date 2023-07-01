package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PlayCircle28: ImageVector
  get() {
    if (_playCircle28 != null) {
      return _playCircle28!!
    }
    _playCircle28 = fluentIcon(name = "Regular.PlayCircle28", 28f) {
      materialPath {
          moveTo(12.766F, 9.278F)
          curveToRelative(-1.0F, -0.594F, -2.266F, 0.127F, -2.266F, 1.29F)
          verticalLineToRelative(6.864F)
          curveToRelative(0.0F, 1.163F, 1.266F, 1.884F, 2.266F, 1.29F)
          lineToRelative(6.505F, -3.862F)
          curveToRelative(0.652F, -0.388F, 0.652F, -1.332F, 0.0F, -1.72F)
          lineToRelative(-6.505F, -3.862F)
          close()
          moveTo(2.0F, 14.0F)
          curveTo(2.0F, 7.373F, 7.373F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(2.0F, 20.627F, 2.0F, 14.0F)
          close()
          moveTo(14.0F, 3.5F)
          curveTo(8.201F, 3.5F, 3.5F, 8.201F, 3.5F, 14.0F)
          reflectiveCurveTo(8.201F, 24.5F, 14.0F, 24.5F)
          reflectiveCurveTo(24.5F, 19.799F, 24.5F, 14.0F)
          reflectiveCurveTo(19.799F, 3.5F, 14.0F, 3.5F)
          close()        
      }
    }
    return _playCircle28!!
  }

private var _playCircle28: ImageVector? = null
