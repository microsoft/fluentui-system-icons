package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Tag32: ImageVector
  get() {
    if (_tag32 != null) {
      return _tag32!!
    }
    _tag32 = fluentIcon(name = "Regular.Tag32", 32f) {
      materialPath {
          moveTo(22.5F, 12.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveTo(23.88F, 7.0F, 22.5F, 7.0F)
          reflectiveCurveTo(20.0F, 8.12F, 20.0F, 9.5F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          close()
          moveToRelative(-3.816F, -9.0F)
          curveToRelative(-1.015F, 0.0F, -1.991F, 0.386F, -2.732F, 1.079F)
          lineTo(3.77F, 15.474F)
          curveToRelative(-1.754F, 1.642F, -1.8F, 4.41F, -0.101F, 6.11F)
          lineToRelative(6.326F, 6.325F)
          curveToRelative(1.66F, 1.66F, 4.35F, 1.66F, 6.01F, 0.0F)
          lineToRelative(11.823F, -11.823F)
          curveToRelative(0.75F, -0.75F, 1.172F, -1.768F, 1.172F, -2.829F)
          verticalLineTo(6.5F)
          curveTo(29.0F, 4.567F, 27.433F, 3.0F, 25.5F, 3.0F)
          horizontalLineToRelative(-6.816F)
          close()
          moveToRelative(-1.366F, 2.54F)
          curveTo(17.688F, 5.193F, 18.177F, 5.0F, 18.684F, 5.0F)
          horizontalLineTo(25.5F)
          curveTo(26.328F, 5.0F, 27.0F, 5.672F, 27.0F, 6.5F)
          verticalLineToRelative(6.757F)
          curveToRelative(0.0F, 0.53F, -0.211F, 1.04F, -0.586F, 1.415F)
          lineTo(14.591F, 26.495F)
          curveToRelative(-0.879F, 0.878F, -2.304F, 0.878F, -3.182F, 0.0F)
          lineToRelative(-6.326F, -6.326F)
          curveToRelative(-0.9F, -0.9F, -0.875F, -2.365F, 0.054F, -3.234F)
          lineTo(17.317F, 5.54F)
          close()        
      }
    }
    return _tag32!!
  }

private var _tag32: ImageVector? = null
