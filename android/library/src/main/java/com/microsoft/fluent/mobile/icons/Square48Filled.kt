package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Square48: ImageVector
  get() {
    if (_square48 != null) {
      return _square48!!
    }
    _square48 = fluentIcon(name = "Filled.Square48", 48f) {
      materialPath {
          moveTo(6.0F, 12.25F)
          curveTo(6.0F, 8.798F, 8.798F, 6.0F, 12.25F, 6.0F)
          horizontalLineToRelative(23.5F)
          curveTo(39.202F, 6.0F, 42.0F, 8.798F, 42.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveToRelative(0.0F, 3.452F, -2.798F, 6.25F, -6.25F, 6.25F)
          horizontalLineToRelative(-23.5F)
          curveTo(8.798F, 42.0F, 6.0F, 39.202F, 6.0F, 35.75F)
          verticalLineToRelative(-23.5F)
          close()        
      }
    }
    return _square48!!
  }

private var _square48: ImageVector? = null
