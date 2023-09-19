package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Next48: ImageVector
  get() {
    if (_next48 != null) {
      return _next48!!
    }
    _next48 = fluentIcon(name = "Regular.Next48", 48f) {
      materialPath {
          moveTo(39.5F, 7.25F)
          curveTo(39.5F, 6.56F, 40.06F, 6.0F, 40.75F, 6.0F)
          reflectiveCurveTo(42.0F, 6.56F, 42.0F, 7.25F)
          verticalLineToRelative(33.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(7.25F)
          close()
          moveTo(6.0F, 9.257F)
          verticalLineToRelative(29.487F)
          curveToRelative(0.0F, 2.615F, 2.931F, 4.16F, 5.088F, 2.68F)
          lineToRelative(21.504F, -14.743F)
          curveToRelative(1.883F, -1.29F, 1.883F, -4.07F, 0.0F, -5.36F)
          lineTo(11.088F, 6.576F)
          curveTo(8.93F, 5.098F, 6.0F, 6.642F, 6.0F, 9.257F)
          close()
          moveTo(9.674F, 8.64F)
          lineToRelative(21.504F, 14.743F)
          curveToRelative(0.435F, 0.298F, 0.435F, 0.94F, 0.0F, 1.237F)
          lineTo(9.674F, 39.362F)
          curveTo(9.177F, 39.704F, 8.5F, 39.347F, 8.5F, 38.744F)
          verticalLineTo(9.257F)
          curveToRelative(0.0F, -0.603F, 0.677F, -0.96F, 1.174F, -0.618F)
          close()        
      }
    }
    return _next48!!
  }

private var _next48: ImageVector? = null
