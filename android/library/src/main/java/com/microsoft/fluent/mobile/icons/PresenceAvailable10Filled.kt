package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAvailable10: ImageVector
  get() {
    if (_presenceAvailable10 != null) {
      return _presenceAvailable10!!
    }
    _presenceAvailable10 = fluentIcon(name = "Filled.PresenceAvailable10", 10f) {
      materialPath {
          moveTo(5.0F, 10.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(7.761F, 0.0F, 5.0F, 0.0F)
          reflectiveCurveTo(0.0F, 2.239F, 0.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()
          moveToRelative(2.104F, -5.896F)
          lineToRelative(-2.25F, 2.25F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.0F, -1.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(4.5F, 5.293F)
          lineToRelative(1.896F, -1.897F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          close()        
      }
    }
    return _presenceAvailable10!!
  }

private var _presenceAvailable10: ImageVector? = null
