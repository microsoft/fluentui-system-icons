package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Grid16: ImageVector
  get() {
    if (_grid16 != null) {
      return _grid16!!
    }
    _grid16 = fluentIcon(name = "Filled.Grid16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.672F, 2.0F, 2.0F, 2.672F, 2.0F, 3.5F)
          verticalLineToRelative(2.0F)
          curveTo(2.0F, 6.328F, 2.672F, 7.0F, 3.5F, 7.0F)
          horizontalLineToRelative(2.0F)
          curveTo(6.328F, 7.0F, 7.0F, 6.328F, 7.0F, 5.5F)
          verticalLineToRelative(-2.0F)
          curveTo(7.0F, 2.672F, 6.328F, 2.0F, 5.5F, 2.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveToRelative(7.0F, 0.0F)
          curveTo(9.672F, 2.0F, 9.0F, 2.672F, 9.0F, 3.5F)
          verticalLineToRelative(2.0F)
          curveTo(9.0F, 6.328F, 9.672F, 7.0F, 10.5F, 7.0F)
          horizontalLineToRelative(2.0F)
          curveTo(13.328F, 7.0F, 14.0F, 6.328F, 14.0F, 5.5F)
          verticalLineToRelative(-2.0F)
          curveTo(14.0F, 2.672F, 13.328F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveToRelative(-7.0F, 7.0F)
          curveTo(2.672F, 9.0F, 2.0F, 9.672F, 2.0F, 10.5F)
          verticalLineToRelative(2.0F)
          curveTo(2.0F, 13.328F, 2.672F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(2.0F)
          curveTo(6.328F, 14.0F, 7.0F, 13.328F, 7.0F, 12.5F)
          verticalLineToRelative(-2.0F)
          curveTo(7.0F, 9.672F, 6.328F, 9.0F, 5.5F, 9.0F)
          horizontalLineToRelative(-2.0F)
          close()
          moveToRelative(7.0F, 0.0F)
          curveTo(9.672F, 9.0F, 9.0F, 9.672F, 9.0F, 10.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-2.0F)
          curveTo(14.0F, 9.672F, 13.328F, 9.0F, 12.5F, 9.0F)
          horizontalLineToRelative(-2.0F)
          close()        
      }
    }
    return _grid16!!
  }

private var _grid16: ImageVector? = null
