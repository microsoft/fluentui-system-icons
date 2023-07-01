package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowMaximize48: ImageVector
  get() {
    if (_arrowMaximize48 != null) {
      return _arrowMaximize48!!
    }
    _arrowMaximize48 = fluentIcon(name = "Filled.ArrowMaximize48", 48f) {
      materialPath {
          moveTo(40.5F, 24.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(11.121F)
          lineTo(11.121F, 39.0F)
          horizontalLineTo(22.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveTo(23.328F, 42.0F, 22.5F, 42.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(6.672F, 42.0F, 6.0F, 41.328F, 6.0F, 40.5F)
          verticalLineToRelative(-15.0F)
          curveTo(6.0F, 24.672F, 6.672F, 24.0F, 7.5F, 24.0F)
          reflectiveCurveTo(9.0F, 24.672F, 9.0F, 25.5F)
          verticalLineToRelative(11.379F)
          lineTo(36.879F, 9.0F)
          horizontalLineTo(25.5F)
          curveTo(24.672F, 9.0F, 24.0F, 8.328F, 24.0F, 7.5F)
          reflectiveCurveTo(24.672F, 6.0F, 25.5F, 6.0F)
          horizontalLineToRelative(15.0F)
          curveTo(41.328F, 6.0F, 42.0F, 6.672F, 42.0F, 7.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          close()        
      }
    }
    return _arrowMaximize48!!
  }

private var _arrowMaximize48: ImageVector? = null
