package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DeviceMeetingRoom24: ImageVector
  get() {
    if (_deviceMeetingRoom24 != null) {
      return _deviceMeetingRoom24!!
    }
    _deviceMeetingRoom24 = fluentIcon(name = "Regular.DeviceMeetingRoom24", 24f) {
      materialPath {
          moveTo(7.07F, 3.0F)
          curveTo(5.653F, 3.0F, 4.422F, 3.97F, 4.091F, 5.346F)
          lineTo(2.1F, 13.619F)
          curveTo(1.563F, 15.852F, 3.255F, 18.0F, 5.552F, 18.0F)
          horizontalLineToRelative(12.892F)
          curveToRelative(2.296F, 0.0F, 3.989F, -2.148F, 3.45F, -4.38F)
          lineToRelative(-1.99F, -8.274F)
          curveTo(19.571F, 3.97F, 18.34F, 3.0F, 16.925F, 3.0F)
          horizontalLineTo(7.069F)
          close()
          moveTo(5.55F, 5.697F)
          curveTo(5.72F, 4.995F, 6.347F, 4.5F, 7.07F, 4.5F)
          horizontalLineToRelative(9.856F)
          curveToRelative(0.722F, 0.0F, 1.35F, 0.495F, 1.519F, 1.197F)
          lineToRelative(1.992F, 8.273F)
          curveToRelative(0.31F, 1.29F, -0.667F, 2.53F, -1.994F, 2.53F)
          horizontalLineTo(5.553F)
          curveToRelative(-1.327F, 0.0F, -2.304F, -1.24F, -1.993F, -2.53F)
          lineToRelative(1.99F, -8.273F)
          close()
          moveTo(6.748F, 19.0F)
          curveToRelative(-0.415F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.335F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(17.662F, 19.0F, 17.248F, 19.0F)
          horizontalLineToRelative(-10.5F)
          close()        
      }
    }
    return _deviceMeetingRoom24!!
  }

private var _deviceMeetingRoom24: ImageVector? = null
