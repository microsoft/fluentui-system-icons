package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DeviceMeetingRoom32: ImageVector
  get() {
    if (_deviceMeetingRoom32 != null) {
      return _deviceMeetingRoom32!!
    }
    _deviceMeetingRoom32 = fluentIcon(name = "Filled.DeviceMeetingRoom32", 32f) {
      materialPath {
          moveTo(5.374F, 7.112F)
          curveTo(5.885F, 5.274F, 7.56F, 4.0F, 9.47F, 4.0F)
          horizontalLineToRelative(13.06F)
          curveToRelative(1.91F, 0.0F, 3.585F, 1.273F, 4.096F, 3.112F)
          lineToRelative(3.22F, 11.59F)
          curveTo(30.584F, 21.364F, 28.581F, 24.0F, 25.816F, 24.0F)
          horizontalLineTo(6.183F)
          curveToRelative(-2.765F, 0.0F, -4.768F, -2.635F, -4.028F, -5.299F)
          lineToRelative(3.22F, -11.588F)
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
