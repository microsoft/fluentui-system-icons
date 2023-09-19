package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronRight12: ImageVector
  get() {
    if (_chevronRight12 != null) {
      return _chevronRight12!!
    }
    _chevronRight12 = fluentIcon(name = "Regular.ChevronRight12", 12f) {
      materialPath {
          moveTo(4.646F, 2.147F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(7.793F, 6.0F)
          lineTo(4.646F, 9.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          lineToRelative(3.5F, -3.5F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          close()        
      }
    }
    return _chevronRight12!!
  }

private var _chevronRight12: ImageVector? = null
