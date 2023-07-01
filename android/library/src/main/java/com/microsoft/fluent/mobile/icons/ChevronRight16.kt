package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronRight16: ImageVector
  get() {
    if (_chevronRight16 != null) {
      return _chevronRight16!!
    }
    _chevronRight16 = fluentIcon(name = "Regular.ChevronRight16", 16f) {
      materialPath {
          moveTo(5.646F, 3.147F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(9.793F, 8.0F)
          lineToRelative(-4.146F, 4.146F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(4.5F, -4.5F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          close()        
      }
    }
    return _chevronRight16!!
  }

private var _chevronRight16: ImageVector? = null
