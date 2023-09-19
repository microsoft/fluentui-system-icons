package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Dismiss32: ImageVector
  get() {
    if (_dismiss32 != null) {
      return _dismiss32!!
    }
    _dismiss32 = fluentIcon(name = "Regular.Dismiss32", 32f) {
      materialPath {
          moveTo(26.29F, 4.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(17.413F, 15.998F)
          lineTo(27.704F, 26.29F)
          curveToRelative(0.391F, 0.39F, 0.391F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.023F, 0.39F, -1.414F, 0.0F)
          lineTo(16.0F, 17.413F)
          lineTo(5.707F, 27.704F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.023F, 0.0F, -1.414F)
          lineTo(14.584F, 16.0F)
          lineTo(4.293F, 5.707F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(16.0F, 14.584F)
          lineTo(26.29F, 4.293F)
          close()        
      }
    }
    return _dismiss32!!
  }

private var _dismiss32: ImageVector? = null
