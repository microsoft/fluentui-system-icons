package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Stack16: ImageVector
  get() {
    if (_stack16 != null) {
      return _stack16!!
    }
    _stack16 = fluentIcon(name = "Filled.Stack16", 16f) {
      materialPath {
          moveTo(2.5F, 2.0F)
          curveTo(1.672F, 2.0F, 1.0F, 2.672F, 1.0F, 3.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 9.328F, 1.672F, 10.0F, 2.5F, 10.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-5.0F)
          curveTo(11.0F, 2.672F, 10.328F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(2.585F, 11.0F)
          curveToRelative(0.206F, 0.583F, 0.761F, 1.0F, 1.415F, 1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(3.037F, 0.0F, 5.5F, -2.463F, 5.5F, -5.5F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.653F, -0.418F, -1.209F, -1.0F, -1.415F)
          verticalLineTo(8.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineTo(5.085F)
          close()
          moveTo(4.5F, 12.0F)
          curveToRelative(-0.654F, 0.0F, -1.21F, -0.417F, -1.415F, -1.0F)
          horizontalLineTo(9.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(4.085F)
          curveToRelative(0.582F, 0.206F, 1.0F, 0.762F, 1.0F, 1.415F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _stack16!!
  }

private var _stack16: ImageVector? = null
