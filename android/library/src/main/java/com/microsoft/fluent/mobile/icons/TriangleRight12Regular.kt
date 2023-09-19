package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleRight12: ImageVector
  get() {
    if (_triangleRight12 != null) {
      return _triangleRight12!!
    }
    _triangleRight12 = fluentIcon(name = "Regular.TriangleRight12", 12f) {
      materialPath {
          moveTo(10.541F, 5.214F)
          curveToRelative(0.612F, 0.349F, 0.612F, 1.223F, 0.0F, 1.572F)
          lineToRelative(-7.169F, 4.092F)
          curveTo(2.762F, 11.226F, 2.0F, 10.789F, 2.0F, 10.09F)
          verticalLineTo(1.91F)
          curveToRelative(0.0F, -0.7F, 0.762F, -1.136F, 1.372F, -0.788F)
          lineToRelative(7.17F, 4.092F)
          close()
          moveTo(9.881F, 6.0F)
          lineTo(3.017F, 2.083F)
          verticalLineToRelative(7.834F)
          lineTo(9.881F, 6.0F)
          close()        
      }
    }
    return _triangleRight12!!
  }

private var _triangleRight12: ImageVector? = null
