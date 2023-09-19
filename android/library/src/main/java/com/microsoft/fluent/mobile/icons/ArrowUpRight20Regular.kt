package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpRight20: ImageVector
  get() {
    if (_arrowUpRight20 != null) {
      return _arrowUpRight20!!
    }
    _arrowUpRight20 = fluentIcon(name = "Regular.ArrowUpRight20", 20f) {
      materialPath {
          moveTo(8.5F, 4.0F)
          curveTo(8.224F, 4.0F, 8.0F, 3.776F, 8.0F, 3.5F)
          reflectiveCurveTo(8.224F, 3.0F, 8.5F, 3.0F)
          horizontalLineToRelative(8.0F)
          curveTo(16.776F, 3.0F, 17.0F, 3.224F, 17.0F, 3.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(16.0F, 11.776F, 16.0F, 11.5F)
          verticalLineTo(4.707F)
          lineTo(3.854F, 16.854F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(15.293F, 4.0F)
          horizontalLineTo(8.5F)
          close()        
      }
    }
    return _arrowUpRight20!!
  }

private var _arrowUpRight20: ImageVector? = null
