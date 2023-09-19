package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDown16: ImageVector
  get() {
    if (_chevronDown16 != null) {
      return _chevronDown16!!
    }
    _chevronDown16 = fluentIcon(name = "Regular.ChevronDown16", 16f) {
      materialPath {
          moveTo(3.147F, 5.646F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(8.0F, 9.793F)
          lineToRelative(4.146F, -4.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _chevronDown16!!
  }

private var _chevronDown16: ImageVector? = null
