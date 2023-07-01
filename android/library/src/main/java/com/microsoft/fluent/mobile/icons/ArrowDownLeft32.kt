package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDownLeft32: ImageVector
  get() {
    if (_arrowDownLeft32 != null) {
      return _arrowDownLeft32!!
    }
    _arrowDownLeft32 = fluentIcon(name = "Filled.ArrowDownLeft32", 32f) {
      materialPath {
          moveTo(16.75F, 29.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(7.268F)
          lineTo(28.634F, 5.134F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(-1.28F, -0.488F, -1.768F, 0.0F)
          lineTo(5.5F, 24.732F)
          verticalLineTo(15.25F)
          curveTo(5.5F, 14.56F, 4.94F, 14.0F, 4.25F, 14.0F)
          reflectiveCurveTo(3.0F, 14.56F, 3.0F, 15.25F)
          verticalLineToRelative(12.5F)
          curveTo(3.0F, 28.44F, 3.56F, 29.0F, 4.25F, 29.0F)
          horizontalLineToRelative(12.5F)
          close()        
      }
    }
    return _arrowDownLeft32!!
  }

private var _arrowDownLeft32: ImageVector? = null
