package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookOpen20: ImageVector
  get() {
    if (_bookOpen20 != null) {
      return _bookOpen20!!
    }
    _bookOpen20 = fluentIcon(name = "Regular.BookOpen20", 20f) {
      materialPath {
          moveTo(10.0F, 16.0F)
          curveToRelative(-0.456F, 0.607F, -1.182F, 1.0F, -2.0F, 1.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 17.0F, 2.0F, 16.328F, 2.0F, 15.5F)
          verticalLineToRelative(-11.0F)
          curveTo(2.0F, 3.672F, 2.672F, 3.0F, 3.5F, 3.0F)
          horizontalLineTo(8.0F)
          curveToRelative(0.818F, 0.0F, 1.544F, 0.393F, 2.0F, 1.0F)
          curveToRelative(0.456F, -0.607F, 1.182F, -1.0F, 2.0F, -1.0F)
          horizontalLineToRelative(4.5F)
          curveTo(17.328F, 3.0F, 18.0F, 3.672F, 18.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.818F, 0.0F, -1.544F, -0.393F, -2.0F, -1.0F)
          close()
          moveTo(3.0F, 4.5F)
          verticalLineToRelative(11.0F)
          curveTo(3.0F, 15.776F, 3.224F, 16.0F, 3.5F, 16.0F)
          horizontalLineTo(8.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          curveTo(9.5F, 4.672F, 8.828F, 4.0F, 8.0F, 4.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 4.0F, 3.0F, 4.224F, 3.0F, 4.5F)
          close()
          moveToRelative(7.5F, 10.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          curveTo(17.0F, 4.224F, 16.776F, 4.0F, 16.5F, 4.0F)
          horizontalLineTo(12.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(9.0F)
          close()        
      }
    }
    return _bookOpen20!!
  }

private var _bookOpen20: ImageVector? = null
