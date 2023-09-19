package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronRight24: ImageVector
  get() {
    if (_chevronRight24 != null) {
      return _chevronRight24!!
    }
    _chevronRight24 = fluentIcon(name = "Filled.ChevronRight24", 24f) {
      materialPath {
          moveTo(8.293F, 4.293F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(14.586F, 12.0F)
          lineToRelative(-6.293F, 6.293F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(7.0F, -7.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-7.0F, -7.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          close()        
      }
    }
    return _chevronRight24!!
  }

private var _chevronRight24: ImageVector? = null
