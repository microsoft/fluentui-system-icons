package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceBusy12: ImageVector
  get() {
    if (_presenceBusy12 != null) {
      return _presenceBusy12!!
    }
    _presenceBusy12 = fluentIcon(name = "Filled.PresenceBusy12", 12f) {
      materialPath {
          moveTo(12.0F, 6.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveTo(0.0F, 9.314F, 0.0F, 6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()        
      }
    }
    return _presenceBusy12!!
  }

private var _presenceBusy12: ImageVector? = null
