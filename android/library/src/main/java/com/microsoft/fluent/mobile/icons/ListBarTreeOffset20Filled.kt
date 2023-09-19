package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ListBarTreeOffset20: ImageVector
  get() {
    if (_listBarTreeOffset20 != null) {
      return _listBarTreeOffset20!!
    }
    _listBarTreeOffset20 = fluentIcon(name = "Filled.ListBarTreeOffset20", 20f) {
      materialPath {
          moveTo(8.0F, 7.0F)
          horizontalLineToRelative(7.5F)
          curveTo(16.328F, 7.0F, 17.0F, 6.328F, 17.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          curveTo(17.0F, 3.672F, 16.328F, 3.0F, 15.5F, 3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(7.0F, 3.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineToRelative(1.0F)
          curveTo(3.0F, 6.328F, 3.672F, 7.0F, 4.5F, 7.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(3.0F, 9.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-1.0F)
          curveTo(17.0F, 8.672F, 16.328F, 8.0F, 15.5F, 8.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(9.0F, 8.0F)
          horizontalLineTo(6.5F)
          curveTo(5.672F, 8.0F, 5.0F, 8.672F, 5.0F, 9.5F)
          verticalLineToRelative(1.0F)
          curveTo(5.0F, 11.328F, 5.672F, 12.0F, 6.5F, 12.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(6.5F, 9.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          close()
          moveToRelative(-7.0F, -4.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(8.5F)
          curveTo(7.672F, 17.0F, 7.0F, 16.328F, 7.0F, 15.5F)
          verticalLineToRelative(-1.0F)
          curveTo(7.0F, 13.672F, 7.672F, 13.0F, 8.5F, 13.0F)
          close()        
      }
    }
    return _listBarTreeOffset20!!
  }

private var _listBarTreeOffset20: ImageVector? = null
