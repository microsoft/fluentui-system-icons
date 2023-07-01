package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowReset32: ImageVector
  get() {
    if (_arrowReset32 != null) {
      return _arrowReset32!!
    }
    _arrowReset32 = fluentIcon(name = "Filled.ArrowReset32", 32f) {
      materialPath {
          moveTo(8.884F, 3.116F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineTo(6.018F, 7.75F)
          horizontalLineTo(17.5F)
          curveToRelative(5.937F, 0.0F, 10.75F, 4.813F, 10.75F, 10.75F)
          reflectiveCurveTo(23.437F, 29.25F, 17.5F, 29.25F)
          reflectiveCurveTo(6.75F, 24.437F, 6.75F, 18.5F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          curveToRelative(0.0F, 4.556F, 3.694F, 8.25F, 8.25F, 8.25F)
          reflectiveCurveToRelative(8.25F, -3.694F, 8.25F, -8.25F)
          reflectiveCurveToRelative(-3.694F, -8.25F, -8.25F, -8.25F)
          horizontalLineTo(6.018F)
          lineToRelative(2.866F, 2.866F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineToRelative(-5.0F, -5.0F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(5.0F, -5.0F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          close()        
      }
    }
    return _arrowReset32!!
  }

private var _arrowReset32: ImageVector? = null
