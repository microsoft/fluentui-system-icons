package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Album20: ImageVector
  get() {
    if (_album20 != null) {
      return _album20!!
    }
    _album20 = fluentIcon(name = "Filled.Album20", 20f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(7.0F, 2.5F)
          curveTo(9.0F, 8.224F, 9.224F, 8.0F, 9.5F, 8.0F)
          horizontalLineToRelative(4.0F)
          curveTo(13.776F, 8.0F, 14.0F, 8.224F, 14.0F, 8.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-4.0F)
          curveTo(9.224F, 10.0F, 9.0F, 9.776F, 9.0F, 9.5F)
          verticalLineToRelative(-1.0F)
          close()
          moveTo(5.0F, 16.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(4.5F, -9.0F)
          curveTo(8.672F, 7.0F, 8.0F, 7.672F, 8.0F, 8.5F)
          verticalLineToRelative(1.0F)
          curveTo(8.0F, 10.328F, 8.672F, 11.0F, 9.5F, 11.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.0F)
          curveTo(15.0F, 7.672F, 14.328F, 7.0F, 13.5F, 7.0F)
          horizontalLineToRelative(-4.0F)
          close()        
      }
    }
    return _album20!!
  }

private var _album20: ImageVector? = null
