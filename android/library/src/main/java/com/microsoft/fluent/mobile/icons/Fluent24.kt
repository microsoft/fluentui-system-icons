package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Fluent24: ImageVector
  get() {
    if (_fluent24 != null) {
      return _fluent24!!
    }
    _fluent24 = fluentIcon(name = "Filled.Fluent24", 24f) {
      materialPath {
          moveTo(12.585F, 2.082F)
          curveToRelative(-0.21F, -0.106F, -0.46F, -0.106F, -0.67F, 0.0F)
          lineToRelative(-6.0F, 3.0F)
          curveTo(5.66F, 5.209F, 5.5F, 5.468F, 5.5F, 5.752F)
          verticalLineTo(17.48F)
          curveToRelative(0.0F, 0.258F, 0.133F, 0.498F, 0.351F, 0.636F)
          lineToRelative(6.0F, 3.77F)
          curveToRelative(0.231F, 0.144F, 0.523F, 0.152F, 0.762F, 0.02F)
          reflectiveCurveTo(13.0F, 21.523F, 13.0F, 21.25F)
          verticalLineToRelative(-6.034F)
          lineToRelative(5.585F, -2.793F)
          curveTo(18.84F, 12.296F, 19.0F, 12.037F, 19.0F, 11.753F)
          curveToRelative(0.0F, -0.285F, -0.16F, -0.544F, -0.415F, -0.671F)
          lineToRelative(-4.658F, -2.33F)
          lineToRelative(4.658F, -2.329F)
          curveTo(18.84F, 6.296F, 19.0F, 6.037F, 19.0F, 5.753F)
          curveToRelative(0.0F, -0.285F, -0.16F, -0.544F, -0.415F, -0.671F)
          lineToRelative(-6.0F, -3.0F)
          close()        
      }
    }
    return _fluent24!!
  }

private var _fluent24: ImageVector? = null
