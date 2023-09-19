package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailCheckmark20: ImageVector
  get() {
    if (_mailCheckmark20 != null) {
      return _mailCheckmark20!!
    }
    _mailCheckmark20 = fluentIcon(name = "Regular.MailCheckmark20", 20f) {
      materialPath {
          moveTo(17.0F, 14.5F)
          verticalLineToRelative(-4.1F)
          curveToRelative(0.358F, -0.183F, 0.693F, -0.404F, 1.0F, -0.657F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.12F, 17.0F, 2.0F, 15.88F, 2.0F, 14.5F)
          verticalLineToRelative(-8.0F)
          curveTo(2.0F, 5.12F, 3.12F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(4.707F)
          curveTo(9.116F, 4.322F, 9.053F, 4.657F, 9.022F, 5.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 5.0F, 3.0F, 5.672F, 3.0F, 6.5F)
          verticalLineToRelative(0.302F)
          lineToRelative(7.0F, 4.118F)
          lineToRelative(1.441F, -0.848F)
          curveToRelative(0.325F, 0.217F, 0.674F, 0.401F, 1.043F, 0.547F)
          lineToRelative(-2.23F, 1.312F)
          curveToRelative(-0.13F, 0.077F, -0.287F, 0.09F, -0.426F, 0.038F)
          lineToRelative(-0.082F, -0.038F)
          lineTo(3.0F, 7.963F)
          verticalLineTo(14.5F)
          curveTo(3.0F, 15.328F, 3.672F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          close()
          moveTo(14.5F, 10.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          reflectiveCurveTo(16.985F, 1.0F, 14.5F, 1.0F)
          reflectiveCurveTo(10.0F, 3.015F, 10.0F, 5.5F)
          reflectiveCurveToRelative(2.015F, 4.5F, 4.5F, 4.5F)
          close()
          moveToRelative(2.354F, -5.646F)
          lineToRelative(-3.0F, 3.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.0F, -1.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(13.5F, 6.293F)
          lineToRelative(2.646F, -2.647F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          close()        
      }
    }
    return _mailCheckmark20!!
  }

private var _mailCheckmark20: ImageVector? = null
