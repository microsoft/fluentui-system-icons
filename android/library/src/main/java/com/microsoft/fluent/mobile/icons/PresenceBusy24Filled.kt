package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceBusy24: ImageVector
  get() {
    if (_presenceBusy24 != null) {
      return _presenceBusy24!!
    }
    _presenceBusy24 = fluentIcon(name = "Filled.PresenceBusy24", 24f) {
      materialPath {
          moveTo(24.0F, 12.0F)
          curveToRelative(0.0F, 6.627F, -5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(0.0F, 18.627F, 0.0F, 12.0F)
          reflectiveCurveTo(5.373F, 0.0F, 12.0F, 0.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          close()        
      }
    }
    return _presenceBusy24!!
  }

private var _presenceBusy24: ImageVector? = null
