package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownLeft20: ImageVector
  get() {
    if (_arrowDownLeft20 != null) {
      return _arrowDownLeft20!!
    }
    _arrowDownLeft20 = fluentIcon(name = "Regular.ArrowDownLeft20", 20f) {
      materialPath {
          moveTo(11.5F, 16.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.776F, 17.0F, 11.5F, 17.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(3.224F, 17.0F, 3.0F, 16.776F, 3.0F, 16.5F)
          verticalLineToRelative(-8.0F)
          curveTo(3.0F, 8.224F, 3.224F, 8.0F, 3.5F, 8.0F)
          reflectiveCurveTo(4.0F, 8.224F, 4.0F, 8.5F)
          verticalLineToRelative(6.793F)
          lineTo(16.146F, 3.147F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(4.707F, 16.0F)
          horizontalLineTo(11.5F)
          close()        
      }
    }
    return _arrowDownLeft20!!
  }

private var _arrowDownLeft20: ImageVector? = null
