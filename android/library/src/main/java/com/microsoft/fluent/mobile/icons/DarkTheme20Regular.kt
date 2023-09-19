package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DarkTheme20: ImageVector
  get() {
    if (_darkTheme20 != null) {
      return _darkTheme20!!
    }
    _darkTheme20 = fluentIcon(name = "Regular.DarkTheme20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveToRelative(3.866F, 0.0F, 7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(0.0F, -1.0F)
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
