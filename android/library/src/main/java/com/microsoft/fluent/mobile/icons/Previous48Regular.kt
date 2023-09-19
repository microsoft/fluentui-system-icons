package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Previous48: ImageVector
  get() {
    if (_previous48 != null) {
      return _previous48!!
    }
    _previous48 = fluentIcon(name = "Regular.Previous48", 48f) {
      materialPath {
          moveTo(8.5F, 7.25F)
          curveTo(8.5F, 6.56F, 7.94F, 6.0F, 7.25F, 6.0F)
          reflectiveCurveTo(6.0F, 6.56F, 6.0F, 7.25F)
          verticalLineToRelative(33.5F)
          curveTo(6.0F, 41.44F, 6.56F, 42.0F, 7.25F, 42.0F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineTo(7.25F)
          close()
          moveTo(42.0F, 9.257F)
          curveToRelative(0.0F, -2.615F, -2.931F, -4.159F, -5.088F, -2.68F)
          lineTo(15.408F, 21.32F)
          curveToRelative(-1.883F, 1.291F, -1.883F, 4.07F, 0.0F, 5.361F)
          lineToRelative(21.504F, 14.743F)
          curveTo(39.07F, 42.904F, 42.0F, 41.36F, 42.0F, 38.744F)
          verticalLineTo(9.257F)
          close()
          moveTo(38.326F, 8.64F)
          curveTo(38.824F, 8.297F, 39.5F, 8.654F, 39.5F, 9.257F)
          verticalLineToRelative(29.487F)
          curveToRelative(0.0F, 0.603F, -0.676F, 0.96F, -1.174F, 0.618F)
          lineTo(16.822F, 24.62F)
          curveToRelative(-0.435F, -0.297F, -0.435F, -0.939F, 0.0F, -1.237F)
          lineTo(38.326F, 8.64F)
          close()        
      }
    }
    return _previous48!!
  }

private var _previous48: ImageVector? = null
