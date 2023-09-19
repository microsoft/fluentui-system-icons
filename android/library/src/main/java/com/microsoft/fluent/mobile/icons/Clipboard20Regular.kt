package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Clipboard20: ImageVector
  get() {
    if (_clipboard20 != null) {
      return _clipboard20!!
    }
    _clipboard20 = fluentIcon(name = "Regular.Clipboard20", 20f) {
      materialPath {
          moveTo(7.085F, 3.0F)
          curveTo(7.291F, 2.417F, 7.847F, 2.0F, 8.5F, 2.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.653F, 0.0F, 1.209F, 0.417F, 1.415F, 1.0F)
          horizontalLineTo(14.5F)
          curveTo(15.328F, 3.0F, 16.0F, 3.672F, 16.0F, 4.5F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.672F, 18.0F, 4.0F, 17.328F, 4.0F, 16.5F)
          verticalLineToRelative(-12.0F)
          curveTo(4.0F, 3.672F, 4.672F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(1.585F)
          close()
          moveTo(8.5F, 3.0F)
          curveTo(8.224F, 3.0F, 8.0F, 3.224F, 8.0F, 3.5F)
          reflectiveCurveTo(8.224F, 4.0F, 8.5F, 4.0F)
          horizontalLineToRelative(3.0F)
          curveTo(11.776F, 4.0F, 12.0F, 3.776F, 12.0F, 3.5F)
          reflectiveCurveTo(11.776F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveTo(7.085F, 4.0F)
          horizontalLineTo(5.5F)
          curveTo(5.224F, 4.0F, 5.0F, 4.224F, 5.0F, 4.5F)
          verticalLineToRelative(12.0F)
          curveTo(5.0F, 16.776F, 5.224F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-12.0F)
          curveTo(15.0F, 4.224F, 14.776F, 4.0F, 14.5F, 4.0F)
          horizontalLineToRelative(-1.585F)
          curveToRelative(-0.206F, 0.583F, -0.762F, 1.0F, -1.415F, 1.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(7.847F, 5.0F, 7.291F, 4.583F, 7.085F, 4.0F)
          close()        
      }
    }
    return _clipboard20!!
  }

private var _clipboard20: ImageVector? = null
