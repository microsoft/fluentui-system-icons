package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowFitIn16: ImageVector
  get() {
    if (_arrowFitIn16 != null) {
      return _arrowFitIn16!!
    }
    _arrowFitIn16 = fluentIcon(name = "Filled.ArrowFitIn16", 16f) {
      materialPath {
          moveTo(3.72F, 6.28F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(4.44F, 8.5F)
          horizontalLineTo(1.75F)
          curveTo(1.336F, 8.5F, 1.0F, 8.164F, 1.0F, 7.75F)
          reflectiveCurveTo(1.336F, 7.0F, 1.75F, 7.0F)
          horizontalLineToRelative(2.69F)
          lineTo(3.72F, 6.28F)
          close()
          moveToRelative(8.56F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(11.56F, 8.5F)
          horizontalLineToRelative(2.69F)
          curveTo(14.664F, 8.5F, 15.0F, 8.164F, 15.0F, 7.75F)
          reflectiveCurveTo(14.664F, 7.0F, 14.25F, 7.0F)
          horizontalLineToRelative(-2.69F)
          lineToRelative(0.72F, -0.72F)
          close()        
      }
    }
    return _arrowFitIn16!!
  }

private var _arrowFitIn16: ImageVector? = null
