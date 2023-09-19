package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronUp16: ImageVector
  get() {
    if (_chevronUp16 != null) {
      return _chevronUp16!!
    }
    _chevronUp16 = fluentIcon(name = "Regular.ChevronUp16", 16f) {
      materialPath {
          moveTo(3.147F, 10.354F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(8.0F, 6.207F)
          lineToRelative(4.146F, 4.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.707F, 0.0F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.196F, 0.511F, 0.0F, 0.707F)
          close()        
      }
    }
    return _chevronUp16!!
  }

private var _chevronUp16: ImageVector? = null
