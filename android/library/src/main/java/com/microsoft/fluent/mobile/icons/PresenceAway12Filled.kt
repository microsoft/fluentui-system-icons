package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAway12: ImageVector
  get() {
    if (_presenceAway12 != null) {
      return _presenceAway12!!
    }
    _presenceAway12 = fluentIcon(name = "Filled.PresenceAway12", 12f) {
      materialPath {
          moveTo(6.0F, 12.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveTo(9.314F, 0.0F, 6.0F, 0.0F)
          reflectiveCurveTo(0.0F, 2.686F, 0.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          close()
          moveToRelative(0.5F, -8.75F)
          verticalLineToRelative(2.405F)
          lineToRelative(1.488F, 1.276F)
          curveTo(8.303F, 7.2F, 8.34F, 7.674F, 8.07F, 7.988F)
          curveTo(7.8F, 8.303F, 7.326F, 8.34F, 7.012F, 8.07F)
          lineToRelative(-1.75F, -1.5F)
          curveTo(5.096F, 6.427F, 5.0F, 6.22F, 5.0F, 6.0F)
          verticalLineTo(3.25F)
          curveTo(5.0F, 2.836F, 5.336F, 2.5F, 5.75F, 2.5F)
          reflectiveCurveTo(6.5F, 2.836F, 6.5F, 3.25F)
          close()        
      }
    }
    return _presenceAway12!!
  }

private var _presenceAway12: ImageVector? = null
