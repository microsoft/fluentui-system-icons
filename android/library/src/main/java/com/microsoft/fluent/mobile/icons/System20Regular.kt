package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.System20: ImageVector
  get() {
    if (_system20 != null) {
      return _system20!!
    }
    _system20 = fluentIcon(name = "Regular.System20", 20f) {
      materialPath {
          moveTo(2.0F, 6.5F)
          curveTo(2.0F, 5.12F, 3.12F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(11.0F)
          curveTo(16.88F, 4.0F, 18.0F, 5.12F, 18.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.12F, 16.0F, 2.0F, 14.88F, 2.0F, 13.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(4.5F, 5.0F)
          curveTo(3.672F, 5.0F, 3.0F, 5.672F, 3.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveTo(3.0F, 14.328F, 3.672F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-7.0F)
          curveTo(17.0F, 5.672F, 16.328F, 5.0F, 15.5F, 5.0F)
          horizontalLineToRelative(-11.0F)
          close()        
      }
    }
    return _system20!!
  }

private var _system20: ImageVector? = null
