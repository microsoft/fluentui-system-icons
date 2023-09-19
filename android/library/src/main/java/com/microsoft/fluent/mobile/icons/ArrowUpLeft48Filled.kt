package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpLeft48: ImageVector
  get() {
    if (_arrowUpLeft48 != null) {
      return _arrowUpLeft48!!
    }
    _arrowUpLeft48 = fluentIcon(name = "Filled.ArrowUpLeft48", 48f) {
      materialPath {
          moveTo(25.5F, 6.0F)
          curveTo(26.328F, 6.0F, 27.0F, 6.672F, 27.0F, 7.5F)
          reflectiveCurveTo(26.328F, 9.0F, 25.5F, 9.0F)
          horizontalLineTo(11.121F)
          lineToRelative(30.44F, 30.44F)
          curveToRelative(0.585F, 0.585F, 0.585F, 1.535F, 0.0F, 2.12F)
          curveToRelative(-0.586F, 0.587F, -1.536F, 0.587F, -2.122F, 0.0F)
          lineTo(9.0F, 11.122F)
          verticalLineTo(25.5F)
          curveTo(9.0F, 26.328F, 8.328F, 27.0F, 7.5F, 27.0F)
          reflectiveCurveTo(6.0F, 26.328F, 6.0F, 25.5F)
          verticalLineToRelative(-18.0F)
          curveTo(6.0F, 6.672F, 6.672F, 6.0F, 7.5F, 6.0F)
          horizontalLineToRelative(18.0F)
          close()        
      }
    }
    return _arrowUpLeft48!!
  }

private var _arrowUpLeft48: ImageVector? = null
