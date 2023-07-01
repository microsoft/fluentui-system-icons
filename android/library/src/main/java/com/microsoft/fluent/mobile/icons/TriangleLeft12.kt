package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleLeft12: ImageVector
  get() {
    if (_triangleLeft12 != null) {
      return _triangleLeft12!!
    }
    _triangleLeft12 = fluentIcon(name = "Regular.TriangleLeft12", 12f) {
      materialPath {
          moveTo(1.459F, 6.786F)
          curveToRelative(-0.612F, -0.349F, -0.612F, -1.223F, 0.0F, -1.572F)
          lineToRelative(7.169F, -4.092F)
          curveTo(9.238F, 0.774F, 10.0F, 1.211F, 10.0F, 1.91F)
          verticalLineToRelative(8.182F)
          curveToRelative(0.0F, 0.698F, -0.762F, 1.135F, -1.372F, 0.787F)
          lineToRelative(-7.17F, -4.092F)
          close()
          moveTo(2.119F, 6.0F)
          lineToRelative(6.864F, 3.917F)
          verticalLineTo(2.083F)
          lineTo(2.119F, 6.0F)
          close()        
      }
    }
    return _triangleLeft12!!
  }

private var _triangleLeft12: ImageVector? = null
