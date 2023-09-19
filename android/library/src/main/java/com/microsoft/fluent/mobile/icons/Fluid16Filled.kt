package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Fluid16: ImageVector
  get() {
    if (_fluid16 != null) {
      return _fluid16!!
    }
    _fluid16 = fluentIcon(name = "Filled.Fluid16", 16f) {
      materialPath {
          moveTo(1.0F, 2.5F)
          curveTo(1.0F, 1.672F, 1.672F, 1.0F, 2.5F, 1.0F)
          horizontalLineToRelative(2.0F)
          curveTo(5.328F, 1.0F, 6.0F, 1.672F, 6.0F, 2.5F)
          verticalLineToRelative(2.0F)
          curveTo(6.0F, 5.328F, 5.328F, 6.0F, 4.5F, 6.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(1.672F, 6.0F, 1.0F, 5.328F, 1.0F, 4.5F)
          verticalLineToRelative(-2.0F)
          close()
          moveToRelative(7.0F, 7.0F)
          curveTo(8.0F, 8.67F, 8.673F, 8.0F, 9.5F, 8.0F)
          horizontalLineToRelative(4.0F)
          curveTo(14.33F, 8.0F, 15.0F, 8.67F, 15.0F, 9.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.828F, -0.671F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-4.0F)
          curveTo(8.673F, 15.0F, 8.0F, 14.328F, 8.0F, 13.5F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(-5.0F, 1.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(3.5F)
          curveTo(4.0F, 10.776F, 4.224F, 11.0F, 4.5F, 11.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 12.0F, 3.0F, 11.328F, 3.0F, 10.5F)
          close()
          moveTo(7.0F, 3.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(3.5F)
          curveTo(10.777F, 4.0F, 11.0F, 4.224F, 11.0F, 4.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.5F)
          curveTo(12.0F, 3.672F, 11.33F, 3.0F, 10.5F, 3.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _fluid16!!
  }

private var _fluid16: ImageVector? = null
