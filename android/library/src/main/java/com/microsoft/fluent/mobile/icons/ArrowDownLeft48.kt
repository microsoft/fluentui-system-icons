package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDownLeft48: ImageVector
  get() {
    if (_arrowDownLeft48 != null) {
      return _arrowDownLeft48!!
    }
    _arrowDownLeft48 = fluentIcon(name = "Filled.ArrowDownLeft48", 48f) {
      materialPath {
          moveTo(25.5F, 42.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(26.328F, 39.0F, 25.5F, 39.0F)
          horizontalLineTo(11.121F)
          lineToRelative(30.44F, -30.44F)
          curveToRelative(0.585F, -0.585F, 0.585F, -1.535F, 0.0F, -2.12F)
          curveToRelative(-0.586F, -0.587F, -1.536F, -0.587F, -2.122F, 0.0F)
          lineTo(9.0F, 36.878F)
          verticalLineTo(22.5F)
          curveTo(9.0F, 21.672F, 8.328F, 21.0F, 7.5F, 21.0F)
          reflectiveCurveTo(6.0F, 21.672F, 6.0F, 22.5F)
          verticalLineToRelative(18.0F)
          curveTo(6.0F, 41.328F, 6.672F, 42.0F, 7.5F, 42.0F)
          horizontalLineToRelative(18.0F)
          close()        
      }
    }
    return _arrowDownLeft48!!
  }

private var _arrowDownLeft48: ImageVector? = null
