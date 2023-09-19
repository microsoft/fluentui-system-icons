package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Print20: ImageVector
  get() {
    if (_print20 != null) {
      return _print20!!
    }
    _print20 = fluentIcon(name = "Filled.Print20", 20f) {
      materialPath {
          moveTo(5.0F, 4.5F)
          curveTo(5.0F, 3.672F, 5.672F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(14.328F, 3.0F, 15.0F, 3.672F, 15.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(0.5F)
          curveTo(16.88F, 5.0F, 18.0F, 6.12F, 18.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(5.672F, 17.0F, 5.0F, 16.328F, 5.0F, 15.5F)
          verticalLineTo(14.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 14.0F, 2.0F, 13.328F, 2.0F, 12.5F)
          verticalLineToRelative(-5.0F)
          curveTo(2.0F, 6.12F, 3.12F, 5.0F, 4.5F, 5.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(4.5F)
          close()
          moveToRelative(9.0F, 0.0F)
          curveTo(14.0F, 4.224F, 13.776F, 4.0F, 13.5F, 4.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 4.0F, 6.0F, 4.224F, 6.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(8.0F)
          verticalLineTo(4.5F)
          close()
          moveToRelative(-8.0F, 7.0F)
          verticalLineToRelative(4.0F)
          curveTo(6.0F, 15.776F, 6.224F, 16.0F, 6.5F, 16.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 11.0F, 6.0F, 11.224F, 6.0F, 11.5F)
          close()        
      }
    }
    return _print20!!
  }

private var _print20: ImageVector? = null
