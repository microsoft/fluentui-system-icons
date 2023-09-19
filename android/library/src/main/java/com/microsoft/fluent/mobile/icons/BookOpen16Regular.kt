package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookOpen16: ImageVector
  get() {
    if (_bookOpen16 != null) {
      return _bookOpen16!!
    }
    _bookOpen16 = fluentIcon(name = "Regular.BookOpen16", 16f) {
      materialPath {
          moveTo(2.5F, 2.0F)
          curveTo(1.672F, 2.0F, 1.0F, 2.672F, 1.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(1.0F, 13.328F, 1.672F, 14.0F, 2.5F, 14.0F)
          horizontalLineTo(6.0F)
          curveToRelative(0.818F, 0.0F, 1.544F, -0.393F, 2.0F, -1.0F)
          curveToRelative(0.456F, 0.607F, 1.182F, 1.0F, 2.0F, 1.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          curveTo(15.0F, 2.672F, 14.328F, 2.0F, 13.5F, 2.0F)
          horizontalLineTo(10.0F)
          curveTo(9.182F, 2.0F, 8.456F, 2.393F, 8.0F, 3.0F)
          curveTo(7.544F, 2.393F, 6.818F, 2.0F, 6.0F, 2.0F)
          horizontalLineTo(2.5F)
          close()
          moveToRelative(5.0F, 2.5F)
          verticalLineToRelative(7.0F)
          curveTo(7.5F, 12.328F, 6.828F, 13.0F, 6.0F, 13.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 13.0F, 2.0F, 12.776F, 2.0F, 12.5F)
          verticalLineToRelative(-9.0F)
          curveTo(2.0F, 3.224F, 2.224F, 3.0F, 2.5F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()
          moveToRelative(1.0F, 7.0F)
          verticalLineToRelative(-7.0F)
          curveTo(8.5F, 3.672F, 9.172F, 3.0F, 10.0F, 3.0F)
          horizontalLineToRelative(3.5F)
          curveTo(13.776F, 3.0F, 14.0F, 3.224F, 14.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(10.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          close()        
      }
    }
    return _bookOpen16!!
  }

private var _bookOpen16: ImageVector? = null
