package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HomeCheckmark20: ImageVector
  get() {
    if (_homeCheckmark20 != null) {
      return _homeCheckmark20!!
    }
    _homeCheckmark20 = fluentIcon(name = "Filled.HomeCheckmark20", 20f) {
      materialPath {
          moveTo(8.998F, 2.384F)
          curveToRelative(0.57F, -0.512F, 1.434F, -0.512F, 2.005F, 0.0F)
          lineToRelative(5.5F, 4.943F)
          curveTo(16.819F, 7.612F, 17.0F, 8.017F, 17.0F, 8.443F)
          verticalLineTo(15.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.672F, 17.0F, 3.0F, 16.328F, 3.0F, 15.5F)
          verticalLineTo(8.443F)
          curveToRelative(0.0F, -0.425F, 0.18F, -0.831F, 0.498F, -1.116F)
          lineToRelative(5.5F, -4.943F)
          close()
          moveToRelative(4.356F, 6.467F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineTo(9.0F, 11.79F)
          lineToRelative(-1.646F, -1.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.707F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          close()        
      }
    }
    return _homeCheckmark20!!
  }

private var _homeCheckmark20: ImageVector? = null
