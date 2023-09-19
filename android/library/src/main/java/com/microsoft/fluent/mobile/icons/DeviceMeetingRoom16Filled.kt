package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DeviceMeetingRoom16: ImageVector
  get() {
    if (_deviceMeetingRoom16 != null) {
      return _deviceMeetingRoom16!!
    }
    _deviceMeetingRoom16 = fluentIcon(name = "Filled.DeviceMeetingRoom16", 16f) {
      materialPath {
          moveTo(2.739F, 3.458F)
          curveTo(2.982F, 2.596F, 3.769F, 2.0F, 4.665F, 2.0F)
          horizontalLineToRelative(6.67F)
          curveToRelative(0.896F, 0.0F, 1.683F, 0.596F, 1.926F, 1.458F)
          lineToRelative(1.66F, 5.899F)
          curveTo(15.294F, 10.684F, 14.297F, 12.0F, 12.917F, 12.0F)
          horizontalLineTo(3.083F)
          curveToRelative(-1.38F, 0.0F, -2.377F, -1.316F, -2.004F, -2.643F)
          lineToRelative(1.66F, -5.898F)
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
