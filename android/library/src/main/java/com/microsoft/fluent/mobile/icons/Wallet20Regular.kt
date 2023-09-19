package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Wallet20: ImageVector
  get() {
    if (_wallet20 != null) {
      return _wallet20!!
    }
    _wallet20 = fluentIcon(name = "Regular.Wallet20", 20f) {
      materialPath {
          moveTo(13.5F, 11.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 11.0F, 14.5F, 11.0F)
          horizontalLineToRelative(-1.0F)
          close()
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(0.268F)
          curveTo(16.598F, 5.613F, 17.0F, 6.26F, 17.0F, 7.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(5.5F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-10.0F)
          close()
          moveTo(14.0F, 4.0F)
          horizontalLineTo(4.5F)
          curveTo(4.224F, 4.0F, 4.0F, 4.224F, 4.0F, 4.5F)
          reflectiveCurveTo(4.224F, 5.0F, 4.5F, 5.0F)
          horizontalLineTo(15.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          close()
          moveTo(4.5F, 6.0F)
          curveTo(4.325F, 6.0F, 4.156F, 5.97F, 4.0F, 5.915F)
          verticalLineTo(14.5F)
          curveTo(4.0F, 15.328F, 4.672F, 16.0F, 5.5F, 16.0F)
          horizontalLineTo(15.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(4.5F)
          close()        
      }
    }
    return _wallet20!!
  }

private var _wallet20: ImageVector? = null
