package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.IosChevronRight20: ImageVector
  get() {
    if (_iosChevronRight20 != null) {
      return _iosChevronRight20!!
    }
    _iosChevronRight20 = fluentIcon(name = "Regular.IosChevronRight20", 20f) {
      materialPath {
          moveTo(12.646F, 5.854F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(16.793F, 10.0F)
          lineToRelative(-4.147F, -4.146F)
          close()        
      }
    }
    return _iosChevronRight20!!
  }

private var _iosChevronRight20: ImageVector? = null
