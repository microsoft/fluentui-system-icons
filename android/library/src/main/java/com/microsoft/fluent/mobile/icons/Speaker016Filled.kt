package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Speaker016: ImageVector
  get() {
    if (_speaker016 != null) {
      return _speaker016!!
    }
    _speaker016 = fluentIcon(name = "Filled.Speaker016", 016f) {
      materialPath {
          moveTo(9.0F, 2.5F)
          curveToRelative(0.0F, -0.201F, -0.12F, -0.382F, -0.306F, -0.46F)
          curveTo(8.51F, 1.96F, 8.295F, 2.001F, 8.151F, 2.141F)
          lineToRelative(-2.927F, 2.85F)
          horizontalLineTo(3.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(2.99F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(1.723F)
          lineToRelative(2.927F, 2.875F)
          curveToRelative(0.143F, 0.14F, 0.358F, 0.182F, 0.543F, 0.104F)
          curveTo(8.88F, 13.883F, 9.0F, 13.701F, 9.0F, 13.5F)
          verticalLineToRelative(-11.0F)
          close()        
      }
    }
    return _speaker016!!
  }

private var _speaker016: ImageVector? = null
