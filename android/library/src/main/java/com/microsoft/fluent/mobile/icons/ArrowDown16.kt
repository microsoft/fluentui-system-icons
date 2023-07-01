package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDown16: ImageVector
  get() {
    if (_arrowDown16 != null) {
      return _arrowDown16!!
    }
    _arrowDown16 = fluentIcon(name = "Filled.ArrowDown16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(8.787F)
          lineToRelative(2.941F, -3.287F)
          curveToRelative(0.276F, -0.309F, 0.75F, -0.335F, 1.06F, -0.059F)
          curveToRelative(0.308F, 0.276F, 0.334F, 0.75F, 0.058F, 1.06F)
          lineTo(8.559F, 14.0F)
          curveTo(8.417F, 14.158F, 8.213F, 14.25F, 8.0F, 14.25F)
          curveToRelative(-0.213F, 0.0F, -0.417F, -0.09F, -0.559F, -0.25F)
          lineToRelative(-4.25F, -4.75F)
          curveTo(2.915F, 8.941F, 2.941F, 8.467F, 3.25F, 8.191F)
          curveToRelative(0.309F, -0.276F, 0.783F, -0.25F, 1.059F, 0.059F)
          lineToRelative(2.941F, 3.287F)
          verticalLineTo(2.75F)
          curveTo(7.25F, 2.336F, 7.586F, 2.0F, 8.0F, 2.0F)
          close()        
      }
    }
    return _arrowDown16!!
  }

private var _arrowDown16: ImageVector? = null
