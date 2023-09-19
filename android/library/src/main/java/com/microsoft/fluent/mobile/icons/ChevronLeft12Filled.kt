package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronLeft12: ImageVector
  get() {
    if (_chevronLeft12 != null) {
      return _chevronLeft12!!
    }
    _chevronLeft12 = fluentIcon(name = "Filled.ChevronLeft12", 12f) {
      materialPath {
          moveTo(7.53F, 2.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(4.81F, 6.0F)
          lineToRelative(2.72F, 2.72F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(3.22F, 6.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.25F, -3.25F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _chevronLeft12!!
  }

private var _chevronLeft12: ImageVector? = null
