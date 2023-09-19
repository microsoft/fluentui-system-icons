package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowLeft16: ImageVector
  get() {
    if (_arrowLeft16 != null) {
      return _arrowLeft16!!
    }
    _arrowLeft16 = fluentIcon(name = "Filled.ArrowLeft16", 16f) {
      materialPath {
          moveTo(14.0F, 8.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(4.463F)
          lineToRelative(3.287F, 2.941F)
          curveToRelative(0.309F, 0.276F, 0.335F, 0.75F, 0.059F, 1.06F)
          curveToRelative(-0.276F, 0.308F, -0.75F, 0.334F, -1.06F, 0.058F)
          lineTo(2.0F, 8.559F)
          curveTo(1.842F, 8.417F, 1.75F, 8.213F, 1.75F, 8.0F)
          curveToRelative(0.0F, -0.213F, 0.09F, -0.417F, 0.25F, -0.559F)
          lineToRelative(4.75F, -4.25F)
          curveToRelative(0.309F, -0.276F, 0.783F, -0.25F, 1.059F, 0.059F)
          curveToRelative(0.276F, 0.309F, 0.25F, 0.783F, -0.059F, 1.059F)
          lineTo(4.463F, 7.25F)
          horizontalLineToRelative(8.787F)
          curveTo(13.664F, 7.25F, 14.0F, 7.586F, 14.0F, 8.0F)
          close()        
      }
    }
    return _arrowLeft16!!
  }

private var _arrowLeft16: ImageVector? = null
