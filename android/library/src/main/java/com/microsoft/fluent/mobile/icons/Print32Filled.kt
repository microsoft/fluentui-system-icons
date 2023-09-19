package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Print32: ImageVector
  get() {
    if (_print32 != null) {
      return _print32!!
    }
    _print32 = fluentIcon(name = "Filled.Print32", 32f) {
      materialPath {
          moveTo(8.0F, 6.5F)
          verticalLineTo(8.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, 2.239F, -5.0F, 5.0F)
          verticalLineToRelative(7.5F)
          curveTo(2.0F, 22.433F, 3.567F, 24.0F, 5.5F, 24.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(24.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(6.5F)
          curveTo(24.0F, 4.567F, 22.433F, 3.0F, 20.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(9.567F, 3.0F, 8.0F, 4.567F, 8.0F, 6.5F)
          close()
          moveTo(11.5F, 5.0F)
          horizontalLineToRelative(9.0F)
          curveTo(21.328F, 5.0F, 22.0F, 5.672F, 22.0F, 6.5F)
          verticalLineTo(8.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(6.5F)
          curveTo(10.0F, 5.672F, 10.672F, 5.0F, 11.5F, 5.0F)
          close()
          moveTo(9.0F, 19.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(9.672F, 27.0F, 9.0F, 26.328F, 9.0F, 25.5F)
          verticalLineToRelative(-6.0F)
          close()        
      }
    }
    return _print32!!
  }

private var _print32: ImageVector? = null
