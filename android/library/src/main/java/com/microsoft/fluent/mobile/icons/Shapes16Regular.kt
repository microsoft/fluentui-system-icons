package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Shapes16: ImageVector
  get() {
    if (_shapes16 != null) {
      return _shapes16!!
    }
    _shapes16 = fluentIcon(name = "Regular.Shapes16", 16f) {
      materialPath {
          moveTo(5.5F, 2.0F)
          curveTo(3.567F, 2.0F, 2.0F, 3.567F, 2.0F, 5.5F)
          curveToRelative(0.0F, 1.763F, 1.304F, 3.222F, 3.0F, 3.465F)
          verticalLineToRelative(1.008F)
          curveTo(2.75F, 9.723F, 1.0F, 7.816F, 1.0F, 5.5F)
          curveTo(1.0F, 3.015F, 3.015F, 1.0F, 5.5F, 1.0F)
          curveToRelative(2.316F, 0.0F, 4.224F, 1.75F, 4.473F, 4.0F)
          horizontalLineTo(8.965F)
          curveTo(8.722F, 3.304F, 7.263F, 2.0F, 5.5F, 2.0F)
          close()
          moveToRelative(3.0F, 4.0F)
          curveTo(7.12F, 6.0F, 6.0F, 7.12F, 6.0F, 8.5F)
          verticalLineToRelative(4.0F)
          curveTo(6.0F, 13.88F, 7.12F, 15.0F, 8.5F, 15.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-4.0F)
          curveTo(15.0F, 7.12F, 13.88F, 6.0F, 12.5F, 6.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveTo(7.0F, 8.5F)
          curveTo(7.0F, 7.672F, 7.672F, 7.0F, 8.5F, 7.0F)
          horizontalLineToRelative(4.0F)
          curveTo(13.328F, 7.0F, 14.0F, 7.672F, 14.0F, 8.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-4.0F)
          curveTo(7.672F, 14.0F, 7.0F, 13.328F, 7.0F, 12.5F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _shapes16!!
  }

private var _shapes16: ImageVector? = null
