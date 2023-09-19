package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationArrow32: ImageVector
  get() {
    if (_locationArrow32 != null) {
      return _locationArrow32!!
    }
    _locationArrow32 = fluentIcon(name = "Filled.LocationArrow32", 32f) {
      materialPath {
          moveTo(26.277F, 3.138F)
          curveToRelative(1.618F, -0.622F, 3.207F, 0.967F, 2.585F, 2.585F)
          lineToRelative(-8.46F, 21.994F)
          curveToRelative(-0.696F, 1.812F, -3.306F, 1.668F, -3.8F, -0.209F)
          lineToRelative(-2.375F, -9.023F)
          curveToRelative(-0.091F, -0.348F, -0.363F, -0.62F, -0.712F, -0.712F)
          lineToRelative(-9.023F, -2.375F)
          curveToRelative(-1.877F, -0.494F, -2.02F, -3.104F, -0.209F, -3.8F)
          lineToRelative(21.994F, -8.46F)
          close()        
      }
    }
    return _locationArrow32!!
  }

private var _locationArrow32: ImageVector? = null
