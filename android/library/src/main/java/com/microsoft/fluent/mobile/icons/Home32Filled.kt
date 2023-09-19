package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Home32: ImageVector
  get() {
    if (_home32 != null) {
      return _home32!!
    }
    _home32 = fluentIcon(name = "Filled.Home32", 32f) {
      materialPath {
          moveTo(13.895F, 2.777F)
          curveToRelative(1.214F, -1.032F, 2.996F, -1.032F, 4.21F, 0.0F)
          lineToRelative(9.75F, 8.287F)
          curveTo(28.58F, 11.682F, 29.0F, 12.587F, 29.0F, 13.54F)
          verticalLineTo(26.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          verticalLineTo(20.0F)
          curveToRelative(0.0F, -1.102F, -0.89F, -1.995F, -1.991F, -2.0F)
          horizontalLineTo(13.99F)
          curveTo(12.891F, 18.005F, 12.0F, 18.898F, 12.0F, 20.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-4.0F)
          curveTo(4.12F, 29.0F, 3.0F, 27.88F, 3.0F, 26.5F)
          verticalLineTo(13.54F)
          curveToRelative(0.0F, -0.953F, 0.419F, -1.858F, 1.145F, -2.476F)
          lineToRelative(9.75F, -8.287F)
          close()        
      }
    }
    return _home32!!
  }

private var _home32: ImageVector? = null
