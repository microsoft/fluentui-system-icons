package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Grid20: ImageVector
  get() {
    if (_grid20 != null) {
      return _grid20!!
    }
    _grid20 = fluentIcon(name = "Filled.Grid20", 20f) {
      materialPath {
          moveTo(7.5F, 11.0F)
          curveTo(8.328F, 11.0F, 9.0F, 11.672F, 9.0F, 12.5F)
          verticalLineToRelative(4.0F)
          curveTo(9.0F, 17.328F, 8.328F, 18.0F, 7.5F, 18.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(2.672F, 18.0F, 2.0F, 17.328F, 2.0F, 16.5F)
          verticalLineToRelative(-4.0F)
          curveTo(2.0F, 11.672F, 2.672F, 11.0F, 3.5F, 11.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(9.0F, 0.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(-9.0F, -9.0F)
          curveTo(8.328F, 2.0F, 9.0F, 2.672F, 9.0F, 3.5F)
          verticalLineToRelative(4.0F)
          curveTo(9.0F, 8.328F, 8.328F, 9.0F, 7.5F, 9.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(2.672F, 9.0F, 2.0F, 8.328F, 2.0F, 7.5F)
          verticalLineToRelative(-4.0F)
          curveTo(2.0F, 2.672F, 2.672F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(9.0F, 0.0F)
          curveTo(17.328F, 2.0F, 18.0F, 2.672F, 18.0F, 3.5F)
          verticalLineToRelative(4.0F)
          curveTo(18.0F, 8.328F, 17.328F, 9.0F, 16.5F, 9.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(11.672F, 9.0F, 11.0F, 8.328F, 11.0F, 7.5F)
          verticalLineToRelative(-4.0F)
          curveTo(11.0F, 2.672F, 11.672F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(4.0F)
          close()        
      }
    }
    return _grid20!!
  }

private var _grid20: ImageVector? = null
