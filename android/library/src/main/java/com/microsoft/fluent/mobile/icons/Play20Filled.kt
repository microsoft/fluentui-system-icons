package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Play20: ImageVector
  get() {
    if (_play20 != null) {
      return _play20!!
    }
    _play20 = fluentIcon(name = "Filled.Play20", 20f) {
      materialPath {
          moveTo(17.222F, 8.685F)
          curveToRelative(1.037F, 0.57F, 1.037F, 2.059F, 0.0F, 2.628F)
          lineToRelative(-10.0F, 5.498F)
          curveTo(6.223F, 17.36F, 5.0F, 16.637F, 5.0F, 15.496F)
          verticalLineTo(4.502F)
          curveToRelative(0.0F, -1.14F, 1.223F, -1.864F, 2.223F, -1.314F)
          lineToRelative(10.0F, 5.497F)
          close()        
      }
    }
    return _play20!!
  }

private var _play20: ImageVector? = null
