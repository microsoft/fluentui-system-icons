package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shapes16: ImageVector
  get() {
    if (_shapes16 != null) {
      return _shapes16!!
    }
    _shapes16 = fluentIcon(name = "Filled.Shapes16", 16f) {
      materialPath {
          moveTo(1.0F, 5.5F)
          curveTo(1.0F, 3.015F, 3.015F, 1.0F, 5.5F, 1.0F)
          curveToRelative(2.316F, 0.0F, 4.224F, 1.75F, 4.473F, 4.0F)
          horizontalLineTo(8.5F)
          curveTo(6.567F, 5.0F, 5.0F, 6.567F, 5.0F, 8.5F)
          verticalLineToRelative(1.473F)
          curveTo(2.75F, 9.723F, 1.0F, 7.816F, 1.0F, 5.5F)
          close()
          moveTo(8.5F, 6.0F)
          curveTo(7.12F, 6.0F, 6.0F, 7.12F, 6.0F, 8.5F)
          verticalLineToRelative(4.0F)
          curveTo(6.0F, 13.88F, 7.12F, 15.0F, 8.5F, 15.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-4.0F)
          curveTo(15.0F, 7.12F, 13.88F, 6.0F, 12.5F, 6.0F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _shapes16!!
  }

private var _shapes16: ImageVector? = null
