package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ConferenceRoom20: ImageVector
  get() {
    if (_conferenceRoom20 != null) {
      return _conferenceRoom20!!
    }
    _conferenceRoom20 = fluentIcon(name = "Regular.ConferenceRoom20", 20f) {
      materialPath {
          moveTo(12.487F, 10.0F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.335F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          close()
          moveTo(9.605F, 2.014F)
          curveToRelative(-0.148F, -0.032F, -0.302F, 0.005F, -0.42F, 0.1F)
          curveTo(9.069F, 2.208F, 9.0F, 2.351F, 9.0F, 2.502F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 0.151F, 0.068F, 0.294F, 0.186F, 0.389F)
          curveToRelative(0.117F, 0.095F, 0.271F, 0.132F, 0.419F, 0.1F)
          lineToRelative(7.0F, -1.501F)
          curveToRelative(0.23F, -0.05F, 0.394F, -0.253F, 0.394F, -0.49F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.235F, -0.164F, -0.439F, -0.395F, -0.488F)
          lineToRelative(-7.0F, -1.499F)
          close()
          moveTo(10.0F, 16.883F)
          verticalLineTo(3.12F)
          lineToRelative(6.0F, 1.285F)
          verticalLineToRelative(11.192F)
          lineToRelative(-6.0F, 1.286F)
          close()
          moveToRelative(-1.998F, 0.115F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(4.003F)
          horizontalLineToRelative(4.002F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(3.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(12.995F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(4.502F)
          close()        
      }
    }
    return _conferenceRoom20!!
  }

private var _conferenceRoom20: ImageVector? = null
