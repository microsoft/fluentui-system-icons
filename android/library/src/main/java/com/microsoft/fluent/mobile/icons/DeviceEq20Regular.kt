package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DeviceEq20: ImageVector
  get() {
    if (_deviceEq20 != null) {
      return _deviceEq20!!
    }
    _deviceEq20 = fluentIcon(name = "Regular.DeviceEq20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-15.0F)
          curveTo(9.5F, 2.224F, 9.724F, 2.0F, 10.0F, 2.0F)
          close()
          moveToRelative(3.5F, 3.0F)
          curveTo(13.776F, 5.0F, 14.0F, 5.224F, 14.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(13.0F, 14.776F, 13.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          curveTo(13.0F, 5.224F, 13.224F, 5.0F, 13.5F, 5.0F)
          close()
          moveTo(7.0F, 5.5F)
          curveTo(7.0F, 5.224F, 6.776F, 5.0F, 6.5F, 5.0F)
          reflectiveCurveTo(6.0F, 5.224F, 6.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(6.0F, 14.776F, 6.224F, 15.0F, 6.5F, 15.0F)
          reflectiveCurveTo(7.0F, 14.776F, 7.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveTo(16.5F, 8.0F)
          curveTo(16.776F, 8.0F, 17.0F, 8.224F, 17.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(16.0F, 11.776F, 16.0F, 11.5F)
          verticalLineToRelative(-3.0F)
          curveTo(16.0F, 8.224F, 16.224F, 8.0F, 16.5F, 8.0F)
          close()
          moveTo(4.0F, 8.5F)
          curveTo(4.0F, 8.224F, 3.776F, 8.0F, 3.5F, 8.0F)
          reflectiveCurveTo(3.0F, 8.224F, 3.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveTo(3.0F, 11.776F, 3.224F, 12.0F, 3.5F, 12.0F)
          reflectiveCurveTo(4.0F, 11.776F, 4.0F, 11.5F)
          verticalLineToRelative(-3.0F)
          close()        
      }
    }
    return _deviceEq20!!
  }

private var _deviceEq20: ImageVector? = null
