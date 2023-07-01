package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DeviceMeetingRoom24: ImageVector
  get() {
    if (_deviceMeetingRoom24 != null) {
      return _deviceMeetingRoom24!!
    }
    _deviceMeetingRoom24 = fluentIcon(name = "Filled.DeviceMeetingRoom24", 24f) {
      materialPath {
          moveTo(4.093F, 5.346F)
          curveTo(4.423F, 3.97F, 5.655F, 3.0F, 7.07F, 3.0F)
          horizontalLineToRelative(9.858F)
          curveToRelative(1.416F, 0.0F, 2.647F, 0.97F, 2.979F, 2.346F)
          lineToRelative(1.992F, 8.273F)
          curveTo(22.437F, 15.852F, 20.745F, 18.0F, 18.448F, 18.0F)
          horizontalLineTo(5.552F)
          curveToRelative(-2.297F, 0.0F, -3.99F, -2.148F, -3.452F, -4.38F)
          lineToRelative(1.993F, -8.274F)
          close()
          moveTo(6.748F, 19.0F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.335F, 0.75F, 0.75F, 0.75F)
          horizontalLineTo(17.25F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(17.666F, 19.0F, 17.251F, 19.0F)
          horizontalLineTo(6.75F)
          close()        
      }
    }
    return _deviceMeetingRoom24!!
  }

private var _deviceMeetingRoom24: ImageVector? = null
