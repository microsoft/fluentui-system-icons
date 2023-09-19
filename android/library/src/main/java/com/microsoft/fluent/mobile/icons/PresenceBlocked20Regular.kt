package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceBlocked20: ImageVector
  get() {
    if (_presenceBlocked20 != null) {
      return _presenceBlocked20!!
    }
    _presenceBlocked20 = fluentIcon(name = "Regular.PresenceBlocked20", 20f) {
      materialPath {
          moveTo(20.0F, 10.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          reflectiveCurveTo(0.0F, 4.477F, 0.0F, 10.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          close()
          moveToRelative(-2.0F, 0.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          curveToRelative(-1.849F, 0.0F, -3.551F, -0.627F, -4.906F, -1.68F)
          lineTo(16.32F, 5.094F)
          curveTo(17.373F, 6.45F, 18.0F, 8.151F, 18.0F, 10.0F)
          close()
          moveToRelative(-3.094F, -6.32F)
          lineTo(3.68F, 14.906F)
          curveTo(2.627F, 13.55F, 2.0F, 11.849F, 2.0F, 10.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          curveToRelative(1.849F, 0.0F, 3.55F, 0.627F, 4.906F, 1.68F)
          close()        
      }
    }
    return _presenceBlocked20!!
  }

private var _presenceBlocked20: ImageVector? = null
