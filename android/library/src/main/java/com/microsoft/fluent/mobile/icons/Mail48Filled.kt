package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mail48: ImageVector
  get() {
    if (_mail48 != null) {
      return _mail48!!
    }
    _mail48 = fluentIcon(name = "Filled.Mail48", 48f) {
      materialPath {
          moveTo(43.0F, 16.976F)
          verticalLineTo(33.75F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-27.5F)
          curveTo(7.35F, 39.0F, 5.0F, 36.65F, 5.0F, 33.75F)
          verticalLineTo(16.976F)
          lineToRelative(18.398F, 10.12F)
          curveToRelative(0.375F, 0.206F, 0.83F, 0.206F, 1.204F, 0.0F)
          lineTo(43.0F, 16.975F)
          close()
          moveTo(37.75F, 9.0F)
          curveToRelative(2.857F, 0.0F, 5.182F, 2.283F, 5.248F, 5.124F)
          lineTo(24.0F, 24.574F)
          lineTo(5.002F, 14.123F)
          lineToRelative(0.002F, -0.09F)
          curveTo(5.118F, 11.234F, 7.423F, 9.0F, 10.25F, 9.0F)
          horizontalLineToRelative(27.5F)
          close()        
      }
    }
    return _mail48!!
  }

private var _mail48: ImageVector? = null
