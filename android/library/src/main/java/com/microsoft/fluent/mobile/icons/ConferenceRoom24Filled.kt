package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ConferenceRoom24: ImageVector
  get() {
    if (_conferenceRoom24 != null) {
      return _conferenceRoom24!!
    }
    _conferenceRoom24 = fluentIcon(name = "Filled.ConferenceRoom24", 24f) {
      materialPath {
          moveTo(10.598F, 2.01F)
          lineToRelative(9.0F, 2.0F)
          curveTo(19.832F, 4.057F, 20.0F, 4.262F, 20.0F, 4.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 0.238F, -0.168F, 0.444F, -0.402F, 0.49F)
          lineToRelative(-9.0F, 2.0F)
          curveTo(10.288F, 22.053F, 10.0F, 21.817F, 10.0F, 21.5F)
          verticalLineToRelative(-19.0F)
          curveToRelative(0.0F, -0.315F, 0.289F, -0.552F, 0.598F, -0.49F)
          close()
          moveTo(9.0F, 4.0F)
          verticalLineToRelative(16.0F)
          horizontalLineTo(4.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(4.0F, 19.25F)
          verticalLineTo(4.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(4.75F, 4.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(4.0F, 7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          curveToRelative(0.0F, 0.553F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.447F, 1.0F, -1.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _conferenceRoom24!!
  }

private var _conferenceRoom24: ImageVector? = null
