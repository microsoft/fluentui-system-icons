package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowFit16: ImageVector
  get() {
    if (_arrowFit16 != null) {
      return _arrowFit16!!
    }
    _arrowFit16 = fluentIcon(name = "Filled.ArrowFit16", 16f) {
      materialPath {
          moveTo(4.28F, 5.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(3.56F, 7.0F)
          horizontalLineToRelative(2.69F)
          curveTo(6.664F, 7.0F, 7.0F, 7.336F, 7.0F, 7.75F)
          reflectiveCurveTo(6.664F, 8.5F, 6.25F, 8.5F)
          horizontalLineTo(3.56F)
          lineToRelative(0.72F, 0.72F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()
          moveToRelative(7.44F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(0.72F, -0.72F)
          horizontalLineTo(9.75F)
          curveTo(9.336F, 8.5F, 9.0F, 8.164F, 9.0F, 7.75F)
          reflectiveCurveTo(9.336F, 7.0F, 9.75F, 7.0F)
          horizontalLineToRelative(2.69F)
          lineToRelative(-0.72F, -0.72F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowFit16!!
  }

private var _arrowFit16: ImageVector? = null
