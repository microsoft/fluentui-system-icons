package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleLeft32: ImageVector
  get() {
    if (_triangleLeft32 != null) {
      return _triangleLeft32!!
    }
    _triangleLeft32 = fluentIcon(name = "Filled.TriangleLeft32", 32f) {
      materialPath {
          moveTo(4.682F, 13.15F)
          curveToRelative(-2.242F, 1.236F, -2.243F, 4.457F, -0.001F, 5.693F)
          lineToRelative(19.498F, 10.75F)
          curveTo(26.345F, 30.787F, 29.0F, 29.22F, 29.0F, 26.747F)
          verticalLineTo(5.255F)
          curveToRelative(0.0F, -2.473F, -2.653F, -4.04F, -4.819F, -2.847F)
          lineTo(4.682F, 13.15F)
          close()        
      }
    }
    return _triangleLeft32!!
  }

private var _triangleLeft32: ImageVector? = null
