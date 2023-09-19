package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pause28: ImageVector
  get() {
    if (_pause28 != null) {
      return _pause28!!
    }
    _pause28 = fluentIcon(name = "Filled.Pause28", 28f) {
      materialPath {
          moveTo(6.75F, 3.0F)
          curveTo(5.231F, 3.0F, 4.0F, 4.231F, 4.0F, 5.75F)
          verticalLineToRelative(16.5F)
          curveTo(4.0F, 23.769F, 5.231F, 25.0F, 6.75F, 25.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(5.75F)
          curveTo(12.5F, 4.231F, 11.269F, 3.0F, 9.75F, 3.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(11.5F, 0.0F)
          curveToRelative(-1.519F, 0.0F, -2.75F, 1.231F, -2.75F, 2.75F)
          verticalLineToRelative(16.5F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineToRelative(3.0F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(5.75F)
          curveTo(24.0F, 4.231F, 22.769F, 3.0F, 21.25F, 3.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _pause28!!
  }

private var _pause28: ImageVector? = null
