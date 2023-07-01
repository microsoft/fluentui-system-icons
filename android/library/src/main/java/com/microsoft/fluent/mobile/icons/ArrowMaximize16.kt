package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowMaximize16: ImageVector
  get() {
    if (_arrowMaximize16 != null) {
      return _arrowMaximize16!!
    }
    _arrowMaximize16 = fluentIcon(name = "Regular.ArrowMaximize16", 16f) {
      materialPath {
          moveTo(8.5F, 2.0F)
          curveTo(8.224F, 2.0F, 8.0F, 2.224F, 8.0F, 2.5F)
          reflectiveCurveTo(8.224F, 3.0F, 8.5F, 3.0F)
          horizontalLineToRelative(3.793F)
          lineTo(3.0F, 12.293F)
          verticalLineTo(8.5F)
          curveTo(3.0F, 8.224F, 2.776F, 8.0F, 2.5F, 8.0F)
          reflectiveCurveTo(2.0F, 8.224F, 2.0F, 8.5F)
          verticalLineToRelative(4.9F)
          curveTo(2.0F, 13.731F, 2.269F, 14.0F, 2.6F, 14.0F)
          horizontalLineToRelative(4.9F)
          curveTo(7.776F, 14.0F, 8.0F, 13.776F, 8.0F, 13.5F)
          reflectiveCurveTo(7.776F, 13.0F, 7.5F, 13.0F)
          horizontalLineTo(3.707F)
          lineTo(13.0F, 3.707F)
          verticalLineTo(7.5F)
          curveTo(13.0F, 7.776F, 13.224F, 8.0F, 13.5F, 8.0F)
          reflectiveCurveTo(14.0F, 7.776F, 14.0F, 7.5F)
          verticalLineTo(2.6F)
          curveTo(14.0F, 2.269F, 13.731F, 2.0F, 13.4F, 2.0F)
          horizontalLineTo(8.5F)
          close()        
      }
    }
    return _arrowMaximize16!!
  }

private var _arrowMaximize16: ImageVector? = null
