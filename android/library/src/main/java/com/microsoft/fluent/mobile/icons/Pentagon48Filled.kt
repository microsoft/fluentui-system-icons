package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pentagon48: ImageVector
  get() {
    if (_pentagon48 != null) {
      return _pentagon48!!
    }
    _pentagon48 = fluentIcon(name = "Filled.Pentagon48", 48f) {
      materialPath {
          moveTo(21.502F, 4.313F)
          curveToRelative(1.49F, -1.084F, 3.509F, -1.084F, 5.0F, 0.0F)
          lineToRelative(15.75F, 11.456F)
          curveToRelative(1.488F, 1.082F, 2.11F, 3.0F, 1.543F, 4.75F)
          lineToRelative(-6.018F, 18.54F)
          curveToRelative(-0.569F, 1.752F, -2.2F, 2.938F, -4.042F, 2.938F)
          horizontalLineTo(14.268F)
          curveToRelative(-1.842F, 0.0F, -3.474F, -1.187F, -4.042F, -2.938F)
          lineToRelative(-6.018F, -18.54F)
          curveToRelative(-0.568F, -1.75F, 0.054F, -3.668F, 1.542F, -4.75F)
          lineTo(21.502F, 4.313F)
          close()        
      }
    }
    return _pentagon48!!
  }

private var _pentagon48: ImageVector? = null
