package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronLeft28: ImageVector
  get() {
    if (_chevronLeft28 != null) {
      return _chevronLeft28!!
    }
    _chevronLeft28 = fluentIcon(name = "Regular.ChevronLeft28", 28f) {
      materialPath {
          moveTo(18.03F, 22.78F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-8.75F, -8.75F)
          curveTo(8.079F, 13.89F, 8.0F, 13.7F, 8.0F, 13.5F)
          reflectiveCurveToRelative(0.079F, -0.39F, 0.22F, -0.53F)
          lineToRelative(8.75F, -8.75F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(9.81F, 13.5F)
          lineToRelative(8.22F, 8.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          close()        
      }
    }
    return _chevronLeft28!!
  }

private var _chevronLeft28: ImageVector? = null
