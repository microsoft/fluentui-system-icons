package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Checkmark24: ImageVector
  get() {
    if (_checkmark24 != null) {
      return _checkmark24!!
    }
    _checkmark24 = fluentIcon(name = "Filled.Checkmark24", 24f) {
      materialPath {
          moveTo(8.5F, 16.586F)
          lineToRelative(-3.793F, -3.793F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          lineToRelative(11.0F, -11.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineTo(8.5F, 16.586F)
          close()        
      }
    }
    return _checkmark24!!
  }

private var _checkmark24: ImageVector? = null
