package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ConferenceRoom16: ImageVector
  get() {
    if (_conferenceRoom16 != null) {
      return _conferenceRoom16!!
    }
    _conferenceRoom16 = fluentIcon(name = "Filled.ConferenceRoom16", 16f) {
      materialPath {
          moveTo(7.183F, 2.113F)
          curveTo(7.299F, 2.018F, 7.451F, 1.98F, 7.598F, 2.01F)
          lineToRelative(5.0F, 1.0F)
          curveTo(12.832F, 3.057F, 13.0F, 3.262F, 13.0F, 3.5F)
          verticalLineToRelative(8.997F)
          curveToRelative(0.0F, 0.238F, -0.168F, 0.443F, -0.402F, 0.49F)
          lineToRelative(-5.0F, 1.0F)
          curveToRelative(-0.147F, 0.03F, -0.3F, -0.008F, -0.415F, -0.103F)
          curveTo(7.067F, 13.789F, 7.0F, 13.647F, 7.0F, 13.497F)
          verticalLineTo(2.5F)
          moveToRelative(3.0F, 5.498F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(9.0F, 7.722F, 9.0F, 7.998F)
          curveToRelative(0.0F, 0.277F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.223F, 0.5F, -0.5F)
          close()
          moveTo(6.0F, 3.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          verticalLineToRelative(8.997F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(6.0F)
          verticalLineTo(3.0F)
          close()
          moveTo(7.183F, 2.113F)
          curveTo(7.067F, 2.208F, 7.0F, 2.35F, 7.0F, 2.5F)
          close()        
      }
    }
    return _conferenceRoom16!!
  }

private var _conferenceRoom16: ImageVector? = null
