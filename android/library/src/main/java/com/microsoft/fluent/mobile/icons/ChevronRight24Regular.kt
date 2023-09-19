package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronRight24: ImageVector
  get() {
    if (_chevronRight24 != null) {
      return _chevronRight24!!
    }
    _chevronRight24 = fluentIcon(name = "Regular.ChevronRight24", 24f) {
      materialPath {
          moveTo(8.47F, 4.22F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(15.19F, 12.0F)
          lineToRelative(-6.72F, 6.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(7.25F, -7.25F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(9.53F, 4.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          close()        
      }
    }
    return _chevronRight24!!
  }

private var _chevronRight24: ImageVector? = null
