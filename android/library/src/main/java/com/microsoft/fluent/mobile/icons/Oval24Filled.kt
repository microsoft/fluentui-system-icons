package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Oval24: ImageVector
  get() {
    if (_oval24 != null) {
      return _oval24!!
    }
    _oval24 = fluentIcon(name = "Filled.Oval24", 24f) {
      materialPath {
          moveTo(2.0F, 12.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, -3.582F, -8.0F, -8.0F)
          close()        
      }
    }
    return _oval24!!
  }

private var _oval24: ImageVector? = null
