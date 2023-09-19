package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Bed16: ImageVector
  get() {
    if (_bed16 != null) {
      return _bed16!!
    }
    _bed16 = fluentIcon(name = "Regular.Bed16", 16f) {
      materialPath {
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 3.12F, 4.12F, 2.0F, 5.5F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveTo(11.88F, 2.0F, 13.0F, 3.12F, 13.0F, 4.5F)
          verticalLineToRelative(1.55F)
          curveToRelative(1.141F, 0.232F, 2.0F, 1.24F, 2.0F, 2.45F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(14.0F, 13.776F, 14.0F, 13.5F)
          verticalLineTo(11.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(2.5F)
          curveTo(2.0F, 13.776F, 1.776F, 14.0F, 1.5F, 14.0F)
          reflectiveCurveTo(1.0F, 13.776F, 1.0F, 13.5F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.0F, -1.21F, 0.859F, -2.218F, 2.0F, -2.45F)
          verticalLineTo(4.5F)
          close()
          moveTo(2.0F, 10.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(8.5F)
          curveTo(14.0F, 7.672F, 13.328F, 7.0F, 12.5F, 7.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(2.672F, 7.0F, 2.0F, 7.672F, 2.0F, 8.5F)
          verticalLineTo(10.0F)
          close()
          moveToRelative(10.0F, -5.5F)
          curveTo(12.0F, 3.672F, 11.328F, 3.0F, 10.5F, 3.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(4.672F, 3.0F, 4.0F, 3.672F, 4.0F, 4.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.5F)
          curveTo(5.0F, 5.224F, 5.224F, 5.0F, 5.5F, 5.0F)
          horizontalLineTo(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.5F)
          curveTo(8.5F, 5.224F, 8.724F, 5.0F, 9.0F, 5.0F)
          horizontalLineToRelative(1.5F)
          curveTo(10.776F, 5.0F, 11.0F, 5.224F, 11.0F, 5.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.5F)
          close()        
      }
    }
    return _bed16!!
  }

private var _bed16: ImageVector? = null
