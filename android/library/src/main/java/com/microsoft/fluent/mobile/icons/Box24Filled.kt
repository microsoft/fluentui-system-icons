package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Box24: ImageVector
  get() {
    if (_box24 != null) {
      return _box24!!
    }
    _box24 = fluentIcon(name = "Filled.Box24", 24f) {
      materialPath {
          moveTo(13.409F, 2.513F)
          curveToRelative(-0.904F, -0.366F, -1.914F, -0.366F, -2.818F, 0.0F)
          lineToRelative(-2.19F, 0.888F)
          lineToRelative(9.592F, 3.73F)
          lineToRelative(3.374F, -1.303F)
          curveToRelative(-0.136F, -0.113F, -0.29F, -0.206F, -0.46F, -0.275F)
          lineToRelative(-7.498F, -3.04F)
          close()
          moveTo(22.0F, 7.191F)
          lineToRelative(-9.25F, 3.574F)
          verticalLineToRelative(10.923F)
          curveToRelative(0.224F, -0.045F, 0.444F, -0.112F, 0.659F, -0.199F)
          lineToRelative(7.498F, -3.04F)
          curveTo(21.567F, 18.181F, 22.0F, 17.54F, 22.0F, 16.827F)
          verticalLineTo(7.192F)
          close()
          moveTo(11.25F, 21.688F)
          verticalLineTo(10.765F)
          lineTo(2.0F, 7.191F)
          verticalLineToRelative(9.637F)
          curveToRelative(0.0F, 0.712F, 0.432F, 1.354F, 1.092F, 1.621F)
          lineToRelative(7.5F, 3.04F)
          curveToRelative(0.214F, 0.087F, 0.434F, 0.153F, 0.658F, 0.2F)
          close()
          moveTo(2.633F, 5.828F)
          lineTo(12.0F, 9.447F)
          lineToRelative(3.917F, -1.513F)
          lineToRelative(-9.543F, -3.712F)
          lineToRelative(-3.281F, 1.331F)
          curveToRelative(-0.17F, 0.069F, -0.324F, 0.162F, -0.46F, 0.275F)
          close()        
      }
    }
    return _box24!!
  }

private var _box24: ImageVector? = null
