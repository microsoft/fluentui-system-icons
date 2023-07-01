package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Play32: ImageVector
  get() {
    if (_play32 != null) {
      return _play32!!
    }
    _play32 = fluentIcon(name = "Regular.Play32", 32f) {
      materialPath {
          moveTo(11.24F, 6.203F)
          curveTo(10.24F, 5.637F, 9.0F, 6.359F, 9.0F, 7.508F)
          verticalLineTo(24.5F)
          curveToRelative(0.0F, 1.15F, 1.24F, 1.872F, 2.24F, 1.305F)
          lineToRelative(14.997F, -8.498F)
          curveToRelative(1.014F, -0.575F, 1.014F, -2.036F, 0.0F, -2.61F)
          lineTo(11.239F, 6.202F)
          close()
          moveTo(7.0F, 7.508F)
          curveToRelative(0.0F, -2.681F, 2.891F, -4.367F, 5.225F, -3.046F)
          lineToRelative(14.997F, 8.493F)
          curveToRelative(2.367F, 1.34F, 2.368F, 4.75F, 0.001F, 6.09F)
          lineToRelative(-14.997F, 8.5F)
          curveTo(9.892F, 28.865F, 7.0F, 27.18F, 7.0F, 24.498F)
          verticalLineTo(7.51F)
          close()        
      }
    }
    return _play32!!
  }

private var _play32: ImageVector? = null
