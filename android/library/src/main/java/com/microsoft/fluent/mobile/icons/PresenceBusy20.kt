package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceBusy20: ImageVector
  get() {
    if (_presenceBusy20 != null) {
      return _presenceBusy20!!
    }
    _presenceBusy20 = fluentIcon(name = "Filled.PresenceBusy20", 20f) {
      materialPath {
          moveTo(20.0F, 10.0F)
          curveToRelative(0.0F, 5.523F, -4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(0.0F, 15.523F, 0.0F, 10.0F)
          reflectiveCurveTo(4.477F, 0.0F, 10.0F, 0.0F)
          reflectiveCurveToRelative(10.0F, 4.477F, 10.0F, 10.0F)
          close()        
      }
    }
    return _presenceBusy20!!
  }

private var _presenceBusy20: ImageVector? = null
