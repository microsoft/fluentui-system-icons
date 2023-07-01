package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronUp28: ImageVector
  get() {
    if (_chevronUp28 != null) {
      return _chevronUp28!!
    }
    _chevronUp28 = fluentIcon(name = "Filled.ChevronUp28", 28f) {
      materialPath {
          moveTo(23.707F, 18.707F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineTo(14.0F, 10.414F)
          lineToRelative(-8.293F, 8.293F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(9.0F, -9.0F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineToRelative(9.0F, 9.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          close()        
      }
    }
    return _chevronUp28!!
  }

private var _chevronUp28: ImageVector? = null
