package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WindowMultiple20: ImageVector
  get() {
    if (_windowMultiple20 != null) {
      return _windowMultiple20!!
    }
    _windowMultiple20 = fluentIcon(name = "Filled.WindowMultiple20", 20f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(8.0F)
          curveTo(2.0F, 13.88F, 3.12F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-8.0F)
          curveTo(15.0F, 3.12F, 13.88F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-8.0F)
          close()
          moveTo(3.0F, 12.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(11.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-8.0F)
          curveTo(3.672F, 14.0F, 3.0F, 13.328F, 3.0F, 12.5F)
          close()
          moveTo(7.5F, 18.0F)
          curveToRelative(-1.21F, 0.0F, -2.219F, -0.859F, -2.45F, -2.0F)
          horizontalLineToRelative(1.035F)
          curveToRelative(0.206F, 0.583F, 0.762F, 1.0F, 1.415F, 1.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(7.5F)
          curveToRelative(0.0F, -0.653F, -0.418F, -1.209F, -1.0F, -1.415F)
          verticalLineTo(5.05F)
          curveToRelative(1.14F, 0.232F, 2.0F, 1.24F, 2.0F, 2.45F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 2.21F, -1.791F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(7.5F)
          close()        
      }
    }
    return _windowMultiple20!!
  }

private var _windowMultiple20: ImageVector? = null
