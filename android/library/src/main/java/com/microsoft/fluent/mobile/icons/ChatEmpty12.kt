package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatEmpty12: ImageVector
  get() {
    if (_chatEmpty12 != null) {
      return _chatEmpty12!!
    }
    _chatEmpty12 = fluentIcon(name = "Filled.ChatEmpty12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveTo(3.239F, 1.0F, 1.0F, 3.239F, 1.0F, 6.0F)
          curveToRelative(0.0F, 0.87F, 0.223F, 1.69F, 0.614F, 2.403F)
          lineTo(1.022F, 10.35F)
          curveToRelative(-0.054F, 0.177F, -0.006F, 0.369F, 0.125F, 0.5F)
          curveToRelative(0.13F, 0.13F, 0.322F, 0.178F, 0.499F, 0.124F)
          lineToRelative(1.945F, -0.592F)
          curveTo(4.306F, 10.776F, 5.127F, 11.0F, 6.0F, 11.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(8.761F, 1.0F, 6.0F, 1.0F)
          close()        
      }
    }
    return _chatEmpty12!!
  }

private var _chatEmpty12: ImageVector? = null
