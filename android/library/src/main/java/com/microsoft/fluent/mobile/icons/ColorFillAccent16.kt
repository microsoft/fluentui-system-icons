package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorFillAccent16: ImageVector
  get() {
    if (_colorFillAccent16 != null) {
      return _colorFillAccent16!!
    }
    _colorFillAccent16 = fluentIcon(name = "Regular.ColorFillAccent16", 16f) {
      materialPath {
          moveTo(8.768F, 11.354F)
          curveToRelative(-0.977F, 0.977F, -2.56F, 0.977F, -3.536F, 0.0F)
          lineTo(3.473F, 9.596F)
          curveTo(2.905F, 9.809F, 2.5F, 10.357F, 2.5F, 11.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.602F, 0.0F, 1.121F, -0.355F, 1.36F, -0.866F)
          curveToRelative(-0.268F, 0.098F, -0.558F, 0.151F, -0.86F, 0.151F)
          curveToRelative(-1.38F, 0.0F, -2.5F, -1.119F, -2.5F, -2.5F)
          curveToRelative(0.0F, -0.058F, 0.003F, -0.115F, 0.008F, -0.172F)
          lineToRelative(-1.24F, 1.24F)
          close()        
      }
    }
    return _colorFillAccent16!!
  }

private var _colorFillAccent16: ImageVector? = null
