package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronRight28: ImageVector
  get() {
    if (_chevronRight28 != null) {
      return _chevronRight28!!
    }
    _chevronRight28 = fluentIcon(name = "Filled.ChevronRight28", 28f) {
      materialPath {
          moveTo(9.543F, 4.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineToRelative(8.75F, 8.75F)
          curveTo(19.895F, 13.23F, 20.0F, 13.485F, 20.0F, 13.75F)
          curveToRelative(0.0F, 0.265F, -0.105F, 0.52F, -0.293F, 0.707F)
          lineToRelative(-8.75F, 8.75F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(8.043F, -8.043F)
          lineToRelative(-8.043F, -8.043F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          close()        
      }
    }
    return _chevronRight28!!
  }

private var _chevronRight28: ImageVector? = null
