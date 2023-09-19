package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DarkTheme20: ImageVector
  get() {
    if (_darkTheme20 != null) {
      return _darkTheme20!!
    }
    _darkTheme20 = fluentIcon(name = "Filled.DarkTheme20", 20f) {
      materialPath {
          moveTo(10.0F, 3.5F)
          curveToRelative(3.59F, 0.0F, 6.5F, 2.91F, 6.5F, 6.5F)
          reflectiveCurveToRelative(-2.91F, 6.5F, -6.5F, 6.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()        
      }
    }
    return _darkTheme20!!
  }

private var _darkTheme20: ImageVector? = null
