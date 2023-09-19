package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUp16: ImageVector
  get() {
    if (_arrowUp16 != null) {
      return _arrowUp16!!
    }
    _arrowUp16 = fluentIcon(name = "Filled.ArrowUp16", 16f) {
      materialPath {
          moveTo(8.0F, 14.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(4.463F)
          lineTo(4.309F, 7.75F)
          curveToRelative(-0.276F, 0.31F, -0.75F, 0.335F, -1.06F, 0.06F)
          curveToRelative(-0.308F, -0.276F, -0.334F, -0.75F, -0.058F, -1.06F)
          lineTo(7.441F, 2.0F)
          curveTo(7.583F, 1.842F, 7.787F, 1.75F, 8.0F, 1.75F)
          curveToRelative(0.213F, 0.0F, 0.417F, 0.09F, 0.559F, 0.25F)
          lineToRelative(4.25F, 4.75F)
          curveToRelative(0.276F, 0.309F, 0.25F, 0.783F, -0.059F, 1.059F)
          curveToRelative(-0.309F, 0.276F, -0.783F, 0.25F, -1.059F, -0.059F)
          lineTo(8.75F, 4.463F)
          verticalLineToRelative(8.787F)
          curveTo(8.75F, 13.664F, 8.414F, 14.0F, 8.0F, 14.0F)
          close()        
      }
    }
    return _arrowUp16!!
  }

private var _arrowUp16: ImageVector? = null
