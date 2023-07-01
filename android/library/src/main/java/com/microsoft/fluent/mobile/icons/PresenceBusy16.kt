package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceBusy16: ImageVector
  get() {
    if (_presenceBusy16 != null) {
      return _presenceBusy16!!
    }
    _presenceBusy16 = fluentIcon(name = "Filled.PresenceBusy16", 16f) {
      materialPath {
          moveTo(16.0F, 8.0F)
          curveToRelative(0.0F, 4.418F, -3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          reflectiveCurveToRelative(3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          close()        
      }
    }
    return _presenceBusy16!!
  }

private var _presenceBusy16: ImageVector? = null
