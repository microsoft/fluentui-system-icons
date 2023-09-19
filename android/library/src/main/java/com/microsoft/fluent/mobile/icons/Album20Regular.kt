package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Album20: ImageVector
  get() {
    if (_album20 != null) {
      return _album20!!
    }
    _album20 = fluentIcon(name = "Regular.Album20", 20f) {
      materialPath {
          moveTo(8.0F, 8.5F)
          curveTo(8.0F, 7.672F, 8.672F, 7.0F, 9.5F, 7.0F)
          horizontalLineToRelative(4.0F)
          curveTo(14.328F, 7.0F, 15.0F, 7.672F, 15.0F, 8.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-4.0F)
          curveTo(8.672F, 11.0F, 8.0F, 10.328F, 8.0F, 9.5F)
          verticalLineToRelative(-1.0F)
          close()
          moveTo(9.5F, 8.0F)
          curveTo(9.224F, 8.0F, 9.0F, 8.224F, 9.0F, 8.5F)
          verticalLineToRelative(1.0F)
          curveTo(9.0F, 9.776F, 9.224F, 10.0F, 9.5F, 10.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-1.0F)
          curveTo(14.0F, 8.224F, 13.776F, 8.0F, 13.5F, 8.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(4.0F, 9.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(10.0F)
          close()
          moveTo(5.0F, 5.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 5.0F, 3.0F, 5.448F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.0F)
          close()        
      }
    }
    return _album20!!
  }

private var _album20: ImageVector? = null
