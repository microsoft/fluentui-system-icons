package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAway10: ImageVector
  get() {
    if (_presenceAway10 != null) {
      return _presenceAway10!!
    }
    _presenceAway10 = fluentIcon(name = "Filled.PresenceAway10", 10f) {
      materialPath {
          moveTo(5.0F, 10.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(7.761F, 0.0F, 5.0F, 0.0F)
          reflectiveCurveTo(0.0F, 2.239F, 0.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()
          moveToRelative(0.0F, -6.996F)
          verticalLineToRelative(1.79F)
          lineToRelative(1.354F, 1.353F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveTo(4.053F, 5.26F, 4.0F, 5.133F, 4.0F, 5.0F)
          verticalLineTo(3.004F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveTo(5.0F, 2.728F, 5.0F, 3.004F)
          close()        
      }
    }
    return _presenceAway10!!
  }

private var _presenceAway10: ImageVector? = null
