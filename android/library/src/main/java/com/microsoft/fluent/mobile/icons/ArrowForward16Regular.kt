package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowForward16: ImageVector
  get() {
    if (_arrowForward16 != null) {
      return _arrowForward16!!
    }
    _arrowForward16 = fluentIcon(name = "Regular.ArrowForward16", 16f) {
      materialPath {
          moveTo(12.293F, 8.0F)
          lineToRelative(-2.682F, 2.682F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(0.173F, 0.174F, 0.443F, 0.193F, 0.638F, 0.058F)
          lineToRelative(0.069F, -0.057F)
          lineToRelative(3.566F, -3.57F)
          lineToRelative(0.05F, -0.07F)
          lineToRelative(0.027F, -0.056F)
          lineToRelative(0.023F, -0.068F)
          lineToRelative(0.005F, -0.02F)
          curveTo(13.996F, 7.571F, 14.0F, 7.535F, 14.0F, 7.5F)
          lineToRelative(-0.005F, 0.074F)
          lineToRelative(0.003F, -0.031F)
          verticalLineTo(7.458F)
          lineToRelative(-0.015F, -0.086F)
          lineToRelative(-0.02F, -0.063F)
          lineToRelative(-0.04F, -0.076F)
          lineToRelative(-0.055F, -0.07F)
          lineToRelative(-3.55F, -3.552F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveTo(9.437F, 3.785F, 9.418F, 4.054F, 9.553F, 4.25F)
          lineToRelative(0.058F, 0.07F)
          lineTo(12.293F, 7.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-3.522F, 0.0F, -5.885F, 1.976F, -5.996F, 4.793F)
          lineTo(2.0F, 12.0F)
          curveToRelative(0.0F, 0.277F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveTo(3.0F, 12.277F, 3.0F, 12.0F)
          curveToRelative(0.0F, -2.273F, 1.808F, -3.904F, 4.739F, -3.996F)
          lineTo(8.0F, 8.0F)
          horizontalLineToRelative(4.293F)
          close()        
      }
    }
    return _arrowForward16!!
  }

private var _arrowForward16: ImageVector? = null
