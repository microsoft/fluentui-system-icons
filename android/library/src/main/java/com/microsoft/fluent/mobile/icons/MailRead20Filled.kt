package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailRead20: ImageVector
  get() {
    if (_mailRead20 != null) {
      return _mailRead20!!
    }
    _mailRead20 = fluentIcon(name = "Filled.MailRead20", 20f) {
      materialPath {
          moveTo(10.257F, 3.071F)
          curveToRelative(-0.158F, -0.095F, -0.356F, -0.095F, -0.514F, 0.0F)
          lineTo(2.97F, 7.134F)
          curveToRelative(-0.294F, 0.177F, -0.532F, 0.422F, -0.7F, 0.709F)
          lineTo(10.0F, 11.934F)
          lineToRelative(7.728F, -4.091F)
          curveToRelative(-0.167F, -0.287F, -0.405F, -0.532F, -0.699F, -0.709F)
          lineToRelative(-6.772F, -4.063F)
          close()
          moveTo(18.0F, 8.831F)
          lineToRelative(-7.766F, 4.11F)
          curveToRelative(-0.146F, 0.078F, -0.322F, 0.078F, -0.468F, 0.0F)
          lineTo(2.0F, 8.832F)
          verticalLineTo(14.5F)
          curveTo(2.0F, 15.88F, 3.12F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(8.83F)
          close()        
      }
    }
    return _mailRead20!!
  }

private var _mailRead20: ImageVector? = null
