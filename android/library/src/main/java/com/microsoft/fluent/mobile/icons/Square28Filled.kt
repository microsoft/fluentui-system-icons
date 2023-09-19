package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Square28: ImageVector
  get() {
    if (_square28 != null) {
      return _square28!!
    }
    _square28 = fluentIcon(name = "Filled.Square28", 28f) {
      materialPath {
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 4.679F, 4.679F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(14.5F)
          curveTo(23.321F, 3.0F, 25.0F, 4.679F, 25.0F, 6.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(6.75F)
          curveTo(4.679F, 25.0F, 3.0F, 23.321F, 3.0F, 21.25F)
          verticalLineTo(6.75F)
          close()        
      }
    }
    return _square28!!
  }

private var _square28: ImageVector? = null
