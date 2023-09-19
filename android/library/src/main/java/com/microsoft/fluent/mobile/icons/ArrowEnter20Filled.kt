package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowEnter20: ImageVector
  get() {
    if (_arrowEnter20 != null) {
      return _arrowEnter20!!
    }
    _arrowEnter20 = fluentIcon(name = "Filled.ArrowEnter20", 20f) {
      materialPath {
          moveTo(7.75F, 17.5F)
          curveTo(7.336F, 17.5F, 7.0F, 17.164F, 7.0F, 16.75F)
          reflectiveCurveTo(7.336F, 16.0F, 7.75F, 16.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.75F)
          curveTo(7.336F, 4.0F, 7.0F, 3.664F, 7.0F, 3.25F)
          reflectiveCurveTo(7.336F, 2.5F, 7.75F, 2.5F)
          horizontalLineTo(14.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, 1.567F, 3.5F, 3.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineTo(7.75F)
          close()
          moveTo(7.741F, 6.199F)
          curveToRelative(0.305F, -0.281F, 0.78F, -0.262F, 1.06F, 0.042F)
          lineToRelative(3.0F, 3.25F)
          curveToRelative(0.265F, 0.288F, 0.265F, 0.73F, 0.0F, 1.018F)
          lineToRelative(-3.0F, 3.25F)
          curveToRelative(-0.28F, 0.304F, -0.755F, 0.323F, -1.06F, 0.042F)
          curveToRelative(-0.304F, -0.28F, -0.323F, -0.755F, -0.042F, -1.06F)
          lineToRelative(1.838F, -1.991F)
          horizontalLineTo(1.75F)
          curveTo(1.336F, 10.75F, 1.0F, 10.414F, 1.0F, 10.0F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(7.787F)
          lineTo(7.699F, 7.259F)
          curveToRelative(-0.281F, -0.305F, -0.262F, -0.78F, 0.042F, -1.06F)
          close()        
      }
    }
    return _arrowEnter20!!
  }

private var _arrowEnter20: ImageVector? = null
