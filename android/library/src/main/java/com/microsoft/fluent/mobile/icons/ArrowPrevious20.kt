package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowPrevious20: ImageVector
  get() {
    if (_arrowPrevious20 != null) {
      return _arrowPrevious20!!
    }
    _arrowPrevious20 = fluentIcon(name = "Regular.ArrowPrevious20", 20f) {
      materialPath {
          moveTo(6.0F, 5.0F)
          curveTo(5.755F, 5.0F, 5.55F, 5.177F, 5.508F, 5.41F)
          lineTo(5.5F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(5.5F, 14.776F, 5.724F, 15.0F, 6.0F, 15.0F)
          curveToRelative(0.245F, 0.0F, 0.45F, -0.177F, 0.492F, -0.41F)
          lineTo(6.5F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(6.5F, 5.224F, 6.276F, 5.0F, 6.0F, 5.0F)
          close()
          moveToRelative(7.854F, 0.146F)
          curveTo(13.68F, 4.973F, 13.41F, 4.954F, 13.216F, 5.09F)
          lineToRelative(-0.07F, 0.057F)
          lineToRelative(-4.5F, 4.5F)
          curveTo(8.473F, 9.82F, 8.454F, 10.09F, 8.59F, 10.284F)
          lineToRelative(0.057F, 0.07F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.173F, -0.174F, 0.192F, -0.443F, 0.057F, -0.638F)
          lineToRelative(-0.057F, -0.07F)
          lineTo(9.707F, 10.0F)
          lineToRelative(4.147F, -4.146F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _arrowPrevious20!!
  }

private var _arrowPrevious20: ImageVector? = null
