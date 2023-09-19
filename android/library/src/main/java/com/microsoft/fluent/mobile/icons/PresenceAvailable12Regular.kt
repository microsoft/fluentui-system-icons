package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAvailable12: ImageVector
  get() {
    if (_presenceAvailable12 != null) {
      return _presenceAvailable12!!
    }
    _presenceAvailable12 = fluentIcon(name = "Regular.PresenceAvailable12", 12f) {
      materialPath {
          moveTo(6.0F, 0.0F)
          curveTo(2.686F, 0.0F, 0.0F, 2.686F, 0.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, 6.0F, 6.0F, 6.0F)
          reflectiveCurveToRelative(6.0F, -2.686F, 6.0F, -6.0F)
          reflectiveCurveToRelative(-2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveTo(1.5F, 6.0F)
          curveToRelative(0.0F, -2.485F, 2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          reflectiveCurveToRelative(-2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(1.5F, 8.485F, 1.5F, 6.0F)
          close()
          moveToRelative(7.03F, -1.78F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(5.78F, 8.03F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-1.0F, -1.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(0.47F, 0.47F)
          lineToRelative(2.22F, -2.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _presenceAvailable12!!
  }

private var _presenceAvailable12: ImageVector? = null
