package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowNext16: ImageVector
  get() {
    if (_arrowNext16 != null) {
      return _arrowNext16!!
    }
    _arrowNext16 = fluentIcon(name = "Filled.ArrowNext16", 16f) {
      materialPath {
          moveTo(3.704F, 11.736F)
          curveToRelative(-0.284F, 0.302F, -0.27F, 0.776F, 0.032F, 1.06F)
          curveTo(3.881F, 12.933F, 4.065F, 13.0F, 4.25F, 13.0F)
          curveToRelative(0.199F, 0.0F, 0.398F, -0.079F, 0.546F, -0.236F)
          lineToRelative(4.0F, -4.25F)
          curveToRelative(0.272F, -0.288F, 0.272F, -0.738F, 0.0F, -1.026F)
          lineToRelative(-4.0F, -4.252F)
          curveTo(4.513F, 2.933F, 4.037F, 2.92F, 3.736F, 3.204F)
          curveTo(3.434F, 3.487F, 3.42F, 3.962F, 3.704F, 4.264F)
          lineTo(7.22F, 8.002F)
          lineToRelative(-3.516F, 3.735F)
          close()
          moveTo(11.25F, 3.0F)
          curveTo(11.664F, 3.0F, 12.0F, 3.337F, 12.0F, 3.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-8.5F)
          curveTo(10.5F, 3.337F, 10.836F, 3.0F, 11.25F, 3.0F)
          close()        
      }
    }
    return _arrowNext16!!
  }

private var _arrowNext16: ImageVector? = null
