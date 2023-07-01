package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowReplyDown16: ImageVector
  get() {
    if (_arrowReplyDown16 != null) {
      return _arrowReplyDown16!!
    }
    _arrowReplyDown16 = fluentIcon(name = "Regular.ArrowReplyDown16", 16f) {
      materialPath {
          moveTo(3.707F, 8.004F)
          lineToRelative(2.682F, -2.682F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.174F, -0.173F, -0.443F, -0.192F, -0.638F, -0.057F)
          lineTo(5.682F, 4.614F)
          lineToRelative(-3.566F, 3.57F)
          lineToRelative(-0.05F, 0.07F)
          lineTo(2.04F, 8.31F)
          lineTo(2.016F, 8.378F)
          lineToRelative(-0.005F, 0.02F)
          curveTo(2.004F, 8.433F, 2.0F, 8.469F, 2.0F, 8.505F)
          lineTo(2.006F, 8.43F)
          lineTo(2.002F, 8.46F)
          verticalLineToRelative(0.085F)
          lineToRelative(0.015F, 0.086F)
          lineToRelative(0.02F, 0.063F)
          lineToRelative(0.04F, 0.075F)
          lineToRelative(0.055F, 0.072F)
          lineToRelative(3.55F, 3.55F)
          curveToRelative(0.195F, 0.196F, 0.512F, 0.196F, 0.707F, 0.0F)
          curveToRelative(0.174F, -0.173F, 0.193F, -0.442F, 0.058F, -0.637F)
          lineToRelative(-0.058F, -0.07F)
          lineToRelative(-2.682F, -2.68F)
          lineTo(8.0F, 9.002F)
          curveToRelative(3.522F, 0.0F, 5.885F, -1.975F, 5.996F, -4.792F)
          lineTo(14.0F, 4.003F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveTo(13.0F, 3.728F, 13.0F, 4.003F)
          curveTo(13.0F, 6.277F, 11.193F, 7.909F, 8.261F, 8.0F)
          lineTo(8.0F, 8.004F)
          horizontalLineTo(3.707F)
          lineToRelative(2.682F, -2.682F)
          lineToRelative(-2.682F, 2.682F)
          close()        
      }
    }
    return _arrowReplyDown16!!
  }

private var _arrowReplyDown16: ImageVector? = null
