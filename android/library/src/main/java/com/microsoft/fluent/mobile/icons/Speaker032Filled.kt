package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Speaker032: ImageVector
  get() {
    if (_speaker032 != null) {
      return _speaker032!!
    }
    _speaker032 = fluentIcon(name = "Filled.Speaker032", 032f) {
      materialPath {
          moveTo(18.0F, 5.433F)
          curveToRelative(0.0F, -1.398F, -1.742F, -2.036F, -2.645F, -0.97F)
          lineToRelative(-4.086F, 4.83F)
          curveTo(10.89F, 9.74F, 10.331F, 10.0F, 9.743F, 10.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, 1.791F, -4.0F, 4.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 2.21F, 1.79F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(3.743F)
          curveToRelative(0.588F, 0.0F, 1.146F, 0.26F, 1.526F, 0.708F)
          lineToRelative(4.086F, 4.829F)
          curveTo(16.257F, 28.603F, 18.0F, 27.965F, 18.0F, 26.567F)
          verticalLineTo(5.434F)
          close()        
      }
    }
    return _speaker032!!
  }

private var _speaker032: ImageVector? = null
