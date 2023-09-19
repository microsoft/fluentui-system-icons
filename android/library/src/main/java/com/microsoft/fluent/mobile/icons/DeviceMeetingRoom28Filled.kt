package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DeviceMeetingRoom28: ImageVector
  get() {
    if (_deviceMeetingRoom28 != null) {
      return _deviceMeetingRoom28!!
    }
    _deviceMeetingRoom28 = fluentIcon(name = "Filled.DeviceMeetingRoom28", 28f) {
      materialPath {
          moveTo(4.972F, 5.58F)
          curveTo(5.387F, 4.055F, 6.77F, 3.0F, 8.349F, 3.0F)
          horizontalLineToRelative(11.302F)
          curveToRelative(1.579F, 0.0F, 2.962F, 1.056F, 3.377F, 2.58F)
          lineToRelative(2.829F, 10.367F)
          curveTo(26.55F, 18.492F, 24.635F, 21.0F, 21.997F, 21.0F)
          horizontalLineTo(6.003F)
          curveToRelative(-2.638F, 0.0F, -4.554F, -2.508F, -3.86F, -5.053F)
          lineTo(4.972F, 5.58F)
          close()
          moveTo(7.748F, 22.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(7.334F, 24.0F, 7.748F, 24.0F)
          horizontalLineToRelative(12.503F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.335F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(7.748F)
          close()        
      }
    }
    return _deviceMeetingRoom28!!
  }

private var _deviceMeetingRoom28: ImageVector? = null
