package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.WindowEdit16: ImageVector
  get() {
    if (_windowEdit16 != null) {
      return _windowEdit16!!
    }
    _windowEdit16 = fluentIcon(name = "Regular.WindowEdit16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(1.547F)
          lineToRelative(0.25F, -1.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(10.0F)
          verticalLineToRelative(1.036F)
          curveToRelative(0.331F, -0.058F, 0.671F, -0.05F, 1.0F, 0.023F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(3.085F, 4.0F)
          curveTo(3.291F, 3.417F, 3.847F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.653F, 0.0F, 1.209F, 0.417F, 1.415F, 1.0F)
          horizontalLineToRelative(-9.83F)
          close()
          moveToRelative(11.46F, 3.455F)
          curveToRelative(-0.61F, -0.61F, -1.598F, -0.61F, -2.207F, 0.0F)
          lineToRelative(-4.289F, 4.288F)
          curveToRelative(-0.356F, 0.356F, -0.608F, 0.802F, -0.73F, 1.29F)
          lineToRelative(-0.303F, 1.212F)
          curveToRelative(-0.112F, 0.446F, 0.293F, 0.85F, 0.739F, 0.739F)
          lineToRelative(1.211F, -0.303F)
          curveToRelative(0.488F, -0.122F, 0.934F, -0.375F, 1.29F, -0.73F)
          lineToRelative(4.289F, -4.289F)
          curveToRelative(0.61F, -0.61F, 0.61F, -1.598F, 0.0F, -2.207F)
          close()        
      }
    }
    return _windowEdit16!!
  }

private var _windowEdit16: ImageVector? = null
