package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Add12: ImageVector
  get() {
    if (_add12 != null) {
      return _add12!!
    }
    _add12 = fluentIcon(name = "Regular.Add12", 12f) {
      materialPath {
          moveTo(6.0F, 1.5F)
          curveTo(6.0F, 1.224F, 5.776F, 1.0F, 5.5F, 1.0F)
          reflectiveCurveTo(5.0F, 1.224F, 5.0F, 1.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(1.5F)
          curveTo(1.224F, 5.0F, 1.0F, 5.224F, 1.0F, 5.5F)
          reflectiveCurveTo(1.224F, 6.0F, 1.5F, 6.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(3.5F)
          curveTo(5.0F, 9.776F, 5.224F, 10.0F, 5.5F, 10.0F)
          reflectiveCurveTo(6.0F, 9.776F, 6.0F, 9.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(3.5F)
          curveTo(9.776F, 6.0F, 10.0F, 5.776F, 10.0F, 5.5F)
          reflectiveCurveTo(9.776F, 5.0F, 9.5F, 5.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(1.5F)
          close()        
      }
    }
    return _add12!!
  }

private var _add12: ImageVector? = null
