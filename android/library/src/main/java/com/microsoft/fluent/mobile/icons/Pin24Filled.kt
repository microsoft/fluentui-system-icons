package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pin24: ImageVector
  get() {
    if (_pin24 != null) {
      return _pin24!!
    }
    _pin24 = fluentIcon(name = "Filled.Pin24", 24f) {
      materialPath {
          moveTo(21.068F, 7.758F)
          lineToRelative(-4.826F, -4.826F)
          curveToRelative(-1.327F, -1.327F, -3.564F, -0.964F, -4.404F, 0.715F)
          lineToRelative(-2.435F, 4.87F)
          curveToRelative(-0.088F, 0.176F, -0.24F, 0.31F, -0.426F, 0.374F)
          lineToRelative(-4.166F, 1.44F)
          curveToRelative(-0.873F, 0.3F, -1.129F, 1.412F, -0.476F, 2.065F)
          lineTo(7.439F, 15.5F)
          lineTo(3.0F, 19.94F)
          verticalLineTo(21.0F)
          horizontalLineToRelative(1.06F)
          lineToRelative(4.44F, -4.44F)
          lineToRelative(3.104F, 3.105F)
          curveToRelative(0.653F, 0.653F, 1.764F, 0.397F, 2.066F, -0.476F)
          lineToRelative(1.44F, -4.166F)
          curveToRelative(0.063F, -0.185F, 0.197F, -0.338F, 0.373F, -0.426F)
          lineToRelative(4.87F, -2.435F)
          curveToRelative(1.68F, -0.84F, 2.042F, -3.077F, 0.715F, -4.404F)
          close()        
      }
    }
    return _pin24!!
  }

private var _pin24: ImageVector? = null
