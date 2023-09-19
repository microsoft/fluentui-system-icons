package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TriangleDown32: ImageVector
  get() {
    if (_triangleDown32 != null) {
      return _triangleDown32!!
    }
    _triangleDown32 = fluentIcon(name = "Filled.TriangleDown32", 32f) {
      materialPath {
          moveTo(13.15F, 27.319F)
          curveToRelative(1.236F, 2.242F, 4.457F, 2.242F, 5.693F, 0.0F)
          lineToRelative(10.75F, -19.498F)
          curveToRelative(1.194F, -2.166F, -0.373F, -4.819F, -2.846F, -4.819F)
          horizontalLineTo(5.255F)
          curveToRelative(-2.473F, 0.0F, -4.04F, 2.652F, -2.847F, 4.818F)
          lineToRelative(10.742F, 19.5F)
          close()        
      }
    }
    return _triangleDown32!!
  }

private var _triangleDown32: ImageVector? = null
