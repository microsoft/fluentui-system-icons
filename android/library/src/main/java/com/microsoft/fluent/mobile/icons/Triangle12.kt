package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Triangle12: ImageVector
  get() {
    if (_triangle12 != null) {
      return _triangle12!!
    }
    _triangle12 = fluentIcon(name = "Filled.Triangle12", 12f) {
      materialPath {
          moveTo(6.786F, 1.459F)
          curveToRelative(-0.349F, -0.612F, -1.223F, -0.612F, -1.572F, 0.0F)
          lineTo(1.122F, 8.628F)
          curveTo(0.774F, 9.238F, 1.211F, 10.0F, 1.91F, 10.0F)
          horizontalLineToRelative(8.18F)
          curveToRelative(0.698F, 0.0F, 1.135F, -0.762F, 0.787F, -1.372F)
          lineToRelative(-4.092F, -7.17F)
          close()        
      }
    }
    return _triangle12!!
  }

private var _triangle12: ImageVector? = null
