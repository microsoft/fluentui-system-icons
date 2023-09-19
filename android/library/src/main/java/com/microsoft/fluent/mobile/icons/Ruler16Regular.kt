package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ruler16: ImageVector
  get() {
    if (_ruler16 != null) {
      return _ruler16!!
    }
    _ruler16 = fluentIcon(name = "Regular.Ruler16", 16f) {
      materialPath {
          moveTo(11.0F, 3.5F)
          curveTo(11.0F, 2.672F, 10.328F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(5.672F, 2.0F, 5.0F, 2.672F, 5.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(5.0F, 13.33F, 5.672F, 14.0F, 6.5F, 14.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(9.5F, 3.0F)
          curveTo(9.776F, 3.0F, 10.0F, 3.224F, 10.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.277F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.224F, 13.0F, 6.0F, 12.778F, 6.0F, 12.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(1.5F)
          curveTo(7.776F, 11.0F, 8.0F, 10.776F, 8.0F, 10.5F)
          reflectiveCurveTo(7.776F, 10.0F, 7.5F, 10.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(8.5F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(8.276F, 7.5F, 8.0F, 7.5F)
          horizontalLineTo(6.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(1.5F)
          curveTo(7.776F, 6.0F, 8.0F, 5.776F, 8.0F, 5.5F)
          reflectiveCurveTo(7.776F, 5.0F, 7.5F, 5.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(3.5F)
          curveTo(6.0F, 3.224F, 6.224F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(3.0F)
          close()        
      }
    }
    return _ruler16!!
  }

private var _ruler16: ImageVector? = null
