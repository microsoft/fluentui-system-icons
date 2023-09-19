package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ConferenceRoom20: ImageVector
  get() {
    if (_conferenceRoom20 != null) {
      return _conferenceRoom20!!
    }
    _conferenceRoom20 = fluentIcon(name = "Filled.ConferenceRoom20", 20f) {
      materialPath {
          moveTo(9.186F, 2.113F)
          curveToRelative(0.117F, -0.095F, 0.271F, -0.132F, 0.419F, -0.1F)
          lineToRelative(7.0F, 1.499F)
          curveToRelative(0.23F, 0.05F, 0.394F, 0.253F, 0.394F, 0.489F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 0.235F, -0.164F, 0.44F, -0.395F, 0.489F)
          lineToRelative(-7.0F, 1.5F)
          curveToRelative(-0.147F, 0.033F, -0.3F, -0.004F, -0.418F, -0.1F)
          curveTo(9.068F, 17.797F, 9.0F, 17.654F, 9.0F, 17.503F)
          verticalLineToRelative(-15.0F)
          curveToRelative(0.0F, -0.151F, 0.068F, -0.294F, 0.186F, -0.389F)
          close()
          moveToRelative(3.316F, 7.888F)
          curveToRelative(0.0F, -0.415F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.335F, -0.75F, 0.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          close()
          moveToRelative(-4.5F, -6.998F)
          horizontalLineTo(3.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(12.995F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(4.502F)
          verticalLineTo(3.003F)
          close()        
      }
    }
    return _conferenceRoom20!!
  }

private var _conferenceRoom20: ImageVector? = null
