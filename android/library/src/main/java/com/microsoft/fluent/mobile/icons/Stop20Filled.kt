package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Stop20: ImageVector
  get() {
    if (_stop20 != null) {
      return _stop20!!
    }
    _stop20 = fluentIcon(name = "Filled.Stop20", 20f) {
      materialPath {
          moveTo(4.5F, 3.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 16.328F, 3.672F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-11.0F)
          curveTo(17.0F, 3.672F, 16.328F, 3.0F, 15.5F, 3.0F)
          horizontalLineToRelative(-11.0F)
          close()        
      }
    }
    return _stop20!!
  }

private var _stop20: ImageVector? = null
