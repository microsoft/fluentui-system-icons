package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BroadActivityFeed16: ImageVector
  get() {
    if (_broadActivityFeed16 != null) {
      return _broadActivityFeed16!!
    }
    _broadActivityFeed16 = fluentIcon(name = "Filled.BroadActivityFeed16", 16f) {
      materialPath {
          moveTo(2.5F, 2.0F)
          curveTo(1.672F, 2.0F, 1.0F, 2.672F, 1.0F, 3.5F)
          verticalLineToRelative(3.0F)
          curveTo(1.0F, 7.328F, 1.672F, 8.0F, 2.5F, 8.0F)
          horizontalLineToRelative(11.0F)
          curveTo(14.328F, 8.0F, 15.0F, 7.328F, 15.0F, 6.5F)
          verticalLineToRelative(-3.0F)
          curveTo(15.0F, 2.672F, 14.328F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(0.0F, 8.0F)
          curveTo(1.672F, 10.0F, 1.0F, 10.67F, 1.0F, 11.5F)
          verticalLineToRelative(1.0F)
          curveTo(1.0F, 13.328F, 1.672F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(3.0F)
          curveTo(6.328F, 14.0F, 7.0F, 13.328F, 7.0F, 12.5F)
          verticalLineToRelative(-1.0F)
          curveTo(7.0F, 10.67F, 6.328F, 10.0F, 5.5F, 10.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(8.0F, 0.0F)
          curveTo(9.672F, 10.0F, 9.0F, 10.67F, 9.0F, 11.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.829F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _broadActivityFeed16!!
  }

private var _broadActivityFeed16: ImageVector? = null
