package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ConferenceRoom16: ImageVector
  get() {
    if (_conferenceRoom16 != null) {
      return _conferenceRoom16!!
    }
    _conferenceRoom16 = fluentIcon(name = "Regular.ConferenceRoom16", 16f) {
      materialPath {
          moveTo(10.0F, 7.998F)
          curveToRelative(0.0F, 0.277F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(9.0F, 8.275F, 9.0F, 7.998F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          close()
          moveTo(7.598F, 2.01F)
          curveToRelative(-0.147F, -0.03F, -0.3F, 0.008F, -0.415F, 0.103F)
          curveTo(7.067F, 2.208F, 7.0F, 2.35F, 7.0F, 2.5F)
          verticalLineToRelative(10.997F)
          curveToRelative(0.0F, 0.15F, 0.067F, 0.292F, 0.183F, 0.387F)
          curveToRelative(0.116F, 0.095F, 0.268F, 0.133F, 0.415F, 0.103F)
          lineToRelative(5.0F, -1.0F)
          curveTo(12.832F, 12.94F, 13.0F, 12.735F, 13.0F, 12.497F)
          verticalLineTo(3.5F)
          curveToRelative(0.0F, -0.238F, -0.168F, -0.443F, -0.402F, -0.49F)
          lineToRelative(-5.0F, -1.0F)
          close()
          moveTo(8.0F, 12.887F)
          verticalLineTo(3.11F)
          lineToRelative(4.0F, 0.8F)
          verticalLineToRelative(8.177F)
          lineToRelative(-4.0F, 0.8F)
          close()
          moveToRelative(-2.0F, 0.11F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          verticalLineToRelative(8.997F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _conferenceRoom16!!
  }

private var _conferenceRoom16: ImageVector? = null
