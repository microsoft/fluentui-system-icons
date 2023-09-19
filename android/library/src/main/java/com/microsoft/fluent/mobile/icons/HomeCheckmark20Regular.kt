package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.HomeCheckmark20: ImageVector
  get() {
    if (_homeCheckmark20 != null) {
      return _homeCheckmark20!!
    }
    _homeCheckmark20 = fluentIcon(name = "Regular.HomeCheckmark20", 20f) {
      materialPath {
          moveTo(13.354F, 8.851F)
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
          moveToRelative(-2.351F, -6.467F)
          curveToRelative(-0.57F, -0.512F, -1.435F, -0.512F, -2.005F, 0.0F)
          lineToRelative(-5.5F, 4.943F)
          curveTo(3.18F, 7.612F, 3.0F, 8.017F, 3.0F, 8.443F)
          verticalLineTo(15.5F)
          curveTo(3.0F, 16.328F, 3.672F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(8.443F)
          curveToRelative(0.0F, -0.425F, -0.18F, -0.831F, -0.497F, -1.116F)
          lineToRelative(-5.5F, -4.943F)
          close()
          moveTo(9.665F, 3.128F)
          curveToRelative(0.19F, -0.17F, 0.478F, -0.17F, 0.668F, 0.0F)
          lineToRelative(5.5F, 4.943F)
          curveTo(15.94F, 8.166F, 16.0F, 8.301F, 16.0F, 8.443F)
          verticalLineTo(15.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(4.224F, 16.0F, 4.0F, 15.776F, 4.0F, 15.5F)
          verticalLineTo(8.443F)
          curveToRelative(0.0F, -0.141F, 0.06F, -0.277F, 0.166F, -0.372F)
          lineToRelative(5.5F, -4.943F)
          close()        
      }
    }
    return _homeCheckmark20!!
  }

private var _homeCheckmark20: ImageVector? = null
