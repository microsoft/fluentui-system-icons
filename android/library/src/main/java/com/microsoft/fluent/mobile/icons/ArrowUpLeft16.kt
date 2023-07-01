package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpLeft16: ImageVector
  get() {
    if (_arrowUpLeft16 != null) {
      return _arrowUpLeft16!!
    }
    _arrowUpLeft16 = fluentIcon(name = "Regular.ArrowUpLeft16", 16f) {
      materialPath {
          moveTo(8.5F, 3.0F)
          curveTo(8.776F, 3.0F, 9.0F, 2.776F, 9.0F, 2.5F)
          reflectiveCurveTo(8.776F, 2.0F, 8.5F, 2.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(2.224F, 2.0F, 2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(6.0F)
          curveTo(2.0F, 8.776F, 2.224F, 9.0F, 2.5F, 9.0F)
          reflectiveCurveTo(3.0F, 8.776F, 3.0F, 8.5F)
          verticalLineTo(3.707F)
          lineToRelative(10.146F, 10.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(3.707F, 3.0F)
          horizontalLineTo(8.5F)
          close()        
      }
    }
    return _arrowUpLeft16!!
  }

private var _arrowUpLeft16: ImageVector? = null
