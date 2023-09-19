package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceUnknown12: ImageVector
  get() {
    if (_presenceUnknown12 != null) {
      return _presenceUnknown12!!
    }
    _presenceUnknown12 = fluentIcon(name = "Regular.PresenceUnknown12", 12f) {
      materialPath {
          moveTo(6.0F, 1.5F)
          curveTo(3.515F, 1.5F, 1.5F, 3.515F, 1.5F, 6.0F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveToRelative(4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(8.485F, 1.5F, 6.0F, 1.5F)
          close()
          moveTo(0.0F, 6.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          reflectiveCurveToRelative(-2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          close()        
      }
    }
    return _presenceUnknown12!!
  }

private var _presenceUnknown12: ImageVector? = null
