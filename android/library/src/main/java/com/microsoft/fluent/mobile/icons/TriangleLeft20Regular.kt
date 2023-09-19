package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleLeft20: ImageVector
  get() {
    if (_triangleLeft20 != null) {
      return _triangleLeft20!!
    }
    _triangleLeft20 = fluentIcon(name = "Regular.TriangleLeft20", 20f) {
      materialPath {
          moveTo(2.786F, 11.318F)
          curveToRelative(-1.048F, -0.567F, -1.048F, -2.07F, 0.0F, -2.638F)
          lineToRelative(11.998F, -6.5F)
          curveTo(15.784F, 1.64F, 17.0F, 2.364F, 17.0F, 3.5F)
          verticalLineToRelative(12.999F)
          curveToRelative(0.0F, 1.136F, -1.215F, 1.86F, -2.215F, 1.319F)
          lineToRelative(-11.998F, -6.5F)
          close()
          moveTo(3.262F, 9.56F)
          curveToRelative(-0.35F, 0.189F, -0.35F, 0.69F, 0.0F, 0.879F)
          lineToRelative(11.998F, 6.5F)
          curveToRelative(0.334F, 0.18F, 0.739F, -0.061F, 0.739F, -0.44F)
          verticalLineToRelative(-13.0F)
          curveToRelative(0.0F, -0.378F, -0.405F, -0.62F, -0.739F, -0.439F)
          lineTo(3.262F, 9.56F)
          close()        
      }
    }
    return _triangleLeft20!!
  }

private var _triangleLeft20: ImageVector? = null
