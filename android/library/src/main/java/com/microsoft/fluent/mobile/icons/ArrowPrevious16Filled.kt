package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowPrevious16: ImageVector
  get() {
    if (_arrowPrevious16 != null) {
      return _arrowPrevious16!!
    }
    _arrowPrevious16 = fluentIcon(name = "Filled.ArrowPrevious16", 16f) {
      materialPath {
          moveTo(12.296F, 11.736F)
          curveToRelative(0.284F, 0.302F, 0.27F, 0.776F, -0.032F, 1.06F)
          curveTo(12.119F, 12.933F, 11.935F, 13.0F, 11.75F, 13.0F)
          curveToRelative(-0.199F, 0.0F, -0.398F, -0.079F, -0.546F, -0.236F)
          lineToRelative(-4.0F, -4.25F)
          curveToRelative(-0.272F, -0.288F, -0.272F, -0.738F, 0.0F, -1.026F)
          lineToRelative(4.0F, -4.252F)
          curveToRelative(0.283F, -0.303F, 0.759F, -0.316F, 1.06F, -0.032F)
          curveToRelative(0.302F, 0.283F, 0.316F, 0.758F, 0.032F, 1.06F)
          lineTo(8.78F, 8.002F)
          lineToRelative(3.516F, 3.735F)
          close()
          moveTo(4.75F, 3.0F)
          curveTo(4.336F, 3.0F, 4.0F, 3.337F, 4.0F, 3.75F)
          verticalLineToRelative(8.5F)
          curveTo(4.0F, 12.664F, 4.336F, 13.0F, 4.75F, 13.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-8.5F)
          curveTo(5.5F, 3.337F, 5.164F, 3.0F, 4.75F, 3.0F)
          close()        
      }
    }
    return _arrowPrevious16!!
  }

private var _arrowPrevious16: ImageVector? = null
