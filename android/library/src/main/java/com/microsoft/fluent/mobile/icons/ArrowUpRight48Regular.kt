package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpRight48: ImageVector
  get() {
    if (_arrowUpRight48 != null) {
      return _arrowUpRight48!!
    }
    _arrowUpRight48 = fluentIcon(name = "Regular.ArrowUpRight48", 48f) {
      materialPath {
          moveTo(22.25F, 6.0F)
          curveTo(21.56F, 6.0F, 21.0F, 6.56F, 21.0F, 7.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(15.482F)
          lineTo(6.366F, 39.866F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(1.28F, 0.488F, 1.768F, 0.0F)
          lineTo(39.5F, 10.268F)
          verticalLineTo(25.75F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveTo(42.0F, 26.44F, 42.0F, 25.75F)
          verticalLineTo(7.25F)
          curveTo(42.0F, 6.56F, 41.44F, 6.0F, 40.75F, 6.0F)
          horizontalLineToRelative(-18.5F)
          close()        
      }
    }
    return _arrowUpRight48!!
  }

private var _arrowUpRight48: ImageVector? = null
