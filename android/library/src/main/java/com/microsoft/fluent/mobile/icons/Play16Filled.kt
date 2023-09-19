package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Play16: ImageVector
  get() {
    if (_play16 != null) {
      return _play16!!
    }
    _play16 = fluentIcon(name = "Filled.Play16", 16f) {
      materialPath {
          moveTo(6.235F, 2.192F)
          curveTo(5.235F, 1.629F, 4.0F, 2.352F, 4.0F, 3.499F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.148F, 1.236F, 1.87F, 2.235F, 1.308F)
          lineToRelative(8.0F, -4.5F)
          curveToRelative(1.02F, -0.574F, 1.02F, -2.041F, 0.0F, -2.615F)
          lineToRelative(-8.0F, -4.5F)
          close()        
      }
    }
    return _play16!!
  }

private var _play16: ImageVector? = null
