package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Previous28: ImageVector
  get() {
    if (_previous28 != null) {
      return _previous28!!
    }
    _previous28 = fluentIcon(name = "Regular.Previous28", 28f) {
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
          moveToRelative(-2.678F, -0.616F)
          curveToRelative(0.497F, -0.345F, 1.178F, 0.01F, 1.178F, 0.616F)
          verticalLineToRelative(17.491F)
          curveToRelative(0.0F, 0.608F, -0.685F, 0.963F, -1.182F, 0.613F)
          lineToRelative(-12.504F, -8.81F)
          curveToRelative(-0.426F, -0.3F, -0.424F, -0.933F, 0.004F, -1.23F)
          lineToRelative(12.504F, -8.68F)
          close()        
      }
    }
    return _previous28!!
  }

private var _previous28: ImageVector? = null
