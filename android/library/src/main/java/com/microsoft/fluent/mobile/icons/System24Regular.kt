package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.System24: ImageVector
  get() {
    if (_system24 != null) {
      return _system24!!
    }
    _system24 = fluentIcon(name = "Regular.System24", 24f) {
      materialPath {
          moveTo(4.75F, 5.0F)
          horizontalLineToRelative(14.5F)
          curveTo(20.769F, 5.0F, 22.0F, 6.231F, 22.0F, 7.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(4.75F)
          curveTo(3.231F, 19.0F, 2.0F, 17.769F, 2.0F, 16.25F)
          verticalLineToRelative(-8.5F)
          curveTo(2.0F, 6.231F, 3.231F, 5.0F, 4.75F, 5.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          curveTo(4.06F, 6.5F, 3.5F, 7.06F, 3.5F, 7.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-8.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(4.75F)
          close()        
      }
    }
    return _system24!!
  }

private var _system24: ImageVector? = null
