package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatEmpty24: ImageVector
  get() {
    if (_chatEmpty24 != null) {
      return _chatEmpty24!!
    }
    _chatEmpty24 = fluentIcon(name = "Filled.ChatEmpty24", 24f) {
      materialPath {
          moveTo(22.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          curveToRelative(0.0F, 1.643F, 0.397F, 3.23F, 1.145F, 4.65F)
          lineToRelative(-1.116F, 4.29F)
          curveToRelative(-0.037F, 0.14F, -0.037F, 0.288F, 0.0F, 0.428F)
          curveToRelative(0.118F, 0.454F, 0.582F, 0.727F, 1.036F, 0.608F)
          lineToRelative(4.29F, -1.117F)
          curveTo(8.776F, 21.604F, 10.36F, 22.0F, 12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          close()        
      }
    }
    return _chatEmpty24!!
  }

private var _chatEmpty24: ImageVector? = null
