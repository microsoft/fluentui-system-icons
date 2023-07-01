package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDown12: ImageVector
  get() {
    if (_chevronDown12 != null) {
      return _chevronDown12!!
    }
    _chevronDown12 = fluentIcon(name = "Regular.ChevronDown12", 12f) {
      materialPath {
          moveTo(2.147F, 4.646F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(6.0F, 7.793F)
          lineToRelative(3.146F, -3.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.196F, 0.196F, 0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _chevronDown12!!
  }

private var _chevronDown12: ImageVector? = null
