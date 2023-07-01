package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronUp24: ImageVector
  get() {
    if (_chevronUp24 != null) {
      return _chevronUp24!!
    }
    _chevronUp24 = fluentIcon(name = "Filled.ChevronUp24", 24f) {
      materialPath {
          moveTo(4.293F, 15.707F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineTo(12.0F, 9.414F)
          lineToRelative(6.293F, 6.293F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-7.0F, -7.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-7.0F, 7.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          close()        
      }
    }
    return _chevronUp24!!
  }

private var _chevronUp24: ImageVector? = null
