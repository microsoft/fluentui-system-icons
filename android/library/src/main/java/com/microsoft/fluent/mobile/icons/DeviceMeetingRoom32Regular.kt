package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DeviceMeetingRoom32: ImageVector
  get() {
    if (_deviceMeetingRoom32 != null) {
      return _deviceMeetingRoom32!!
    }
    _deviceMeetingRoom32 = fluentIcon(name = "Regular.DeviceMeetingRoom32", 32f) {
      materialPath {
          moveTo(9.47F, 4.0F)
          curveTo(7.56F, 4.0F, 5.885F, 5.273F, 5.374F, 7.112F)
          lineToRelative(-3.22F, 11.59F)
          curveTo(1.416F, 21.364F, 3.419F, 24.0F, 6.184F, 24.0F)
          horizontalLineToRelative(19.634F)
          curveToRelative(2.765F, 0.0F, 4.768F, -2.635F, 4.028F, -5.299F)
          lineToRelative(-3.22F, -11.588F)
          curveTo(26.116F, 5.273F, 24.44F, 4.0F, 22.53F, 4.0F)
          horizontalLineTo(9.47F)
          close()
          moveTo(7.3F, 7.648F)
          curveTo(7.572F, 6.674F, 8.46F, 6.0F, 9.47F, 6.0F)
          horizontalLineToRelative(13.06F)
          curveToRelative(1.011F, 0.0F, 1.898F, 0.674F, 2.168F, 1.648F)
          lineToRelative(3.22F, 11.588F)
          curveToRelative(0.386F, 1.39F, -0.659F, 2.764F, -2.1F, 2.764F)
          horizontalLineTo(6.182F)
          curveToRelative(-1.442F, 0.0F, -2.487F, -1.374F, -2.1F, -2.764F)
          lineTo(7.3F, 7.649F)
          close()
          moveTo(8.0F, 26.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(16.002F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(7.999F)
          close()        
      }
    }
    return _deviceMeetingRoom32!!
  }

private var _deviceMeetingRoom32: ImageVector? = null
