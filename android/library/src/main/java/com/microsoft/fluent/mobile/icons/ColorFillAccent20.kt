package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorFillAccent20: ImageVector
  get() {
    if (_colorFillAccent20 != null) {
      return _colorFillAccent20!!
    }
    _colorFillAccent20 = fluentIcon(name = "Regular.ColorFillAccent20", 20f) {
      materialPath {
          moveTo(4.836F, 12.5F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.295F, -0.085F, -0.57F, -0.232F, -0.802F)
          curveTo(16.888F, 14.167F, 16.042F, 15.0F, 14.75F, 15.0F)
          curveToRelative(-1.597F, 0.0F, -2.512F, -1.273F, -2.71F, -2.5F)
          horizontalLineToRelative(-1.062F)
          lineToRelative(-0.95F, 0.95F)
          curveToRelative(-1.171F, 1.171F, -3.071F, 1.171F, -4.243F, 0.0F)
          lineToRelative(-0.95F, -0.95F)
          close()        
      }
    }
    return _colorFillAccent20!!
  }

private var _colorFillAccent20: ImageVector? = null
