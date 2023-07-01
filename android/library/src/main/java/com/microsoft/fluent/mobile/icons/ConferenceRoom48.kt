package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ConferenceRoom48: ImageVector
  get() {
    if (_conferenceRoom48 != null) {
      return _conferenceRoom48!!
    }
    _conferenceRoom48 = fluentIcon(name = "Regular.ConferenceRoom48", 48f) {
      materialPath {
          moveTo(22.503F, 7.776F)
          lineToRelative(14.5F, 3.0F)
          curveTo(37.583F, 10.896F, 38.0F, 11.408F, 38.0F, 12.0F)
          verticalLineToRelative(24.0F)
          curveToRelative(0.0F, 0.593F, -0.416F, 1.104F, -0.997F, 1.224F)
          lineToRelative(-14.5F, 3.0F)
          curveTo(21.727F, 40.386F, 21.0F, 39.794F, 21.0F, 39.002F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.793F, 0.727F, -1.385F, 1.503F, -1.225F)
          close()
          moveTo(18.0F, 10.0F)
          verticalLineToRelative(2.5F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(23.0F)
          horizontalLineTo(18.0F)
          verticalLineTo(38.0F)
          horizontalLineToRelative(-6.75F)
          curveToRelative(-0.647F, 0.0F, -1.18F, -0.491F, -1.243F, -1.122F)
          lineTo(10.0F, 36.751F)
          verticalLineToRelative(-25.5F)
          curveToRelative(0.0F, -0.648F, 0.492F, -1.18F, 1.122F, -1.244F)
          lineTo(11.25F, 10.0F)
          horizontalLineTo(18.0F)
          close()
          moveToRelative(5.5F, 0.536F)
          verticalLineToRelative(26.93F)
          lineToRelative(12.0F, -2.483F)
          verticalLineTo(13.018F)
          lineToRelative(-12.0F, -2.482F)
          close()
          moveToRelative(3.0F, 11.964F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          curveToRelative(0.0F, 0.829F, -0.672F, 1.5F, -1.5F, 1.5F)
          reflectiveCurveTo(25.0F, 24.83F, 25.0F, 24.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          close()        
      }
    }
    return _conferenceRoom48!!
  }

private var _conferenceRoom48: ImageVector? = null
