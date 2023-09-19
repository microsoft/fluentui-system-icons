package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Archive16: ImageVector
  get() {
    if (_archive16 != null) {
      return _archive16!!
    }
    _archive16 = fluentIcon(name = "Regular.Archive16", 16f) {
      materialPath {
          moveTo(6.5F, 8.0F)
          curveTo(6.224F, 8.0F, 6.0F, 8.224F, 6.0F, 8.5F)
          reflectiveCurveTo(6.224F, 9.0F, 6.5F, 9.0F)
          horizontalLineToRelative(3.0F)
          curveTo(9.776F, 9.0F, 10.0F, 8.776F, 10.0F, 8.5F)
          reflectiveCurveTo(9.776F, 8.0F, 9.5F, 8.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveTo(1.0F, 3.5F)
          curveTo(1.0F, 2.672F, 1.672F, 2.0F, 2.5F, 2.0F)
          horizontalLineToRelative(11.0F)
          curveTo(14.328F, 2.0F, 15.0F, 2.672F, 15.0F, 3.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.653F, -0.417F, 1.209F, -1.0F, 1.415F)
          verticalLineTo(11.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineTo(5.915F)
          curveTo(1.417F, 5.709F, 1.0F, 5.153F, 1.0F, 4.5F)
          verticalLineToRelative(-1.0F)
          close()
          moveTo(2.5F, 3.0F)
          curveTo(2.224F, 3.0F, 2.0F, 3.224F, 2.0F, 3.5F)
          verticalLineToRelative(1.0F)
          curveTo(2.0F, 4.776F, 2.224F, 5.0F, 2.5F, 5.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 5.0F, 14.0F, 4.776F, 14.0F, 4.5F)
          verticalLineToRelative(-1.0F)
          curveTo(14.0F, 3.224F, 13.776F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveTo(3.0F, 6.0F)
          verticalLineToRelative(5.5F)
          curveTo(3.0F, 12.328F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _archive16!!
  }

private var _archive16: ImageVector? = null
