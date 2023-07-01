package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowReply16: ImageVector
  get() {
    if (_arrowReply16 != null) {
      return _arrowReply16!!
    }
    _arrowReply16 = fluentIcon(name = "Regular.ArrowReply16", 16f) {
      materialPath {
          moveTo(3.707F, 8.0F)
          lineToRelative(2.682F, 2.682F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.174F, 0.174F, -0.443F, 0.193F, -0.638F, 0.058F)
          lineTo(5.682F, 11.39F)
          lineTo(2.116F, 7.82F)
          lineToRelative(-0.05F, -0.07F)
          lineTo(2.04F, 7.694F)
          lineTo(2.016F, 7.626F)
          lineToRelative(-0.005F, -0.02F)
          curveTo(2.004F, 7.571F, 2.0F, 7.535F, 2.0F, 7.5F)
          lineToRelative(0.006F, 0.074F)
          lineToRelative(-0.004F, -0.031F)
          verticalLineTo(7.458F)
          lineToRelative(0.015F, -0.086F)
          lineToRelative(0.02F, -0.063F)
          lineToRelative(0.04F, -0.076F)
          lineToRelative(0.055F, -0.07F)
          lineToRelative(3.55F, -3.552F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveTo(6.563F, 3.785F, 6.582F, 4.054F, 6.447F, 4.25F)
          lineTo(6.389F, 4.32F)
          lineTo(3.707F, 7.0F)
          horizontalLineTo(8.0F)
          curveToRelative(3.522F, 0.0F, 5.885F, 1.976F, 5.996F, 4.793F)
          lineTo(14.0F, 12.0F)
          curveToRelative(0.0F, 0.277F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(13.0F, 12.277F, 13.0F, 12.0F)
          curveToRelative(0.0F, -2.273F, -1.807F, -3.904F, -4.739F, -3.996F)
          lineTo(8.0F, 8.0F)
          horizontalLineTo(3.707F)
          lineToRelative(2.682F, 2.682F)
          lineTo(3.707F, 8.0F)
          close()        
      }
    }
    return _arrowReply16!!
  }

private var _arrowReply16: ImageVector? = null
