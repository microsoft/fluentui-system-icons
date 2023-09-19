package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpLeft16: ImageVector
  get() {
    if (_arrowUpLeft16 != null) {
      return _arrowUpLeft16!!
    }
    _arrowUpLeft16 = fluentIcon(name = "Filled.ArrowUpLeft16", 16f) {
      materialPath {
          moveTo(9.0F, 2.75F)
          curveTo(9.0F, 2.336F, 8.664F, 2.0F, 8.25F, 2.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(2.336F, 2.0F, 2.0F, 2.336F, 2.0F, 2.75F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 8.664F, 2.336F, 9.0F, 2.75F, 9.0F)
          reflectiveCurveTo(3.5F, 8.664F, 3.5F, 8.25F)
          verticalLineTo(4.56F)
          lineToRelative(9.22F, 9.22F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(4.56F, 3.5F)
          horizontalLineToRelative(3.69F)
          curveTo(8.664F, 3.5F, 9.0F, 3.164F, 9.0F, 2.75F)
          close()        
      }
    }
    return _arrowUpLeft16!!
  }

private var _arrowUpLeft16: ImageVector? = null
