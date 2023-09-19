package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowNext20: ImageVector
  get() {
    if (_arrowNext20 != null) {
      return _arrowNext20!!
    }
    _arrowNext20 = fluentIcon(name = "Regular.ArrowNext20", 20f) {
      materialPath {
          moveTo(13.5F, 5.0F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(14.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          curveToRelative(-0.245F, 0.0F, -0.45F, -0.177F, -0.492F, -0.41F)
          lineTo(13.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(13.0F, 5.224F, 13.224F, 5.0F, 13.5F, 5.0F)
          close()
          moveTo(5.646F, 5.146F)
          curveTo(5.82F, 4.973F, 6.09F, 4.954F, 6.284F, 5.09F)
          lineToRelative(0.07F, 0.057F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.173F, 0.174F, 0.192F, 0.443F, 0.057F, 0.638F)
          lineToRelative(-0.057F, 0.07F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.173F, -0.174F, -0.192F, -0.443F, -0.057F, -0.638F)
          lineToRelative(0.057F, -0.07F)
          lineTo(9.793F, 10.0F)
          lineTo(5.647F, 5.854F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _arrowNext20!!
  }

private var _arrowNext20: ImageVector? = null
