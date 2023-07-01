package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSwap20: ImageVector
  get() {
    if (_arrowSwap20 != null) {
      return _arrowSwap20!!
    }
    _arrowSwap20 = fluentIcon(name = "Filled.ArrowSwap20", 20f) {
      materialPath {
          moveTo(12.78F, 3.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(13.44F, 6.0F)
          horizontalLineTo(4.75F)
          curveTo(4.336F, 6.0F, 4.0F, 6.336F, 4.0F, 6.75F)
          reflectiveCurveTo(4.336F, 7.5F, 4.75F, 7.5F)
          horizontalLineToRelative(8.69F)
          lineToRelative(-1.72F, 1.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-3.0F, -3.0F)
          close()
          moveToRelative(-4.5F, 7.56F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-3.0F, 3.0F)
          curveTo(4.079F, 12.86F, 4.0F, 13.05F, 4.0F, 13.25F)
          reflectiveCurveToRelative(0.079F, 0.39F, 0.22F, 0.53F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(6.56F, 14.0F)
          horizontalLineToRelative(8.69F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(6.56F)
          lineToRelative(1.72F, -1.72F)
          close()        
      }
    }
    return _arrowSwap20!!
  }

private var _arrowSwap20: ImageVector? = null
