package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceBlocked10: ImageVector
  get() {
    if (_presenceBlocked10 != null) {
      return _presenceBlocked10!!
    }
    _presenceBlocked10 = fluentIcon(name = "Regular.PresenceBlocked10", 10f) {
      materialPath {
          moveTo(10.0F, 5.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveTo(0.0F, 2.239F, 0.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          close()
          moveTo(9.0F, 5.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          curveToRelative(-0.924F, 0.0F, -1.776F, -0.313F, -2.453F, -0.84F)
          lineTo(8.16F, 2.547F)
          curveTo(8.687F, 3.224F, 9.0F, 4.076F, 9.0F, 5.0F)
          close()
          moveTo(7.453F, 1.84F)
          lineTo(1.84F, 7.453F)
          curveTo(1.313F, 6.775F, 1.0F, 5.924F, 1.0F, 5.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          curveToRelative(0.924F, 0.0F, 1.776F, 0.313F, 2.453F, 0.84F)
          close()        
      }
    }
    return _presenceBlocked10!!
  }

private var _presenceBlocked10: ImageVector? = null
