package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronLeft28: ImageVector
  get() {
    if (_chevronLeft28 != null) {
      return _chevronLeft28!!
    }
    _chevronLeft28 = fluentIcon(name = "Filled.ChevronLeft28", 28f) {
      materialPath {
          moveTo(18.457F, 23.207F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-8.75F, -8.75F)
          curveTo(8.105F, 14.27F, 8.0F, 14.015F, 8.0F, 13.75F)
          curveToRelative(0.0F, -0.265F, 0.105F, -0.52F, 0.293F, -0.707F)
          lineToRelative(8.75F, -8.75F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-8.043F, 8.043F)
          lineToRelative(8.043F, 8.043F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          close()        
      }
    }
    return _chevronLeft28!!
  }

private var _chevronLeft28: ImageVector? = null
