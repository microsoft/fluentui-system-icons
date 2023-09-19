package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Line20: ImageVector
  get() {
    if (_line20 != null) {
      return _line20!!
    }
    _line20 = fluentIcon(name = "Filled.Line20", 20f) {
      materialPath {
          moveTo(17.78F, 2.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-14.5F, 14.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(14.5F, -14.5F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _line20!!
  }

private var _line20: ImageVector? = null
