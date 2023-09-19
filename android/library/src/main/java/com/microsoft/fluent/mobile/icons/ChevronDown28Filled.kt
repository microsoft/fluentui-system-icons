package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDown28: ImageVector
  get() {
    if (_chevronDown28 != null) {
      return _chevronDown28!!
    }
    _chevronDown28 = fluentIcon(name = "Filled.ChevronDown28", 28f) {
      materialPath {
          moveTo(4.293F, 9.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(14.0F, 17.586F)
          lineToRelative(8.293F, -8.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(-9.0F, 9.0F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-9.0F, -9.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          close()        
      }
    }
    return _chevronDown28!!
  }

private var _chevronDown28: ImageVector? = null
