package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LockOpen16: ImageVector
  get() {
    if (_lockOpen16 != null) {
      return _lockOpen16!!
    }
    _lockOpen16 = fluentIcon(name = "Regular.LockOpen16", 16f) {
      materialPath {
          moveTo(8.0F, 11.5F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()
          moveToRelative(0.0F, -9.0F)
          curveTo(7.172F, 2.5F, 6.5F, 3.172F, 6.5F, 4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(5.0F)
          curveTo(12.328F, 6.0F, 13.0F, 6.672F, 13.0F, 7.5F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(3.672F, 15.0F, 3.0F, 14.328F, 3.0F, 13.5F)
          verticalLineToRelative(-6.0F)
          curveTo(3.0F, 6.672F, 3.672F, 6.0F, 4.5F, 6.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.38F, 1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(9.5F, 4.276F, 9.5F, 4.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          close()
          moveTo(4.5F, 7.0F)
          curveTo(4.224F, 7.0F, 4.0F, 7.224F, 4.0F, 7.5F)
          verticalLineToRelative(6.0F)
          curveTo(4.0F, 13.776F, 4.224F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-6.0F)
          curveTo(12.0F, 7.224F, 11.776F, 7.0F, 11.5F, 7.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _lockOpen16!!
  }

private var _lockOpen16: ImageVector? = null
