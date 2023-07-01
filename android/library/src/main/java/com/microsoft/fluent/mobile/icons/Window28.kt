package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Window28: ImageVector
  get() {
    if (_window28 != null) {
      return _window28!!
    }
    _window28 = fluentIcon(name = "Filled.Window28", 28f) {
      materialPath {
          moveTo(6.75F, 3.0F)
          horizontalLineToRelative(14.5F)
          curveTo(23.28F, 3.0F, 25.0F, 4.712F, 25.0F, 6.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(6.75F)
          curveTo(4.679F, 25.0F, 3.0F, 23.321F, 3.0F, 21.25F)
          verticalLineTo(6.75F)
          curveTo(3.0F, 4.712F, 4.72F, 3.0F, 6.75F, 3.0F)
          close()
          moveTo(4.5F, 21.25F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(14.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(-19.0F)
          verticalLineToRelative(11.75F)
          close()        
      }
    }
    return _window28!!
  }

private var _window28: ImageVector? = null
