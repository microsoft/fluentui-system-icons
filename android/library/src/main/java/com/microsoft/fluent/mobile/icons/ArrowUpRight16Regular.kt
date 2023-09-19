package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpRight16: ImageVector
  get() {
    if (_arrowUpRight16 != null) {
      return _arrowUpRight16!!
    }
    _arrowUpRight16 = fluentIcon(name = "Regular.ArrowUpRight16", 16f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(7.224F, 3.0F, 7.0F, 2.776F, 7.0F, 2.5F)
          reflectiveCurveTo(7.224F, 2.0F, 7.5F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveTo(13.776F, 2.0F, 14.0F, 2.224F, 14.0F, 2.5F)
          verticalLineToRelative(6.0F)
          curveTo(14.0F, 8.776F, 13.776F, 9.0F, 13.5F, 9.0F)
          reflectiveCurveTo(13.0F, 8.776F, 13.0F, 8.5F)
          verticalLineTo(3.707F)
          lineTo(2.854F, 13.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(12.293F, 3.0F)
          horizontalLineTo(7.5F)
          close()        
      }
    }
    return _arrowUpRight16!!
  }

private var _arrowUpRight16: ImageVector? = null
