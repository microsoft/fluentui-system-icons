package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronLeft16: ImageVector
  get() {
    if (_chevronLeft16 != null) {
      return _chevronLeft16!!
    }
    _chevronLeft16 = fluentIcon(name = "Regular.ChevronLeft16", 16f) {
      materialPath {
          moveTo(10.354F, 3.147F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(6.207F, 8.0F)
          lineToRelative(4.147F, 4.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineToRelative(4.5F, -4.5F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, 0.0F)
          close()        
      }
    }
    return _chevronLeft16!!
  }

private var _chevronLeft16: ImageVector? = null
