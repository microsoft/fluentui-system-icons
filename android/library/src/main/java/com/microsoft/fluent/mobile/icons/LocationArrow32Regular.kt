package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LocationArrow32: ImageVector
  get() {
    if (_locationArrow32 != null) {
      return _locationArrow32!!
    }
    _locationArrow32 = fluentIcon(name = "Regular.LocationArrow32", 32f) {
      materialPath {
          moveTo(28.863F, 5.723F)
          curveToRelative(0.622F, -1.618F, -0.967F, -3.207F, -2.584F, -2.585F)
          lineToRelative(-21.995F, 8.46F)
          curveToRelative(-1.812F, 0.696F, -1.668F, 3.306F, 0.21F, 3.8F)
          lineToRelative(9.022F, 2.375F)
          curveToRelative(0.348F, 0.091F, 0.62F, 0.364F, 0.713F, 0.712F)
          lineToRelative(2.374F, 9.023F)
          curveToRelative(0.494F, 1.877F, 3.104F, 2.02F, 3.8F, 0.209F)
          lineToRelative(8.46F, -21.994F)
          close()
          moveToRelative(-1.866F, -0.718F)
          lineToRelative(-8.46F, 21.994F)
          lineToRelative(-2.374F, -9.023F)
          curveToRelative(-0.276F, -1.046F, -1.092F, -1.863F, -2.138F, -2.138F)
          lineToRelative(-9.023F, -2.374F)
          lineToRelative(21.994F, -8.46F)
          close()        
      }
    }
    return _locationArrow32!!
  }

private var _locationArrow32: ImageVector? = null
