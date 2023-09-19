package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleRight32: ImageVector
  get() {
    if (_triangleRight32 != null) {
      return _triangleRight32!!
    }
    _triangleRight32 = fluentIcon(name = "Filled.TriangleRight32", 32f) {
      materialPath {
          moveTo(27.317F, 18.846F)
          curveToRelative(2.242F, -1.235F, 2.242F, -4.457F, 0.0F, -5.693F)
          lineTo(7.82F, 2.403F)
          curveTo(5.653F, 1.21F, 3.0F, 2.777F, 3.0F, 5.25F)
          verticalLineToRelative(21.492F)
          curveToRelative(0.0F, 2.473F, 2.652F, 4.04F, 4.818F, 2.846F)
          lineToRelative(19.499F, -10.742F)
          close()        
      }
    }
    return _triangleRight32!!
  }

private var _triangleRight32: ImageVector? = null
