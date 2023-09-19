package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Line24: ImageVector
  get() {
    if (_line24 != null) {
      return _line24!!
    }
    _line24 = fluentIcon(name = "Regular.Line24", 24f) {
      materialPath {
          moveTo(21.784F, 2.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(3.28F, 21.784F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          lineTo(20.723F, 2.22F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _line24!!
  }

private var _line24: ImageVector? = null
