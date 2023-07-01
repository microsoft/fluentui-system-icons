package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Add48: ImageVector
  get() {
    if (_add48 != null) {
      return _add48!!
    }
    _add48 = fluentIcon(name = "Filled.Add48", 48f) {
      materialPath {
          moveTo(23.5F, 5.0F)
          curveTo(24.328F, 5.0F, 25.0F, 5.672F, 25.0F, 6.5F)
          verticalLineTo(22.0F)
          horizontalLineToRelative(15.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(41.328F, 25.0F, 40.5F, 25.0F)
          horizontalLineTo(25.0F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(22.0F, 41.328F, 22.0F, 40.5F)
          verticalLineTo(25.0F)
          horizontalLineTo(6.5F)
          curveTo(5.672F, 25.0F, 5.0F, 24.328F, 5.0F, 23.5F)
          reflectiveCurveTo(5.672F, 22.0F, 6.5F, 22.0F)
          horizontalLineTo(22.0F)
          verticalLineTo(6.5F)
          curveTo(22.0F, 5.672F, 22.672F, 5.0F, 23.5F, 5.0F)
          close()        
      }
    }
    return _add48!!
  }

private var _add48: ImageVector? = null
