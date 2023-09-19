package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpLeft20: ImageVector
  get() {
    if (_arrowUpLeft20 != null) {
      return _arrowUpLeft20!!
    }
    _arrowUpLeft20 = fluentIcon(name = "Filled.ArrowUpLeft20", 20f) {
      materialPath {
          moveTo(12.0F, 3.75F)
          curveTo(12.0F, 3.336F, 11.664F, 3.0F, 11.25F, 3.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(3.336F, 3.0F, 3.0F, 3.336F, 3.0F, 3.75F)
          verticalLineToRelative(7.5F)
          curveTo(3.0F, 11.664F, 3.336F, 12.0F, 3.75F, 12.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(5.56F)
          lineToRelative(11.219F, 11.22F)
          curveToRelative(0.293F, 0.292F, 0.767F, 0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.294F, 0.293F, -0.769F, 0.0F, -1.062F)
          lineTo(5.561F, 4.5F)
          horizontalLineToRelative(5.689F)
          curveTo(11.664F, 4.5F, 12.0F, 4.164F, 12.0F, 3.75F)
          close()        
      }
    }
    return _arrowUpLeft20!!
  }

private var _arrowUpLeft20: ImageVector? = null
