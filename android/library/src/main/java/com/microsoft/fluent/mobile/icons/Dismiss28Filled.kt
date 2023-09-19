package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Dismiss28: ImageVector
  get() {
    if (_dismiss28 != null) {
      return _dismiss28!!
    }
    _dismiss28 = fluentIcon(name = "Filled.Dismiss28", 28f) {
      materialPath {
          moveTo(22.293F, 4.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(15.414F, 14.0F)
          lineToRelative(8.293F, 8.293F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          lineTo(14.0F, 15.414F)
          lineToRelative(-8.293F, 8.293F)
          curveToRelative(-0.39F, 0.39F, -1.024F, 0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineTo(12.586F, 14.0F)
          lineTo(4.293F, 5.707F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          lineTo(14.0F, 12.586F)
          lineToRelative(8.293F, -8.293F)
          close()        
      }
    }
    return _dismiss28!!
  }

private var _dismiss28: ImageVector? = null
