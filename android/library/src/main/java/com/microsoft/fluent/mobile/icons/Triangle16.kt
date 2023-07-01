package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Triangle16: ImageVector
  get() {
    if (_triangle16 != null) {
      return _triangle16!!
    }
    _triangle16 = fluentIcon(name = "Filled.Triangle16", 16f) {
      materialPath {
          moveTo(6.687F, 1.777F)
          curveToRelative(0.57F, -1.036F, 2.059F, -1.036F, 2.629F, 0.0F)
          lineToRelative(5.499F, 9.999F)
          curveToRelative(0.55F, 1.0F, -0.174F, 2.223F, -1.314F, 2.223F)
          horizontalLineTo(2.502F)
          curveToRelative(-1.14F, 0.0F, -1.864F, -1.223F, -1.314F, -2.223F)
          lineToRelative(5.499F, -9.999F)
          close()        
      }
    }
    return _triangle16!!
  }

private var _triangle16: ImageVector? = null
