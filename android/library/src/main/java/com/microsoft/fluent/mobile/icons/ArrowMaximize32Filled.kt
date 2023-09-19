package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowMaximize32: ImageVector
  get() {
    if (_arrowMaximize32 != null) {
      return _arrowMaximize32!!
    }
    _arrowMaximize32 = fluentIcon(name = "Filled.ArrowMaximize32", 32f) {
      materialPath {
          moveTo(17.0F, 4.25F)
          curveTo(17.0F, 3.56F, 17.56F, 3.0F, 18.25F, 3.0F)
          horizontalLineToRelative(9.5F)
          curveTo(28.44F, 3.0F, 29.0F, 3.56F, 29.0F, 4.25F)
          verticalLineToRelative(9.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(7.268F)
          lineTo(7.268F, 26.5F)
          horizontalLineToRelative(6.482F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveTo(14.44F, 29.0F, 13.75F, 29.0F)
          horizontalLineToRelative(-9.5F)
          curveTo(3.56F, 29.0F, 3.0F, 28.44F, 3.0F, 27.75F)
          verticalLineToRelative(-9.5F)
          curveTo(3.0F, 17.56F, 3.56F, 17.0F, 4.25F, 17.0F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(6.482F)
          lineTo(24.732F, 5.5F)
          horizontalLineTo(18.25F)
          curveTo(17.56F, 5.5F, 17.0F, 4.94F, 17.0F, 4.25F)
          close()        
      }
    }
    return _arrowMaximize32!!
  }

private var _arrowMaximize32: ImageVector? = null
