package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRight16: ImageVector
  get() {
    if (_arrowRight16 != null) {
      return _arrowRight16!!
    }
    _arrowRight16 = fluentIcon(name = "Filled.ArrowRight16", 16f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(8.787F)
          lineTo(8.25F, 4.309F)
          curveToRelative(-0.31F, -0.276F, -0.335F, -0.75F, -0.06F, -1.06F)
          curveToRelative(0.276F, -0.308F, 0.75F, -0.334F, 1.06F, -0.058F)
          lineTo(14.0F, 7.441F)
          curveTo(14.158F, 7.583F, 14.25F, 7.787F, 14.25F, 8.0F)
          curveToRelative(0.0F, 0.213F, -0.09F, 0.417F, -0.25F, 0.559F)
          lineToRelative(-4.75F, 4.25F)
          curveToRelative(-0.309F, 0.276F, -0.783F, 0.25F, -1.059F, -0.059F)
          curveToRelative(-0.276F, -0.309F, -0.25F, -0.783F, 0.059F, -1.059F)
          lineToRelative(3.287F, -2.941F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 8.75F, 2.0F, 8.414F, 2.0F, 8.0F)
          close()        
      }
    }
    return _arrowRight16!!
  }

private var _arrowRight16: ImageVector? = null
