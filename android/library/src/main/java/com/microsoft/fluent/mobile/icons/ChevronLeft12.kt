package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronLeft12: ImageVector
  get() {
    if (_chevronLeft12 != null) {
      return _chevronLeft12!!
    }
    _chevronLeft12 = fluentIcon(name = "Regular.ChevronLeft12", 12f) {
      materialPath {
          moveTo(7.354F, 2.147F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(4.207F, 6.0F)
          lineToRelative(3.147F, 3.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(3.5F, -3.5F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _chevronLeft12!!
  }

private var _chevronLeft12: ImageVector? = null
