package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PhoneCheckmark20: ImageVector
  get() {
    if (_phoneCheckmark20 != null) {
      return _phoneCheckmark20!!
    }
    _phoneCheckmark20 = fluentIcon(name = "Regular.PhoneCheckmark20", 20f) {
      materialPath {
          moveTo(18.0F, 5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(9.0F, 7.985F, 9.0F, 5.5F)
          reflectiveCurveTo(11.015F, 1.0F, 13.5F, 1.0F)
          reflectiveCurveTo(18.0F, 3.015F, 18.0F, 5.5F)
          close()
          moveToRelative(-2.146F, -1.853F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          lineTo(12.5F, 6.293F)
          lineToRelative(-0.646F, -0.647F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(9.257F, 2.0F)
          horizontalLineTo(6.5F)
          curveTo(5.672F, 2.0F, 5.0F, 2.672F, 5.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(5.0F, 17.328F, 5.672F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-5.707F)
          curveToRelative(-0.322F, 0.091F, -0.657F, 0.154F, -1.0F, 0.185F)
          verticalLineTo(16.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 17.0F, 6.0F, 16.776F, 6.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          curveTo(6.0F, 3.224F, 6.224F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(2.1F)
          curveToRelative(0.183F, -0.358F, 0.404F, -0.693F, 0.657F, -1.0F)
          close()
          moveTo(8.0F, 14.5F)
          curveTo(8.0F, 14.224F, 8.224F, 14.0F, 8.5F, 14.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.776F, 15.0F, 11.5F, 15.0F)
          horizontalLineToRelative(-3.0F)
          curveTo(8.224F, 15.0F, 8.0F, 14.776F, 8.0F, 14.5F)
          close()        
      }
    }
    return _phoneCheckmark20!!
  }

private var _phoneCheckmark20: ImageVector? = null
