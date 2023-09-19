package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronLeft48: ImageVector
  get() {
    if (_chevronLeft48 != null) {
      return _chevronLeft48!!
    }
    _chevronLeft48 = fluentIcon(name = "Regular.ChevronLeft48", 48f) {
      materialPath {
          moveTo(31.884F, 8.366F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineTo(18.018F, 24.0F)
          lineToRelative(13.866F, 13.866F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineToRelative(-14.75F, -14.75F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(14.75F, -14.75F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          close()        
      }
    }
    return _chevronLeft48!!
  }

private var _chevronLeft48: ImageVector? = null
