package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Shifts16: ImageVector
  get() {
    if (_shifts16 != null) {
      return _shifts16!!
    }
    _shifts16 = fluentIcon(name = "Regular.Shifts16", 16f) {
      materialPath {
          moveTo(7.5F, 4.0F)
          curveTo(7.776F, 4.0F, 8.0F, 4.224F, 8.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(2.5F)
          curveTo(10.776F, 8.0F, 11.0F, 8.224F, 11.0F, 8.5F)
          reflectiveCurveTo(10.776F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(7.224F, 9.0F, 7.0F, 8.776F, 7.0F, 8.5F)
          verticalLineToRelative(-4.0F)
          curveTo(7.0F, 4.224F, 7.224F, 4.0F, 7.5F, 4.0F)
          close()
          moveTo(4.497F, 2.0F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.38F, 1.12F, 2.5F, 2.5F, 2.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(-1.5F, 2.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.828F, -0.671F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineToRelative(-7.0F)
          close()        
      }
    }
    return _shifts16!!
  }

private var _shifts16: ImageVector? = null
