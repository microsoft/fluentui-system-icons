package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ListBar20: ImageVector
  get() {
    if (_listBar20 != null) {
      return _listBar20!!
    }
    _listBar20 = fluentIcon(name = "Filled.ListBar20", 20f) {
      materialPath {
          moveTo(8.0F, 17.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(0.0F, -5.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.0F)
          curveTo(17.0F, 8.672F, 16.328F, 8.0F, 15.5F, 8.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(7.0F, 8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 12.0F, 3.0F, 11.328F, 3.0F, 10.5F)
          verticalLineToRelative(-1.0F)
          curveTo(3.0F, 8.672F, 3.672F, 8.0F, 4.5F, 8.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(1.0F, -1.0F)
          horizontalLineToRelative(7.5F)
          curveTo(16.328F, 7.0F, 17.0F, 6.328F, 17.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          curveTo(17.0F, 3.672F, 16.328F, 3.0F, 15.5F, 3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(7.0F, 3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 7.0F, 3.0F, 6.328F, 3.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(0.0F, 10.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 17.0F, 3.0F, 16.328F, 3.0F, 15.5F)
          verticalLineToRelative(-1.0F)
          curveTo(3.0F, 13.672F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _listBar20!!
  }

private var _listBar20: ImageVector? = null
