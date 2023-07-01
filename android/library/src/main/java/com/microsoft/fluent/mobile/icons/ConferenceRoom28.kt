package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ConferenceRoom28: ImageVector
  get() {
    if (_conferenceRoom28 != null) {
      return _conferenceRoom28!!
    }
    _conferenceRoom28 = fluentIcon(name = "Filled.ConferenceRoom28", 28f) {
      materialPath {
          moveTo(11.894F, 2.014F)
          lineToRelative(11.5F, 2.25F)
          curveTo(23.746F, 4.334F, 24.0F, 4.642F, 24.0F, 5.0F)
          verticalLineToRelative(18.0F)
          curveToRelative(0.0F, 0.359F, -0.254F, 0.667F, -0.606F, 0.736F)
          lineToRelative(-11.5F, 2.25F)
          curveTo(11.431F, 26.076F, 11.0F, 25.722F, 11.0F, 25.25F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.472F, 0.43F, -0.826F, 0.894F, -0.736F)
          close()
          moveTo(15.0F, 13.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          curveToRelative(0.0F, 0.553F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.447F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveToRelative(-5.0F, -8.5F)
          verticalLineToRelative(19.0F)
          horizontalLineTo(4.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(4.0F, 22.75F)
          verticalLineTo(5.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(4.75F, 4.5F)
          horizontalLineTo(10.0F)
          close()        
      }
    }
    return _conferenceRoom28!!
  }

private var _conferenceRoom28: ImageVector? = null
