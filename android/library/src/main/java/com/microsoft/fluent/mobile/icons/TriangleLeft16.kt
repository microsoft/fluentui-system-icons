package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleLeft16: ImageVector
  get() {
    if (_triangleLeft16 != null) {
      return _triangleLeft16!!
    }
    _triangleLeft16 = fluentIcon(name = "Filled.TriangleLeft16", 16f) {
      materialPath {
          moveTo(1.777F, 9.313F)
          curveToRelative(-1.036F, -0.57F, -1.036F, -2.059F, 0.0F, -2.629F)
          lineToRelative(9.999F, -5.5F)
          curveToRelative(1.0F, -0.549F, 2.223F, 0.174F, 2.223F, 1.315F)
          verticalLineToRelative(10.999F)
          curveToRelative(0.0F, 1.14F, -1.223F, 1.864F, -2.223F, 1.314F)
          lineToRelative(-9.999F, -5.5F)
          close()        
      }
    }
    return _triangleLeft16!!
  }

private var _triangleLeft16: ImageVector? = null
