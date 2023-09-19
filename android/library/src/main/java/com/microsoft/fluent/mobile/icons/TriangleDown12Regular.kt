package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleDown12: ImageVector
  get() {
    if (_triangleDown12 != null) {
      return _triangleDown12!!
    }
    _triangleDown12 = fluentIcon(name = "Regular.TriangleDown12", 12f) {
      materialPath {
          moveTo(6.786F, 10.541F)
          curveToRelative(-0.349F, 0.612F, -1.223F, 0.612F, -1.572F, 0.0F)
          lineTo(1.122F, 3.372F)
          curveTo(0.774F, 2.762F, 1.211F, 2.0F, 1.91F, 2.0F)
          horizontalLineToRelative(8.182F)
          curveToRelative(0.698F, 0.0F, 1.135F, 0.762F, 0.787F, 1.372F)
          lineToRelative(-4.092F, 7.17F)
          close()
          moveTo(6.0F, 9.881F)
          lineToRelative(3.917F, -6.864F)
          horizontalLineTo(2.083F)
          lineTo(6.0F, 9.881F)
          close()        
      }
    }
    return _triangleDown12!!
  }

private var _triangleDown12: ImageVector? = null
