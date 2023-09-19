package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDown28: ImageVector
  get() {
    if (_chevronDown28 != null) {
      return _chevronDown28!!
    }
    _chevronDown28 = fluentIcon(name = "Regular.ChevronDown28", 28f) {
      materialPath {
          moveTo(4.22F, 9.47F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(14.0F, 18.19F)
          lineToRelative(8.72F, -8.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-9.25F, 9.25F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-9.25F, -9.25F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _chevronDown28!!
  }

private var _chevronDown28: ImageVector? = null
