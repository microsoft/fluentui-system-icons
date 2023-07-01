package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownload16: ImageVector
  get() {
    if (_arrowDownload16 != null) {
      return _arrowDownload16!!
    }
    _arrowDownload16 = fluentIcon(name = "Regular.ArrowDownload16", 16f) {
      materialPath {
          moveTo(3.5F, 13.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          curveToRelative(0.0F, 0.245F, -0.177F, 0.45F, -0.41F, 0.492F)
          lineTo(12.5F, 14.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.224F, 14.0F, 3.0F, 13.776F, 3.0F, 13.5F)
          curveToRelative(0.0F, -0.245F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(3.5F, 13.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(7.91F, 1.008F)
          lineTo(8.0F, 1.0F)
          curveToRelative(0.245F, 0.0F, 0.45F, 0.177F, 0.492F, 0.41F)
          lineTo(8.5F, 1.5F)
          verticalLineToRelative(8.792F)
          lineToRelative(2.682F, -2.681F)
          curveToRelative(0.173F, -0.174F, 0.443F, -0.193F, 0.638F, -0.058F)
          lineToRelative(0.07F, 0.058F)
          curveToRelative(0.173F, 0.174F, 0.192F, 0.443F, 0.057F, 0.638F)
          lineToRelative(-0.058F, 0.069F)
          lineToRelative(-3.535F, 3.536F)
          curveTo(8.18F, 12.027F, 7.91F, 12.046F, 7.716F, 11.91F)
          lineToRelative(-0.07F, -0.057F)
          lineToRelative(-3.535F, -3.536F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.174F, -0.174F, 0.443F, -0.193F, 0.638F, -0.058F)
          lineTo(4.818F, 7.61F)
          lineTo(7.5F, 10.292F)
          verticalLineTo(1.5F)
          curveToRelative(0.0F, -0.246F, 0.177F, -0.45F, 0.41F, -0.492F)
          lineTo(8.0F, 1.0F)
          lineTo(7.91F, 1.008F)
          close()        
      }
    }
    return _arrowDownload16!!
  }

private var _arrowDownload16: ImageVector? = null
