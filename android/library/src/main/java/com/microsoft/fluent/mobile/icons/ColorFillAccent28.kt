package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorFillAccent28: ImageVector
  get() {
    if (_colorFillAccent28 != null) {
      return _colorFillAccent28!!
    }
    _colorFillAccent28 = fluentIcon(name = "Regular.ColorFillAccent28", 28f) {
      materialPath {
          moveTo(16.512F, 17.75F)
          curveTo(16.504F, 17.832F, 16.5F, 17.916F, 16.5F, 18.0F)
          curveToRelative(0.0F, 1.933F, 1.567F, 3.5F, 3.5F, 3.5F)
          curveToRelative(1.785F, 0.0F, 3.257F, -1.335F, 3.473F, -3.062F)
          curveToRelative(0.479F, 0.456F, 0.777F, 1.1F, 0.777F, 1.812F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(6.25F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.12F, -2.5F, -2.5F)
          verticalLineToRelative(-1.5F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          horizontalLineToRelative(1.011F)
          lineToRelative(1.102F, 1.102F)
          curveToRelative(1.464F, 1.464F, 3.838F, 1.464F, 5.303F, 0.0F)
          lineToRelative(1.101F, -1.102F)
          horizontalLineToRelative(1.745F)
          close()        
      }
    }
    return _colorFillAccent28!!
  }

private var _colorFillAccent28: ImageVector? = null
