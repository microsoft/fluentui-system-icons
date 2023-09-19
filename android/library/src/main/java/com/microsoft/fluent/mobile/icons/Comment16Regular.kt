package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Comment16: ImageVector
  get() {
    if (_comment16 != null) {
      return _comment16!!
    }
    _comment16 = fluentIcon(name = "Regular.Comment16", 16f) {
      materialPath {
          moveTo(1.0F, 4.5F)
          curveTo(1.0F, 3.12F, 2.12F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(9.0F)
          curveTo(13.88F, 2.0F, 15.0F, 3.12F, 15.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(8.688F)
          lineToRelative(-3.063F, 2.68F)
          curveTo(4.992F, 15.234F, 4.0F, 14.784F, 4.0F, 13.942F)
          verticalLineTo(12.0F)
          horizontalLineTo(3.5F)
          curveTo(2.12F, 12.0F, 1.0F, 10.88F, 1.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(3.5F, 3.0F)
          curveTo(2.672F, 3.0F, 2.0F, 3.672F, 2.0F, 4.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 10.328F, 2.672F, 11.0F, 3.5F, 11.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(2.898F)
          lineTo(8.312F, 11.0F)
          horizontalLineTo(12.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-5.0F)
          curveTo(14.0F, 3.672F, 13.328F, 3.0F, 12.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _comment16!!
  }

private var _comment16: ImageVector? = null
