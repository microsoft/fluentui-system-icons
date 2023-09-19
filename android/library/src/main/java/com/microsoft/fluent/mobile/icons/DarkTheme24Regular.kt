package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DarkTheme24: ImageVector
  get() {
    if (_darkTheme24 != null) {
      return _darkTheme24!!
    }
    _darkTheme24 = fluentIcon(name = "Regular.DarkTheme24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(0.0F, -1.5F)
          verticalLineToRelative(-17.0F)
          curveToRelative(4.694F, 0.0F, 8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          close()        
      }
    }
    return _darkTheme24!!
  }

private var _darkTheme24: ImageVector? = null
