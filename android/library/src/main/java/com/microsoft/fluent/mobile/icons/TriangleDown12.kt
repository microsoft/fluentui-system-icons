package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleDown12: ImageVector
  get() {
    if (_triangleDown12 != null) {
      return _triangleDown12!!
    }
    _triangleDown12 = fluentIcon(name = "Filled.TriangleDown12", 12f) {
      materialPath {
          moveTo(5.214F, 10.541F)
          curveToRelative(0.349F, 0.612F, 1.223F, 0.612F, 1.572F, 0.0F)
          lineToRelative(4.092F, -7.169F)
          curveTo(11.226F, 2.762F, 10.789F, 2.0F, 10.09F, 2.0F)
          horizontalLineTo(1.908F)
          curveTo(1.212F, 2.0F, 0.775F, 2.762F, 1.123F, 3.372F)
          lineToRelative(4.092F, 7.17F)
          close()        
      }
    }
    return _triangleDown12!!
  }

private var _triangleDown12: ImageVector? = null
