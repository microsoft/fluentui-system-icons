package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpLeft20: ImageVector
  get() {
    if (_arrowUpLeft20 != null) {
      return _arrowUpLeft20!!
    }
    _arrowUpLeft20 = fluentIcon(name = "Regular.ArrowUpLeft20", 20f) {
      materialPath {
          moveTo(11.5F, 4.0F)
          curveTo(11.776F, 4.0F, 12.0F, 3.776F, 12.0F, 3.5F)
          reflectiveCurveTo(11.776F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          verticalLineToRelative(8.0F)
          curveTo(3.0F, 11.776F, 3.224F, 12.0F, 3.5F, 12.0F)
          reflectiveCurveTo(4.0F, 11.776F, 4.0F, 11.5F)
          verticalLineTo(4.707F)
          lineToRelative(12.146F, 12.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(4.707F, 4.0F)
          horizontalLineTo(11.5F)
          close()        
      }
    }
    return _arrowUpLeft20!!
  }

private var _arrowUpLeft20: ImageVector? = null
