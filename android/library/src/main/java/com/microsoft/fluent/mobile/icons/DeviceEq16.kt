package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DeviceEq16: ImageVector
  get() {
    if (_deviceEq16 != null) {
      return _deviceEq16!!
    }
    _deviceEq16 = fluentIcon(name = "Regular.DeviceEq16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(11.0F)
          curveTo(8.5F, 13.776F, 8.276F, 14.0F, 8.0F, 14.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          curveTo(7.5F, 2.224F, 7.724F, 2.0F, 8.0F, 2.0F)
          close()
          moveToRelative(2.5F, 2.0F)
          curveTo(10.776F, 4.0F, 11.0F, 4.224F, 11.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(10.0F, 11.776F, 10.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          curveTo(10.0F, 4.224F, 10.224F, 4.0F, 10.5F, 4.0F)
          close()
          moveTo(6.0F, 4.5F)
          curveTo(6.0F, 4.224F, 5.776F, 4.0F, 5.5F, 4.0F)
          reflectiveCurveTo(5.0F, 4.224F, 5.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(5.0F, 11.776F, 5.224F, 12.0F, 5.5F, 12.0F)
          reflectiveCurveTo(6.0F, 11.776F, 6.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(13.5F, 6.0F)
          curveTo(13.776F, 6.0F, 14.0F, 6.224F, 14.0F, 6.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(13.0F, 9.776F, 13.0F, 9.5F)
          verticalLineToRelative(-3.0F)
          curveTo(13.0F, 6.224F, 13.224F, 6.0F, 13.5F, 6.0F)
          close()
          moveTo(3.0F, 6.5F)
          curveTo(3.0F, 6.224F, 2.776F, 6.0F, 2.5F, 6.0F)
          reflectiveCurveTo(2.0F, 6.224F, 2.0F, 6.5F)
          verticalLineToRelative(3.0F)
          curveTo(2.0F, 9.776F, 2.224F, 10.0F, 2.5F, 10.0F)
          reflectiveCurveTo(3.0F, 9.776F, 3.0F, 9.5F)
          verticalLineToRelative(-3.0F)
          close()        
      }
    }
    return _deviceEq16!!
  }

private var _deviceEq16: ImageVector? = null
