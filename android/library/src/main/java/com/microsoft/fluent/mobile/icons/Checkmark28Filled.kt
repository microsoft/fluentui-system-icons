package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Checkmark28: ImageVector
  get() {
    if (_checkmark28 != null) {
      return _checkmark28!!
    }
    _checkmark28 = fluentIcon(name = "Filled.Checkmark28", 28f) {
      materialPath {
          moveTo(10.5F, 19.586F)
          lineToRelative(-6.293F, -6.293F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(7.0F, 7.0F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(14.0F, -14.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(10.5F, 19.586F)
          close()        
      }
    }
    return _checkmark28!!
  }

private var _checkmark28: ImageVector? = null
