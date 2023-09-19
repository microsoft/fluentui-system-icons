package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DeviceMeetingRoom16: ImageVector
  get() {
    if (_deviceMeetingRoom16 != null) {
      return _deviceMeetingRoom16!!
    }
    _deviceMeetingRoom16 = fluentIcon(name = "Regular.DeviceMeetingRoom16", 16f) {
      materialPath {
          moveTo(4.665F, 2.0F)
          curveTo(3.77F, 2.0F, 2.982F, 2.596F, 2.74F, 3.458F)
          lineTo(1.08F, 9.357F)
          curveTo(0.706F, 10.684F, 1.703F, 12.0F, 3.083F, 12.0F)
          horizontalLineToRelative(9.834F)
          curveToRelative(1.38F, 0.0F, 2.377F, -1.316F, 2.004F, -2.643F)
          lineToRelative(-1.66F, -5.898F)
          curveTo(13.018F, 2.595F, 12.231F, 2.0F, 11.335F, 2.0F)
          horizontalLineToRelative(-6.67F)
          close()
          moveTo(3.702F, 3.73F)
          curveTo(3.824F, 3.297F, 4.217F, 3.0F, 4.665F, 3.0F)
          horizontalLineToRelative(6.67F)
          curveToRelative(0.448F, 0.0F, 0.841F, 0.298F, 0.963F, 0.73F)
          lineToRelative(1.66F, 5.898F)
          curveTo(14.152F, 10.316F, 13.634F, 11.0F, 12.918F, 11.0F)
          horizontalLineTo(3.082F)
          curveToRelative(-0.717F, 0.0F, -1.235F, -0.684F, -1.04F, -1.372F)
          lineToRelative(1.66F, -5.899F)
          close()
          moveTo(4.497F, 13.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(7.005F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(4.497F)
          close()        
      }
    }
    return _deviceMeetingRoom16!!
  }

private var _deviceMeetingRoom16: ImageVector? = null
