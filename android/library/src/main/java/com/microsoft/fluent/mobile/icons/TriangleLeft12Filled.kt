package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleLeft12: ImageVector
  get() {
    if (_triangleLeft12 != null) {
      return _triangleLeft12!!
    }
    _triangleLeft12 = fluentIcon(name = "Filled.TriangleLeft12", 12f) {
      materialPath {
          moveTo(1.459F, 5.214F)
          curveToRelative(-0.612F, 0.349F, -0.612F, 1.223F, 0.0F, 1.572F)
          lineToRelative(7.169F, 4.092F)
          curveTo(9.238F, 11.226F, 10.0F, 10.789F, 10.0F, 10.09F)
          verticalLineTo(1.908F)
          curveToRelative(0.0F, -0.697F, -0.762F, -1.134F, -1.372F, -0.786F)
          lineToRelative(-7.17F, 4.092F)
          close()        
      }
    }
    return _triangleLeft12!!
  }

private var _triangleLeft12: ImageVector? = null
