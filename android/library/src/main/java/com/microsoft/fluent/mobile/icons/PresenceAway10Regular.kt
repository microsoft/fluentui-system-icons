package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAway10: ImageVector
  get() {
    if (_presenceAway10 != null) {
      return _presenceAway10!!
    }
    _presenceAway10 = fluentIcon(name = "Regular.PresenceAway10", 10f) {
      materialPath {
          moveTo(5.0F, 4.793F)
          verticalLineTo(3.004F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(4.0F, 2.728F, 4.0F, 3.004F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, 0.133F, 0.053F, 0.26F, 0.146F, 0.354F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(5.0F, 4.793F)
          close()
          moveTo(10.0F, 5.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveTo(0.0F, 7.761F, 0.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          close()
          moveTo(9.0F, 5.0F)
          curveToRelative(0.0F, -2.21F, -1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveTo(1.0F, 2.79F, 1.0F, 5.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          reflectiveCurveToRelative(4.0F, -1.79F, 4.0F, -4.0F)
          close()        
      }
    }
    return _presenceAway10!!
  }

private var _presenceAway10: ImageVector? = null
