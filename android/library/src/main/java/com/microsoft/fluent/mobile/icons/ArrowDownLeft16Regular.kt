package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownLeft16: ImageVector
  get() {
    if (_arrowDownLeft16 != null) {
      return _arrowDownLeft16!!
    }
    _arrowDownLeft16 = fluentIcon(name = "Regular.ArrowDownLeft16", 16f) {
      materialPath {
          moveTo(8.5F, 13.0F)
          curveTo(8.776F, 13.0F, 9.0F, 13.224F, 9.0F, 13.5F)
          reflectiveCurveTo(8.776F, 14.0F, 8.5F, 14.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(2.224F, 14.0F, 2.0F, 13.776F, 2.0F, 13.5F)
          verticalLineToRelative(-6.0F)
          curveTo(2.0F, 7.224F, 2.224F, 7.0F, 2.5F, 7.0F)
          reflectiveCurveTo(3.0F, 7.224F, 3.0F, 7.5F)
          verticalLineToRelative(4.793F)
          lineTo(13.146F, 2.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(3.707F, 13.0F)
          horizontalLineTo(8.5F)
          close()        
      }
    }
    return _arrowDownLeft16!!
  }

private var _arrowDownLeft16: ImageVector? = null
