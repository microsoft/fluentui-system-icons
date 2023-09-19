package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Previous28: ImageVector
  get() {
    if (_previous28 != null) {
      return _previous28!!
    }
    _previous28 = fluentIcon(name = "Filled.Previous28", 28f) {
      materialPath {
          moveTo(4.5F, 3.75F)
          curveTo(4.5F, 3.336F, 4.164F, 3.0F, 3.75F, 3.0F)
          reflectiveCurveTo(3.0F, 3.336F, 3.0F, 3.75F)
          verticalLineToRelative(20.5F)
          curveTo(3.0F, 24.664F, 3.336F, 25.0F, 3.75F, 25.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(3.75F)
          close()
          moveTo(25.0F, 5.254F)
          curveToRelative(0.0F, -1.816F, -2.041F, -2.884F, -3.533F, -1.848F)
          lineToRelative(-12.504F, 8.68F)
          curveToRelative(-1.284F, 0.891F, -1.29F, 2.787F, -0.013F, 3.688F)
          lineToRelative(12.504F, 8.81F)
          curveTo(22.944F, 25.634F, 25.0F, 24.57F, 25.0F, 22.745F)
          verticalLineTo(5.254F)
          close()        
      }
    }
    return _previous28!!
  }

private var _previous28: ImageVector? = null
