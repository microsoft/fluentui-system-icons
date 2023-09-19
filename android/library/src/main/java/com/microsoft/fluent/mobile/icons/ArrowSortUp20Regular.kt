package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowSortUp20: ImageVector
  get() {
    if (_arrowSortUp20 != null) {
      return _arrowSortUp20!!
    }
    _arrowSortUp20 = fluentIcon(name = "Regular.ArrowSortUp20", 20f) {
      materialPath {
          moveTo(8.998F, 4.71F)
          lineTo(6.354F, 7.354F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(9.115F, 3.18F)
          curveTo(9.206F, 3.069F, 9.345F, 3.0F, 9.498F, 3.0F)
          horizontalLineTo(9.5F)
          curveToRelative(0.078F, 0.0F, 0.157F, 0.018F, 0.229F, 0.055F)
          curveToRelative(0.045F, 0.023F, 0.087F, 0.054F, 0.125F, 0.092F)
          lineToRelative(0.01F, 0.01F)
          lineToRelative(3.49F, 3.49F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.195F, 0.196F, -0.512F, 0.196F, -0.707F, 0.0F)
          lineToRelative(-2.65F, -2.649F)
          verticalLineTo(16.5F)
          curveToRelative(0.0F, 0.276F, -0.223F, 0.5F, -0.5F, 0.5F)
          curveToRelative(-0.275F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineTo(4.71F)
          close()        
      }
    }
    return _arrowSortUp20!!
  }

private var _arrowSortUp20: ImageVector? = null
