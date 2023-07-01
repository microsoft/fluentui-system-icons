package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ribbon16: ImageVector
  get() {
    if (_ribbon16 != null) {
      return _ribbon16!!
    }
    _ribbon16 = fluentIcon(name = "Regular.Ribbon16", 16f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          curveTo(5.239F, 1.0F, 3.0F, 3.239F, 3.0F, 6.0F)
          curveToRelative(0.0F, 1.636F, 0.786F, 3.088F, 2.0F, 4.0F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.18F, 0.097F, 0.346F, 0.254F, 0.435F)
          curveToRelative(0.156F, 0.089F, 0.349F, 0.086F, 0.503F, -0.006F)
          lineTo(8.0F, 13.583F)
          lineToRelative(2.243F, 1.346F)
          curveToRelative(0.154F, 0.092F, 0.347F, 0.095F, 0.503F, 0.006F)
          curveTo(10.903F, 14.846F, 11.0F, 14.68F, 11.0F, 14.5F)
          verticalLineTo(10.0F)
          curveToRelative(1.214F, -0.912F, 2.0F, -2.364F, 2.0F, -4.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveTo(4.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          close()
          moveToRelative(6.0F, 4.584F)
          verticalLineToRelative(3.033F)
          lineTo(8.257F, 12.57F)
          curveToRelative(-0.158F, -0.095F, -0.356F, -0.095F, -0.514F, 0.0F)
          lineTo(6.0F, 13.617F)
          verticalLineToRelative(-3.033F)
          curveTo(6.612F, 10.852F, 7.289F, 11.0F, 8.0F, 11.0F)
          curveToRelative(0.711F, 0.0F, 1.387F, -0.148F, 2.0F, -0.416F)
          close()        
      }
    }
    return _ribbon16!!
  }

private var _ribbon16: ImageVector? = null
