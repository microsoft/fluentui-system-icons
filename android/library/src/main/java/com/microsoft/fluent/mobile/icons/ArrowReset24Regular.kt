package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowReset24: ImageVector
  get() {
    if (_arrowReset24 != null) {
      return _arrowReset24!!
    }
    _arrowReset24 = fluentIcon(name = "Regular.ArrowReset24", 24f) {
      materialPath {
          moveTo(6.78F, 2.72F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(4.56F, 6.0F)
          horizontalLineToRelative(8.69F)
          curveTo(17.53F, 6.0F, 21.0F, 9.47F, 21.0F, 13.75F)
          curveToRelative(0.0F, 4.28F, -3.47F, 7.75F, -7.75F, 7.75F)
          curveToRelative(-4.28F, 0.0F, -7.75F, -3.47F, -7.75F, -7.75F)
          curveTo(5.5F, 13.336F, 5.836F, 13.0F, 6.25F, 13.0F)
          reflectiveCurveTo(7.0F, 13.336F, 7.0F, 13.75F)
          curveTo(7.0F, 17.202F, 9.798F, 20.0F, 13.25F, 20.0F)
          reflectiveCurveToRelative(6.25F, -2.798F, 6.25F, -6.25F)
          reflectiveCurveToRelative(-2.798F, -6.25F, -6.25F, -6.25F)
          horizontalLineTo(4.56F)
          lineToRelative(2.22F, 2.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.5F, -3.5F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _arrowReset24!!
  }

private var _arrowReset24: ImageVector? = null
