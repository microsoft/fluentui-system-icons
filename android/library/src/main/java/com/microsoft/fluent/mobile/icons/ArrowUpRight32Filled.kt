package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpRight32: ImageVector
  get() {
    if (_arrowUpRight32 != null) {
      return _arrowUpRight32!!
    }
    _arrowUpRight32 = fluentIcon(name = "Filled.ArrowUpRight32", 32f) {
      materialPath {
          moveTo(15.25F, 3.0F)
          curveTo(14.56F, 3.0F, 14.0F, 3.56F, 14.0F, 4.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(9.482F)
          lineTo(3.366F, 26.866F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(1.28F, 0.488F, 1.768F, 0.0F)
          lineTo(26.5F, 7.268F)
          verticalLineToRelative(9.482F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveTo(29.0F, 17.44F, 29.0F, 16.75F)
          verticalLineTo(4.25F)
          curveTo(29.0F, 3.56F, 28.44F, 3.0F, 27.75F, 3.0F)
          horizontalLineToRelative(-12.5F)
          close()        
      }
    }
    return _arrowUpRight32!!
  }

private var _arrowUpRight32: ImageVector? = null
