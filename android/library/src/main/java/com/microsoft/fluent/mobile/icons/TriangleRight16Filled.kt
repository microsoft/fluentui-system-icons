package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleRight16: ImageVector
  get() {
    if (_triangleRight16 != null) {
      return _triangleRight16!!
    }
    _triangleRight16 = fluentIcon(name = "Filled.TriangleRight16", 16f) {
      materialPath {
          moveTo(14.222F, 6.687F)
          curveToRelative(1.036F, 0.57F, 1.036F, 2.059F, 0.0F, 2.629F)
          lineToRelative(-10.0F, 5.499F)
          curveTo(3.224F, 15.365F, 2.0F, 14.64F, 2.0F, 13.5F)
          verticalLineTo(2.502F)
          curveToRelative(0.0F, -1.14F, 1.223F, -1.864F, 2.223F, -1.314F)
          lineToRelative(9.999F, 5.499F)
          close()        
      }
    }
    return _triangleRight16!!
  }

private var _triangleRight16: ImageVector? = null
