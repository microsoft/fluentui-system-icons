package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceUnknown24: ImageVector
  get() {
    if (_presenceUnknown24 != null) {
      return _presenceUnknown24!!
    }
    _presenceUnknown24 = fluentIcon(name = "Regular.PresenceUnknown24", 24f) {
      materialPath {
          moveTo(12.0F, 3.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          reflectiveCurveToRelative(4.03F, 9.0F, 9.0F, 9.0F)
          reflectiveCurveToRelative(9.0F, -4.03F, 9.0F, -9.0F)
          reflectiveCurveToRelative(-4.03F, -9.0F, -9.0F, -9.0F)
          close()
          moveTo(0.0F, 12.0F)
          curveTo(0.0F, 5.373F, 5.373F, 0.0F, 12.0F, 0.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(0.0F, 18.627F, 0.0F, 12.0F)
          close()        
      }
    }
    return _presenceUnknown24!!
  }

private var _presenceUnknown24: ImageVector? = null
