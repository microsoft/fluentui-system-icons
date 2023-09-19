package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Next28: ImageVector
  get() {
    if (_next28 != null) {
      return _next28!!
    }
    _next28 = fluentIcon(name = "Regular.Next28", 28f) {
      materialPath {
          moveTo(23.5F, 3.75F)
          curveTo(23.5F, 3.336F, 23.836F, 3.0F, 24.25F, 3.0F)
          reflectiveCurveTo(25.0F, 3.336F, 25.0F, 3.75F)
          verticalLineToRelative(20.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(3.75F)
          close()
          moveTo(3.0F, 5.254F)
          curveTo(3.0F, 3.438F, 5.041F, 2.37F, 6.533F, 3.406F)
          lineToRelative(12.504F, 8.68F)
          curveToRelative(1.284F, 0.891F, 1.29F, 2.787F, 0.013F, 3.688F)
          lineToRelative(-12.504F, 8.81F)
          curveTo(5.056F, 25.634F, 3.0F, 24.57F, 3.0F, 22.745F)
          verticalLineTo(5.254F)
          close()
          moveToRelative(2.678F, -0.616F)
          curveTo(5.18F, 4.293F, 4.5F, 4.648F, 4.5F, 5.254F)
          verticalLineToRelative(17.491F)
          curveToRelative(0.0F, 0.608F, 0.685F, 0.963F, 1.182F, 0.613F)
          lineToRelative(12.504F, -8.81F)
          curveToRelative(0.426F, -0.3F, 0.424F, -0.933F, -0.004F, -1.23F)
          lineTo(5.678F, 4.638F)
          close()        
      }
    }
    return _next28!!
  }

private var _next28: ImageVector? = null
