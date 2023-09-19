package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Poll24: ImageVector
  get() {
    if (_poll24 != null) {
      return _poll24!!
    }
    _poll24 = fluentIcon(name = "Filled.Poll24", 24f) {
      materialPath {
          moveTo(11.752F, 2.0F)
          curveToRelative(1.52F, 0.0F, 2.752F, 1.232F, 2.752F, 2.752F)
          verticalLineTo(19.25F)
          curveToRelative(0.0F, 1.52F, -1.232F, 2.752F, -2.752F, 2.752F)
          curveTo(10.232F, 22.002F, 9.0F, 20.77F, 9.0F, 19.25F)
          verticalLineTo(4.752F)
          curveTo(9.0F, 3.232F, 10.232F, 2.0F, 11.752F, 2.0F)
          close()
          moveToRelative(7.0F, 5.0F)
          curveToRelative(1.52F, 0.0F, 2.752F, 1.232F, 2.752F, 2.752F)
          verticalLineToRelative(9.498F)
          curveToRelative(0.0F, 1.52F, -1.232F, 2.752F, -2.752F, 2.752F)
          curveToRelative(-1.52F, 0.0F, -2.752F, -1.232F, -2.752F, -2.752F)
          verticalLineTo(9.752F)
          curveTo(16.0F, 8.232F, 17.232F, 7.0F, 18.752F, 7.0F)
          close()
          moveToRelative(-14.0F, 5.0F)
          curveToRelative(1.52F, 0.0F, 2.752F, 1.232F, 2.752F, 2.752F)
          verticalLineToRelative(4.498F)
          curveToRelative(0.0F, 1.52F, -1.232F, 2.752F, -2.752F, 2.752F)
          curveTo(3.232F, 22.002F, 2.0F, 20.77F, 2.0F, 19.25F)
          verticalLineToRelative(-4.498F)
          curveTo(2.0F, 13.232F, 3.232F, 12.0F, 4.752F, 12.0F)
          close()        
      }
    }
    return _poll24!!
  }

private var _poll24: ImageVector? = null
