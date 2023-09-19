package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowBounce16: ImageVector
  get() {
    if (_arrowBounce16 != null) {
      return _arrowBounce16!!
    }
    _arrowBounce16 = fluentIcon(name = "Filled.ArrowBounce16", 16f) {
      materialPath {
          moveTo(8.002F, 4.75F)
          curveTo(8.002F, 4.336F, 7.667F, 4.0F, 7.252F, 4.0F)
          horizontalLineToRelative(-5.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(6.561F)
          lineToRelative(5.718F, 5.72F)
          curveTo(8.36F, 12.42F, 8.55F, 12.5F, 8.75F, 12.5F)
          reflectiveCurveToRelative(0.39F, -0.079F, 0.53F, -0.22F)
          lineToRelative(5.5F, -5.5F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(-0.292F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-4.97F, 4.97F)
          lineTo(3.562F, 5.5F)
          horizontalLineToRelative(3.69F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          close()        
      }
    }
    return _arrowBounce16!!
  }

private var _arrowBounce16: ImageVector? = null
