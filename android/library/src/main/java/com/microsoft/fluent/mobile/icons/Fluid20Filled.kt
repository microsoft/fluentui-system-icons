package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Fluid20: ImageVector
  get() {
    if (_fluid20 != null) {
      return _fluid20!!
    }
    _fluid20 = fluentIcon(name = "Filled.Fluid20", 20f) {
      materialPath {
          moveTo(2.0F, 3.5F)
          curveTo(2.0F, 2.672F, 2.672F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(2.0F)
          curveTo(6.328F, 2.0F, 7.0F, 2.672F, 7.0F, 3.5F)
          verticalLineToRelative(2.043F)
          curveToRelative(0.0F, 0.829F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.671F, -1.5F, -1.5F)
          verticalLineTo(3.5F)
          close()
          moveTo(8.0F, 4.0F)
          horizontalLineToRelative(5.5F)
          curveTo(14.328F, 4.0F, 15.0F, 4.672F, 15.0F, 5.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(5.5F)
          curveTo(14.0F, 5.224F, 13.776F, 5.0F, 13.5F, 5.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(4.0F)
          close()
          moveTo(5.0F, 8.0F)
          verticalLineToRelative(5.5F)
          curveTo(5.0F, 13.776F, 5.224F, 14.0F, 5.5F, 14.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 15.0F, 4.0F, 14.328F, 4.0F, 13.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(1.0F)
          close()
          moveToRelative(6.504F, 2.0F)
          curveToRelative(-0.829F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, 0.671F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-5.0F)
          close()        
      }
    }
    return _fluid20!!
  }

private var _fluid20: ImageVector? = null
