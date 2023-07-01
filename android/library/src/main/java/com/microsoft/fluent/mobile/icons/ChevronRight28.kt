package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronRight28: ImageVector
  get() {
    if (_chevronRight28 != null) {
      return _chevronRight28!!
    }
    _chevronRight28 = fluentIcon(name = "Regular.ChevronRight28", 28f) {
      materialPath {
          moveTo(9.97F, 4.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(8.75F, 8.75F)
          curveTo(19.921F, 13.11F, 20.0F, 13.3F, 20.0F, 13.5F)
          reflectiveCurveToRelative(-0.079F, 0.39F, -0.22F, 0.53F)
          lineToRelative(-8.75F, 8.75F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(8.22F, -8.22F)
          lineToRelative(-8.22F, -8.22F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _chevronRight28!!
  }

private var _chevronRight28: ImageVector? = null
