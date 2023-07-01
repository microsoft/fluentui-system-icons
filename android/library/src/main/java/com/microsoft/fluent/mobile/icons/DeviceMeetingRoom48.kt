package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DeviceMeetingRoom48: ImageVector
  get() {
    if (_deviceMeetingRoom48 != null) {
      return _deviceMeetingRoom48!!
    }
    _deviceMeetingRoom48 = fluentIcon(name = "Filled.DeviceMeetingRoom48", 48f) {
      materialPath {
          moveTo(8.97F, 10.403F)
          curveTo(9.666F, 7.806F, 12.019F, 6.0F, 14.708F, 6.0F)
          horizontalLineToRelative(18.586F)
          curveToRelative(2.689F, 0.0F, 5.041F, 1.806F, 5.736F, 4.403F)
          lineToRelative(4.756F, 17.769F)
          curveToRelative(1.057F, 3.95F, -1.92F, 7.828F, -6.009F, 7.828F)
          horizontalLineTo(10.224F)
          curveToRelative(-4.09F, 0.0F, -7.066F, -3.878F, -6.01F, -7.828F)
          lineToRelative(4.757F, -17.77F)
          close()
          moveTo(13.25F, 38.0F)
          curveTo(12.56F, 38.0F, 12.0F, 38.56F, 12.0F, 39.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(21.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(35.44F, 38.0F, 34.75F, 38.0F)
          horizontalLineToRelative(-21.5F)
          close()        
      }
    }
    return _deviceMeetingRoom48!!
  }

private var _deviceMeetingRoom48: ImageVector? = null
