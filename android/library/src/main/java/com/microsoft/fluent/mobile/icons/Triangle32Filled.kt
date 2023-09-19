package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Triangle32: ImageVector
  get() {
    if (_triangle32 != null) {
      return _triangle32!!
    }
    _triangle32 = fluentIcon(name = "Filled.Triangle32", 32f) {
      materialPath {
          moveTo(18.847F, 4.684F)
          curveToRelative(-1.235F, -2.242F, -4.457F, -2.243F, -5.693F, -0.001F)
          lineTo(2.404F, 24.18F)
          curveTo(1.21F, 26.346F, 2.777F, 29.0F, 5.251F, 29.0F)
          horizontalLineToRelative(21.492F)
          curveToRelative(2.473F, 0.0F, 4.04F, -2.653F, 2.846F, -4.819F)
          lineTo(18.847F, 4.684F)
          close()        
      }
    }
    return _triangle32!!
  }

private var _triangle32: ImageVector? = null
