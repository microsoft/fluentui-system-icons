package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpLeft48: ImageVector
  get() {
    if (_arrowUpLeft48 != null) {
      return _arrowUpLeft48!!
    }
    _arrowUpLeft48 = fluentIcon(name = "Regular.ArrowUpLeft48", 48f) {
      materialPath {
          moveTo(25.75F, 6.0F)
          curveTo(26.44F, 6.0F, 27.0F, 6.56F, 27.0F, 7.25F)
          reflectiveCurveTo(26.44F, 8.5F, 25.75F, 8.5F)
          horizontalLineTo(10.268F)
          lineToRelative(31.366F, 31.366F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineTo(8.5F, 10.268F)
          verticalLineTo(25.75F)
          curveTo(8.5F, 26.44F, 7.94F, 27.0F, 7.25F, 27.0F)
          reflectiveCurveTo(6.0F, 26.44F, 6.0F, 25.75F)
          verticalLineTo(7.25F)
          curveTo(6.0F, 6.56F, 6.56F, 6.0F, 7.25F, 6.0F)
          horizontalLineToRelative(18.5F)
          close()        
      }
    }
    return _arrowUpLeft48!!
  }

private var _arrowUpLeft48: ImageVector? = null
