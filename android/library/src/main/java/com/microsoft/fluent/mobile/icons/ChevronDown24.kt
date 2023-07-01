package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDown24: ImageVector
  get() {
    if (_chevronDown24 != null) {
      return _chevronDown24!!
    }
    _chevronDown24 = fluentIcon(name = "Regular.ChevronDown24", 24f) {
      materialPath {
          moveTo(4.22F, 8.47F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(12.0F, 15.19F)
          lineToRelative(6.72F, -6.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-7.25F, 7.25F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(4.22F, 9.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _chevronDown24!!
  }

private var _chevronDown24: ImageVector? = null
