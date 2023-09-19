package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Dismiss20: ImageVector
  get() {
    if (_dismiss20 != null) {
      return _dismiss20!!
    }
    _dismiss20 = fluentIcon(name = "Regular.Dismiss20", 20f) {
      materialPath {
          moveTo(4.089F, 4.216F)
          lineToRelative(0.057F, -0.07F)
          curveTo(4.32F, 3.973F, 4.59F, 3.954F, 4.784F, 4.09F)
          lineToRelative(0.07F, 0.057F)
          lineTo(10.0F, 9.293F)
          lineToRelative(5.146F, -5.146F)
          curveToRelative(0.174F, -0.174F, 0.443F, -0.193F, 0.638F, -0.058F)
          lineToRelative(0.07F, 0.057F)
          curveToRelative(0.173F, 0.174F, 0.192F, 0.443F, 0.057F, 0.638F)
          lineToRelative(-0.057F, 0.07F)
          lineTo(10.707F, 10.0F)
          lineToRelative(5.147F, 5.146F)
          curveToRelative(0.173F, 0.174F, 0.192F, 0.443F, 0.057F, 0.638F)
          lineToRelative(-0.057F, 0.07F)
          curveToRelative(-0.174F, 0.173F, -0.443F, 0.192F, -0.638F, 0.057F)
          lineToRelative(-0.07F, -0.057F)
          lineTo(10.0F, 10.707F)
          lineToRelative(-5.146F, 5.147F)
          curveTo(4.68F, 16.027F, 4.41F, 16.046F, 4.216F, 15.91F)
          lineToRelative(-0.07F, -0.057F)
          curveTo(3.973F, 15.68F, 3.954F, 15.41F, 4.09F, 15.216F)
          lineToRelative(0.057F, -0.07F)
          lineTo(9.293F, 10.0F)
          lineTo(4.147F, 4.854F)
          curveTo(3.972F, 4.68F, 3.953F, 4.41F, 4.088F, 4.216F)
          lineToRelative(0.057F, -0.07F)
          lineToRelative(-0.057F, 0.07F)
          close()        
      }
    }
    return _dismiss20!!
  }

private var _dismiss20: ImageVector? = null
