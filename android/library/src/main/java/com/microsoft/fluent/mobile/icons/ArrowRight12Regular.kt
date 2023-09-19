package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowRight12: ImageVector
  get() {
    if (_arrowRight12 != null) {
      return _arrowRight12!!
    }
    _arrowRight12 = fluentIcon(name = "Regular.ArrowRight12", 12f) {
      materialPath {
          moveTo(1.5F, 6.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(6.793F)
          lineTo(6.147F, 2.853F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(8.793F, 6.5F)
          horizontalLineTo(2.0F)
          curveTo(1.724F, 6.5F, 1.5F, 6.276F, 1.5F, 6.0F)
          close()        
      }
    }
    return _arrowRight12!!
  }

private var _arrowRight12: ImageVector? = null
