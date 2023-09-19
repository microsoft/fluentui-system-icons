package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleLeft32: ImageVector
  get() {
    if (_triangleLeft32 != null) {
      return _triangleLeft32!!
    }
    _triangleLeft32 = fluentIcon(name = "Regular.TriangleLeft32", 32f) {
      materialPath {
          moveTo(4.68F, 18.843F)
          curveToRelative(-2.24F, -1.236F, -2.24F, -4.457F, 0.002F, -5.693F)
          lineTo(24.18F, 2.408F)
          curveTo(26.346F, 1.215F, 29.0F, 2.782F, 29.0F, 5.255F)
          verticalLineToRelative(21.492F)
          curveToRelative(0.0F, 2.473F, -2.654F, 4.04F, -4.82F, 2.846F)
          lineTo(4.681F, 18.843F)
          close()
          moveToRelative(0.967F, -3.94F)
          curveToRelative(-0.862F, 0.474F, -0.863F, 1.713F, 0.0F, 2.189F)
          lineToRelative(19.498F, 10.75F)
          curveToRelative(0.833F, 0.459F, 1.854F, -0.144F, 1.854F, -1.095F)
          verticalLineTo(5.255F)
          curveToRelative(0.0F, -0.952F, -1.02F, -1.554F, -1.854F, -1.095F)
          lineTo(5.647F, 14.902F)
          close()        
      }
    }
    return _triangleLeft32!!
  }

private var _triangleLeft32: ImageVector? = null
