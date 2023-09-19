package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleRight32: ImageVector
  get() {
    if (_triangleRight32 != null) {
      return _triangleRight32!!
    }
    _triangleRight32 = fluentIcon(name = "Regular.TriangleRight32", 32f) {
      materialPath {
          moveTo(27.318F, 13.153F)
          curveToRelative(2.241F, 1.236F, 2.24F, 4.458F, -0.001F, 5.693F)
          lineTo(7.818F, 29.588F)
          curveTo(5.652F, 30.782F, 3.0F, 29.215F, 3.0F, 26.742F)
          verticalLineTo(5.25F)
          curveToRelative(0.0F, -2.474F, 2.653F, -4.04F, 4.82F, -2.846F)
          lineToRelative(19.498F, 10.75F)
          close()
          moveToRelative(-0.966F, 3.941F)
          curveToRelative(0.862F, -0.475F, 0.862F, -1.714F, 0.0F, -2.19F)
          lineTo(6.854F, 4.156F)
          curveTo(6.02F, 3.695F, 5.0F, 4.298F, 5.0F, 5.25F)
          verticalLineToRelative(21.492F)
          curveToRelative(0.0F, 0.95F, 1.02F, 1.553F, 1.853F, 1.095F)
          lineToRelative(19.499F, -10.743F)
          close()        
      }
    }
    return _triangleRight32!!
  }

private var _triangleRight32: ImageVector? = null
