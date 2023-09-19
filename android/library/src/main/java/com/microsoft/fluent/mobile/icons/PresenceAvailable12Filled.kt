package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAvailable12: ImageVector
  get() {
    if (_presenceAvailable12 != null) {
      return _presenceAvailable12!!
    }
    _presenceAvailable12 = fluentIcon(name = "Filled.PresenceAvailable12", 12f) {
      materialPath {
          moveTo(6.0F, 12.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveTo(9.314F, 0.0F, 6.0F, 0.0F)
          reflectiveCurveTo(0.0F, 2.686F, 0.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          close()
          moveToRelative(2.53F, -6.72F)
          lineTo(5.78F, 8.03F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-1.0F, -1.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(0.47F, 0.47F)
          lineToRelative(2.22F, -2.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _presenceAvailable12!!
  }

private var _presenceAvailable12: ImageVector? = null
