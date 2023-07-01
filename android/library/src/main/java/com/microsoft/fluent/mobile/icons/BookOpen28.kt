package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookOpen28: ImageVector
  get() {
    if (_bookOpen28 != null) {
      return _bookOpen28!!
    }
    _bookOpen28 = fluentIcon(name = "Filled.BookOpen28", 28f) {
      materialPath {
          moveTo(11.5F, 4.0F)
          curveToRelative(0.98F, 0.0F, 1.865F, 0.402F, 2.5F, 1.05F)
          curveTo(14.635F, 4.403F, 15.52F, 4.0F, 16.5F, 4.0F)
          horizontalLineTo(24.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(16.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.98F, 0.0F, -1.865F, -0.402F, -2.5F, -1.05F)
          curveToRelative(-0.635F, 0.648F, -1.52F, 1.05F, -2.5F, 1.05F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveTo(13.0F, 20.5F)
          verticalLineToRelative(-13.0F)
          curveTo(13.0F, 6.672F, 12.328F, 6.0F, 11.5F, 6.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(16.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          close()
          moveToRelative(2.0F, -13.0F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineTo(24.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(15.672F, 6.0F, 15.0F, 6.672F, 15.0F, 7.5F)
          close()        
      }
    }
    return _bookOpen28!!
  }

private var _bookOpen28: ImageVector? = null
