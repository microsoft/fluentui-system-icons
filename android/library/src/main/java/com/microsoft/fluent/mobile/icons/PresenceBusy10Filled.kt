package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceBusy10: ImageVector
  get() {
    if (_presenceBusy10 != null) {
      return _presenceBusy10!!
    }
    _presenceBusy10 = fluentIcon(name = "Filled.PresenceBusy10", 10f) {
      materialPath {
          moveTo(10.0F, 5.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveTo(0.0F, 7.761F, 0.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          close()        
      }
    }
    return _presenceBusy10!!
  }

private var _presenceBusy10: ImageVector? = null
