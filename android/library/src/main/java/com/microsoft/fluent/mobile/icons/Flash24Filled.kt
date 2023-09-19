package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flash24: ImageVector
  get() {
    if (_flash24 != null) {
      return _flash24!!
    }
    _flash24 = fluentIcon(name = "Filled.Flash24", 24f) {
      materialPath {
          moveTo(7.425F, 2.83F)
          curveTo(7.602F, 2.332F, 8.074F, 2.0F, 8.603F, 2.0F)
          horizontalLineToRelative(6.453F)
          curveToRelative(0.853F, 0.0F, 1.456F, 0.836F, 1.186F, 1.645F)
          lineTo(14.79F, 8.0F)
          horizontalLineToRelative(3.96F)
          curveToRelative(1.103F, 0.0F, 1.665F, 1.327F, 0.897F, 2.12F)
          lineTo(8.586F, 21.536F)
          curveToRelative(-1.054F, 1.088F, -2.872F, 0.106F, -2.541F, -1.372F)
          lineToRelative(1.27F, -5.668F)
          lineToRelative(-1.57F, -0.006F)
          curveToRelative(-1.206F, -0.004F, -2.046F, -1.2F, -1.641F, -2.337F)
          lineTo(7.425F, 2.83F)
          close()        
      }
    }
    return _flash24!!
  }

private var _flash24: ImageVector? = null
