package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BroadActivityFeed20: ImageVector
  get() {
    if (_broadActivityFeed20 != null) {
      return _broadActivityFeed20!!
    }
    _broadActivityFeed20 = fluentIcon(name = "Filled.BroadActivityFeed20", 20f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(2.672F, 3.0F, 2.0F, 3.672F, 2.0F, 4.5F)
          verticalLineToRelative(4.0F)
          curveTo(2.0F, 9.328F, 2.672F, 10.0F, 3.5F, 10.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-4.0F)
          curveTo(18.0F, 3.672F, 17.328F, 3.0F, 16.5F, 3.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(0.0F, 9.0F)
          curveTo(2.672F, 12.0F, 2.0F, 12.672F, 2.0F, 13.5F)
          verticalLineToRelative(2.0F)
          curveTo(2.0F, 16.328F, 2.672F, 17.0F, 3.5F, 17.0F)
          horizontalLineToRelative(4.0F)
          curveTo(8.328F, 17.0F, 9.0F, 16.328F, 9.0F, 15.5F)
          verticalLineToRelative(-2.0F)
          curveTo(9.0F, 12.672F, 8.328F, 12.0F, 7.5F, 12.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(9.0F, 0.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-2.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _broadActivityFeed20!!
  }

private var _broadActivityFeed20: ImageVector? = null
