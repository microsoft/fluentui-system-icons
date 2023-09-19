package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowBounce20: ImageVector
  get() {
    if (_arrowBounce20 != null) {
      return _arrowBounce20!!
    }
    _arrowBounce20 = fluentIcon(name = "Filled.ArrowBounce20", 20f) {
      materialPath {
          moveTo(2.75F, 6.0F)
          curveTo(2.336F, 6.0F, 2.0F, 6.336F, 2.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 13.664F, 2.336F, 14.0F, 2.75F, 14.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(8.56F)
          lineToRelative(6.47F, 6.47F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(6.754F, -6.754F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(10.5F, 13.439F)
          lineTo(4.56F, 7.5F)
          horizontalLineToRelative(4.69F)
          curveTo(9.664F, 7.5F, 10.0F, 7.164F, 10.0F, 6.75F)
          reflectiveCurveTo(9.664F, 6.0F, 9.25F, 6.0F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _arrowBounce20!!
  }

private var _arrowBounce20: ImageVector? = null
