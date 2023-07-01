package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DualScreen20: ImageVector
  get() {
    if (_dualScreen20 != null) {
      return _dualScreen20!!
    }
    _dualScreen20 = fluentIcon(name = "Regular.DualScreen20", 20f) {
      materialPath {
          moveTo(6.0F, 13.5F)
          curveTo(6.0F, 13.224F, 6.224F, 13.0F, 6.5F, 13.0F)
          horizontalLineToRelative(1.0F)
          curveTo(7.776F, 13.0F, 8.0F, 13.224F, 8.0F, 13.5F)
          reflectiveCurveTo(7.776F, 14.0F, 7.5F, 14.0F)
          horizontalLineToRelative(-1.0F)
          curveTo(6.224F, 14.0F, 6.0F, 13.776F, 6.0F, 13.5F)
          close()
          moveToRelative(6.5F, -0.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 13.0F, 13.5F, 13.0F)
          horizontalLineToRelative(-1.0F)
          close()
          moveTo(4.0F, 4.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveToRelative(5.5F, 1.0F)
          horizontalLineTo(4.0F)
          curveTo(3.448F, 5.0F, 3.0F, 5.448F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(1.0F, 10.0F)
          horizontalLineTo(16.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(10.0F)
          close()        
      }
    }
    return _dualScreen20!!
  }

private var _dualScreen20: ImageVector? = null
