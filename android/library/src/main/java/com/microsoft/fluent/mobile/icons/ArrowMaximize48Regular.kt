package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowMaximize48: ImageVector
  get() {
    if (_arrowMaximize48 != null) {
      return _arrowMaximize48!!
    }
    _arrowMaximize48 = fluentIcon(name = "Regular.ArrowMaximize48", 48f) {
      materialPath {
          moveTo(40.75F, 24.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(10.268F)
          lineTo(10.268F, 39.5F)
          horizontalLineTo(22.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(23.44F, 42.0F, 22.75F, 42.0F)
          horizontalLineTo(7.25F)
          curveTo(6.56F, 42.0F, 6.0F, 41.44F, 6.0F, 40.75F)
          verticalLineToRelative(-15.5F)
          curveTo(6.0F, 24.56F, 6.56F, 24.0F, 7.25F, 24.0F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(12.482F)
          lineTo(37.732F, 8.5F)
          horizontalLineTo(25.25F)
          curveTo(24.56F, 8.5F, 24.0F, 7.94F, 24.0F, 7.25F)
          reflectiveCurveTo(24.56F, 6.0F, 25.25F, 6.0F)
          horizontalLineToRelative(15.5F)
          curveTo(41.44F, 6.0F, 42.0F, 6.56F, 42.0F, 7.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          close()        
      }
    }
    return _arrowMaximize48!!
  }

private var _arrowMaximize48: ImageVector? = null
