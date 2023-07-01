package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpRight20: ImageVector
  get() {
    if (_arrowUpRight20 != null) {
      return _arrowUpRight20!!
    }
    _arrowUpRight20 = fluentIcon(name = "Filled.ArrowUpRight20", 20f) {
      materialPath {
          moveTo(8.0F, 3.75F)
          curveTo(8.0F, 3.336F, 8.334F, 3.0F, 8.75F, 3.0F)
          horizontalLineToRelative(7.5F)
          curveTo(16.664F, 3.0F, 17.0F, 3.336F, 17.0F, 3.75F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.335F, -0.75F, -0.75F)
          verticalLineTo(5.56F)
          lineTo(4.28F, 16.78F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          lineTo(14.44F, 4.5F)
          horizontalLineTo(8.75F)
          curveTo(8.334F, 4.5F, 8.0F, 4.164F, 8.0F, 3.75F)
          close()        
      }
    }
    return _arrowUpRight20!!
  }

private var _arrowUpRight20: ImageVector? = null
