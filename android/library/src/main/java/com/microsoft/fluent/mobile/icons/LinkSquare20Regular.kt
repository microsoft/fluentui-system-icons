package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LinkSquare20: ImageVector
  get() {
    if (_linkSquare20 != null) {
      return _linkSquare20!!
    }
    _linkSquare20 = fluentIcon(name = "Regular.LinkSquare20", 20f) {
      materialPath {
          moveTo(4.5F, 3.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineToRelative(6.0F)
          curveTo(3.0F, 11.328F, 3.672F, 12.0F, 4.5F, 12.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 13.0F, 2.0F, 11.88F, 2.0F, 10.5F)
          verticalLineToRelative(-6.0F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveTo(11.88F, 2.0F, 13.0F, 3.12F, 13.0F, 4.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-6.0F)
          curveTo(12.0F, 3.672F, 11.328F, 3.0F, 10.5F, 3.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveToRelative(5.0F, 4.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(9.5F)
          curveTo(8.672F, 8.0F, 8.0F, 8.672F, 8.0F, 9.5F)
          verticalLineToRelative(6.0F)
          curveTo(8.0F, 16.328F, 8.672F, 17.0F, 9.5F, 17.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-6.0F)
          curveTo(17.0F, 8.672F, 16.328F, 8.0F, 15.5F, 8.0F)
          horizontalLineTo(14.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(1.5F)
          curveTo(16.88F, 7.0F, 18.0F, 8.12F, 18.0F, 9.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-6.0F)
          curveTo(8.12F, 18.0F, 7.0F, 16.88F, 7.0F, 15.5F)
          verticalLineToRelative(-6.0F)
          curveTo(7.0F, 8.12F, 8.12F, 7.0F, 9.5F, 7.0F)
          close()        
      }
    }
    return _linkSquare20!!
  }

private var _linkSquare20: ImageVector? = null
