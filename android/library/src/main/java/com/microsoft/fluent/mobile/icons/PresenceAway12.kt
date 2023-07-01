package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAway12: ImageVector
  get() {
    if (_presenceAway12 != null) {
      return _presenceAway12!!
    }
    _presenceAway12 = fluentIcon(name = "Regular.PresenceAway12", 12f) {
      materialPath {
          moveTo(6.5F, 5.655F)
          verticalLineTo(3.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(5.0F, 2.836F, 5.0F, 3.25F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, 0.219F, 0.096F, 0.427F, 0.262F, 0.57F)
          lineToRelative(1.75F, 1.5F)
          curveTo(7.326F, 8.338F, 7.8F, 8.302F, 8.069F, 7.987F)
          curveTo(8.34F, 7.674F, 8.303F, 7.2F, 7.99F, 6.931F)
          lineTo(6.5F, 5.655F)
          close()
          moveTo(12.0F, 6.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveTo(0.0F, 9.314F, 0.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveToRelative(-1.5F, 0.0F)
          curveToRelative(0.0F, -2.485F, -2.015F, -4.5F, -4.5F, -4.5F)
          reflectiveCurveTo(1.5F, 3.515F, 1.5F, 6.0F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          close()        
      }
    }
    return _presenceAway12!!
  }

private var _presenceAway12: ImageVector? = null
