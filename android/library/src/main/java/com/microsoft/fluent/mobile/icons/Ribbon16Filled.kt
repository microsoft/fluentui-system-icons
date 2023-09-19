package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Ribbon16: ImageVector
  get() {
    if (_ribbon16 != null) {
      return _ribbon16!!
    }
    _ribbon16 = fluentIcon(name = "Filled.Ribbon16", 16f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          curveTo(5.239F, 1.0F, 3.0F, 3.239F, 3.0F, 6.0F)
          curveToRelative(0.0F, 1.636F, 0.786F, 3.088F, 2.0F, 4.0F)
          curveToRelative(0.067F, 0.05F, 0.135F, 0.1F, 0.205F, 0.146F)
          curveTo(6.003F, 10.686F, 6.965F, 11.0F, 8.0F, 11.0F)
          curveToRelative(1.126F, 0.0F, 2.164F, -0.372F, 3.0F, -1.0F)
          curveToRelative(1.214F, -0.912F, 2.0F, -2.364F, 2.0F, -4.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(5.0F, 14.5F)
          verticalLineToRelative(-3.303F)
          curveTo(5.883F, 11.707F, 6.907F, 12.0F, 8.0F, 12.0F)
          reflectiveCurveToRelative(2.117F, -0.292F, 3.0F, -0.803F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.18F, -0.097F, 0.346F, -0.254F, 0.435F)
          curveToRelative(-0.156F, 0.089F, -0.349F, 0.086F, -0.503F, -0.006F)
          lineTo(8.0F, 13.583F)
          lineTo(5.757F, 14.93F)
          curveToRelative(-0.154F, 0.092F, -0.347F, 0.095F, -0.503F, 0.006F)
          curveTo(5.097F, 14.846F, 5.0F, 14.68F, 5.0F, 14.5F)
          close()        
      }
    }
    return _ribbon16!!
  }

private var _ribbon16: ImageVector? = null
