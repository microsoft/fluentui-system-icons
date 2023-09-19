package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleDown32: ImageVector
  get() {
    if (_triangleDown32 != null) {
      return _triangleDown32!!
    }
    _triangleDown32 = fluentIcon(name = "Regular.TriangleDown32", 32f) {
      materialPath {
          moveTo(18.843F, 27.32F)
          lineToRelative(10.75F, -19.5F)
          curveToRelative(1.194F, -2.166F, -0.373F, -4.819F, -2.846F, -4.819F)
          horizontalLineTo(5.255F)
          curveToRelative(-2.473F, 0.0F, -4.04F, 2.652F, -2.847F, 4.818F)
          lineTo(13.15F, 27.32F)
          curveToRelative(1.236F, 2.242F, 4.457F, 2.242F, 5.693F, 0.0F)
          close()
          moveToRelative(-3.94F, -0.966F)
          lineTo(4.16F, 6.855F)
          curveTo(3.7F, 6.022F, 4.303F, 5.002F, 5.255F, 5.002F)
          horizontalLineToRelative(21.492F)
          curveToRelative(0.95F, 0.0F, 1.553F, 1.02F, 1.094F, 1.854F)
          lineToRelative(-10.75F, 19.498F)
          curveToRelative(-0.475F, 0.862F, -1.714F, 0.862F, -2.189F, 0.0F)
          close()        
      }
    }
    return _triangleDown32!!
  }

private var _triangleDown32: ImageVector? = null
