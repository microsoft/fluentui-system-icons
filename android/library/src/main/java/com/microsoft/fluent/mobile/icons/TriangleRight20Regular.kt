package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleRight20: ImageVector
  get() {
    if (_triangleRight20 != null) {
      return _triangleRight20!!
    }
    _triangleRight20 = fluentIcon(name = "Regular.TriangleRight20", 20f) {
      materialPath {
          moveTo(17.215F, 11.318F)
          curveToRelative(1.047F, -0.567F, 1.047F, -2.07F, 0.0F, -2.638F)
          lineTo(5.216F, 2.18F)
          curveToRelative(-1.0F, -0.54F, -2.214F, 0.183F, -2.214F, 1.32F)
          verticalLineToRelative(12.999F)
          curveToRelative(0.0F, 1.136F, 1.215F, 1.86F, 2.214F, 1.319F)
          lineToRelative(11.999F, -6.5F)
          close()
          moveTo(16.739F, 9.56F)
          curveToRelative(0.349F, 0.189F, 0.349F, 0.69F, 0.0F, 0.879F)
          lineToRelative(-11.999F, 6.5F)
          curveToRelative(-0.333F, 0.18F, -0.738F, -0.061F, -0.738F, -0.44F)
          verticalLineToRelative(-13.0F)
          curveToRelative(0.0F, -0.378F, 0.405F, -0.62F, 0.738F, -0.439F)
          lineToRelative(11.999F, 6.5F)
          close()        
      }
    }
    return _triangleRight20!!
  }

private var _triangleRight20: ImageVector? = null
