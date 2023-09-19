package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Dismiss16: ImageVector
  get() {
    if (_dismiss16 != null) {
      return _dismiss16!!
    }
    _dismiss16 = fluentIcon(name = "Regular.Dismiss16", 16f) {
      materialPath {
          moveTo(2.589F, 2.716F)
          lineToRelative(0.058F, -0.07F)
          curveTo(2.82F, 2.474F, 3.089F, 2.454F, 3.284F, 2.59F)
          lineToRelative(0.07F, 0.058F)
          lineTo(8.0F, 7.293F)
          lineToRelative(4.646F, -4.647F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(8.707F, 8.0F)
          lineToRelative(4.647F, 4.646F)
          curveToRelative(0.173F, 0.174F, 0.192F, 0.443F, 0.057F, 0.638F)
          lineToRelative(-0.057F, 0.07F)
          curveToRelative(-0.174F, 0.173F, -0.443F, 0.192F, -0.638F, 0.057F)
          lineToRelative(-0.07F, -0.057F)
          lineTo(8.0F, 8.707F)
          lineToRelative(-4.646F, 4.647F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(7.293F, 8.0F)
          lineTo(2.646F, 3.354F)
          curveTo(2.473F, 3.18F, 2.454F, 2.91F, 2.59F, 2.716F)
          lineToRelative(0.058F, -0.07F)
          lineToRelative(-0.058F, 0.07F)
          close()        
      }
    }
    return _dismiss16!!
  }

private var _dismiss16: ImageVector? = null
