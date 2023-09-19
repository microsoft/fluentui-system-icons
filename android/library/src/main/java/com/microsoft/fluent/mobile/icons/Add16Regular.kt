package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Add16: ImageVector
  get() {
    if (_add16 != null) {
      return _add16!!
    }
    _add16 = fluentIcon(name = "Regular.Add16", 16f) {
      materialPath {
          moveTo(8.0F, 2.5F)
          curveTo(8.0F, 2.224F, 7.776F, 2.0F, 7.5F, 2.0F)
          reflectiveCurveTo(7.0F, 2.224F, 7.0F, 2.5F)
          verticalLineTo(7.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 7.0F, 2.0F, 7.224F, 2.0F, 7.5F)
          reflectiveCurveTo(2.224F, 8.0F, 2.5F, 8.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(4.5F)
          curveTo(7.0F, 12.776F, 7.224F, 13.0F, 7.5F, 13.0F)
          reflectiveCurveTo(8.0F, 12.776F, 8.0F, 12.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(4.5F)
          curveTo(12.776F, 8.0F, 13.0F, 7.776F, 13.0F, 7.5F)
          reflectiveCurveTo(12.776F, 7.0F, 12.5F, 7.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(2.5F)
          close()        
      }
    }
    return _add16!!
  }

private var _add16: ImageVector? = null
