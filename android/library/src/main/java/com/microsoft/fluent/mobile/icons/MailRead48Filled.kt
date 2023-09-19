package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailRead48: ImageVector
  get() {
    if (_mailRead48 != null) {
      return _mailRead48!!
    }
    _mailRead48 = fluentIcon(name = "Filled.MailRead48", 48f) {
      materialPath {
          moveTo(6.05F, 18.573F)
          lineToRelative(17.313F, 10.253F)
          curveToRelative(0.393F, 0.232F, 0.881F, 0.232F, 1.274F, 0.0F)
          lineTo(41.95F, 18.574F)
          curveTo(41.983F, 18.813F, 42.0F, 19.055F, 42.0F, 19.3F)
          verticalLineToRelative(15.45F)
          curveToRelative(0.0F, 2.347F, -1.903F, 4.25F, -4.25F, 4.25F)
          horizontalLineToRelative(-27.5F)
          curveTo(7.903F, 39.0F, 6.0F, 37.097F, 6.0F, 34.75F)
          verticalLineTo(19.3F)
          curveToRelative(0.0F, -0.245F, 0.017F, -0.488F, 0.05F, -0.727F)
          close()
          moveTo(24.63F, 6.17F)
          lineToRelative(14.762F, 8.593F)
          curveToRelative(0.646F, 0.376F, 1.193F, 0.878F, 1.616F, 1.464F)
          lineTo(24.0F, 26.297F)
          lineTo(6.993F, 16.227F)
          curveToRelative(0.423F, -0.586F, 0.97F, -1.088F, 1.616F, -1.464F)
          lineTo(23.37F, 6.17F)
          curveToRelative(0.389F, -0.227F, 0.87F, -0.227F, 1.258F, 0.0F)
          close()        
      }
    }
    return _mailRead48!!
  }

private var _mailRead48: ImageVector? = null
