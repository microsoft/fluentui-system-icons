package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LockClosed16: ImageVector
  get() {
    if (_lockClosed16 != null) {
      return _lockClosed16!!
    }
    _lockClosed16 = fluentIcon(name = "Regular.LockClosed16", 16f) {
      materialPath {
          moveTo(7.836F, 1.505F)
          lineTo(8.0F, 1.5F)
          curveToRelative(1.325F, 0.0F, 2.41F, 1.031F, 2.495F, 2.336F)
          lineTo(10.5F, 4.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(1.0F)
          curveTo(12.328F, 5.0F, 13.0F, 5.672F, 13.0F, 6.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 14.0F, 3.0F, 13.328F, 3.0F, 12.5F)
          verticalLineToRelative(-6.0F)
          curveTo(3.0F, 5.672F, 3.672F, 5.0F, 4.5F, 5.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.325F, 1.032F, -2.41F, 2.336F, -2.495F)
          close()
          moveTo(11.5F, 6.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(4.224F, 6.0F, 4.0F, 6.224F, 4.0F, 6.5F)
          verticalLineToRelative(6.0F)
          curveTo(4.0F, 12.776F, 4.224F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-6.0F)
          curveTo(12.0F, 6.224F, 11.776F, 6.0F, 11.5F, 6.0F)
          close()
          moveTo(8.0F, 8.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()
          moveToRelative(0.145F, -5.993F)
          lineTo(8.0F, 2.5F)
          curveToRelative(-0.78F, 0.0F, -1.42F, 0.595F, -1.493F, 1.356F)
          lineTo(6.5F, 4.0F)
          verticalLineToRelative(1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.78F, -0.595F, -1.42F, -1.355F, -1.493F)
          close()        
      }
    }
    return _lockClosed16!!
  }

private var _lockClosed16: ImageVector? = null
