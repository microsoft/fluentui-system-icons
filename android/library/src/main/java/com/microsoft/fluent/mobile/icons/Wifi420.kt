package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wifi420: ImageVector
  get() {
    if (_wifi420 != null) {
      return _wifi420!!
    }
    _wifi420 = fluentIcon(name = "Filled.Wifi420", 420f) {
      materialPath {
          moveTo(10.921F, 13.881F)
          curveToRelative(0.486F, 0.486F, 0.486F, 1.272F, 0.0F, 1.757F)
          curveToRelative(-0.485F, 0.486F, -1.271F, 0.486F, -1.756F, 0.0F)
          curveToRelative(-0.485F, -0.485F, -0.485F, -1.271F, 0.0F, -1.757F)
          curveToRelative(0.485F, -0.485F, 1.271F, -0.485F, 1.757F, 0.0F)
          close()        
      }
    }
    return _wifi420!!
  }

private var _wifi420: ImageVector? = null
