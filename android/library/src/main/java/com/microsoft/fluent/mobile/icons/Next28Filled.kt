package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Next28: ImageVector
  get() {
    if (_next28 != null) {
      return _next28!!
    }
    _next28 = fluentIcon(name = "Filled.Next28", 28f) {
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
      }
    }
    return _next28!!
  }

private var _next28: ImageVector? = null
