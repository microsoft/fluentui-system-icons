package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DeviceMeetingRoom20: ImageVector
  get() {
    if (_deviceMeetingRoom20 != null) {
      return _deviceMeetingRoom20!!
    }
    _deviceMeetingRoom20 = fluentIcon(name = "Filled.DeviceMeetingRoom20", 20f) {
      materialPath {
          moveTo(3.658F, 4.946F)
          curveTo(3.917F, 3.808F, 4.928F, 3.0F, 6.096F, 3.0F)
          horizontalLineToRelative(7.807F)
          curveToRelative(1.167F, 0.0F, 2.18F, 0.808F, 2.438F, 1.946F)
          lineToRelative(1.59F, 7.0F)
          curveTo(18.288F, 13.51F, 17.099F, 15.0F, 15.495F, 15.0F)
          horizontalLineTo(4.505F)
          curveToRelative(-1.604F, 0.0F, -2.793F, -1.49F, -2.438F, -3.054F)
          lineToRelative(1.591F, -7.0F)
          close()
          moveTo(5.5F, 16.0F)
          curveTo(5.223F, 16.0F, 5.0F, 16.224F, 5.0F, 16.5F)
          reflectiveCurveTo(5.223F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.775F, 16.0F, 14.5F, 16.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _deviceMeetingRoom20!!
  }

private var _deviceMeetingRoom20: ImageVector? = null
