package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleRight12: ImageVector
  get() {
    if (_triangleRight12 != null) {
      return _triangleRight12!!
    }
    _triangleRight12 = fluentIcon(name = "Filled.TriangleRight12", 12f) {
      materialPath {
          moveTo(10.541F, 6.786F)
          curveToRelative(0.612F, -0.349F, 0.612F, -1.223F, 0.0F, -1.572F)
          lineTo(3.372F, 1.122F)
          curveTo(2.762F, 0.774F, 2.0F, 1.211F, 2.0F, 1.91F)
          verticalLineToRelative(8.18F)
          curveToRelative(0.0F, 0.698F, 0.762F, 1.135F, 1.372F, 0.787F)
          lineToRelative(7.17F, -4.092F)
          close()        
      }
    }
    return _triangleRight12!!
  }

private var _triangleRight12: ImageVector? = null
