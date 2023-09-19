package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownLeft48: ImageVector
  get() {
    if (_arrowDownLeft48 != null) {
      return _arrowDownLeft48!!
    }
    _arrowDownLeft48 = fluentIcon(name = "Regular.ArrowDownLeft48", 48f) {
      materialPath {
          moveTo(25.75F, 42.0F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(10.268F)
          lineTo(41.634F, 8.134F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(-1.28F, -0.488F, -1.768F, 0.0F)
          lineTo(8.5F, 37.732F)
          verticalLineTo(22.25F)
          curveTo(8.5F, 21.56F, 7.94F, 21.0F, 7.25F, 21.0F)
          reflectiveCurveTo(6.0F, 21.56F, 6.0F, 22.25F)
          verticalLineToRelative(18.5F)
          curveTo(6.0F, 41.44F, 6.56F, 42.0F, 7.25F, 42.0F)
          horizontalLineToRelative(18.5F)
          close()        
      }
    }
    return _arrowDownLeft48!!
  }

private var _arrowDownLeft48: ImageVector? = null
