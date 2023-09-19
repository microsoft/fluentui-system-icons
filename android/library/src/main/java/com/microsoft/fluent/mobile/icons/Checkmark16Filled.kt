package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Checkmark16: ImageVector
  get() {
    if (_checkmark16 != null) {
      return _checkmark16!!
    }
    _checkmark16 = fluentIcon(name = "Filled.Checkmark16", 16f) {
      materialPath {
          moveTo(14.046F, 3.486F)
          curveToRelative(0.284F, 0.301F, 0.27F, 0.776F, -0.032F, 1.06F)
          lineToRelative(-7.93F, 7.474F)
          curveToRelative(-0.336F, 0.317F, -0.864F, 0.307F, -1.188F, -0.022F)
          lineToRelative(-2.68F, -2.72F)
          curveToRelative(-0.291F, -0.296F, -0.287F, -0.77F, 0.008F, -1.061F)
          curveToRelative(0.295F, -0.291F, 0.77F, -0.288F, 1.06F, 0.008F)
          lineToRelative(2.234F, 2.267F)
          lineToRelative(7.468F, -7.038F)
          curveToRelative(0.301F, -0.284F, 0.776F, -0.27F, 1.06F, 0.032F)
          close()        
      }
    }
    return _checkmark16!!
  }

private var _checkmark16: ImageVector? = null
