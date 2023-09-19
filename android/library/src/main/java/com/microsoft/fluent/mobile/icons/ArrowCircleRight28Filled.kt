package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowCircleRight28: ImageVector
  get() {
    if (_arrowCircleRight28 != null) {
      return _arrowCircleRight28!!
    }
    _arrowCircleRight28 = fluentIcon(name = "Filled.ArrowCircleRight28", 28f) {
      materialPath {
          moveTo(2.0F, 14.0F)
          curveTo(2.0F, 7.373F, 7.373F, 2.0F, 14.0F, 2.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(2.0F, 20.627F, 2.0F, 14.0F)
          close()
          moveToRelative(12.22F, -5.03F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(3.22F, 3.22F)
          horizontalLineTo(8.75F)
          curveTo(8.336F, 13.25F, 8.0F, 13.586F, 8.0F, 14.0F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(8.69F)
          lineToRelative(-3.22F, 3.22F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(4.5F, -4.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          close()        
      }
    }
    return _arrowCircleRight28!!
  }

private var _arrowCircleRight28: ImageVector? = null
