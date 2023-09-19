package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Next48: ImageVector
  get() {
    if (_next48 != null) {
      return _next48!!
    }
    _next48 = fluentIcon(name = "Filled.Next48", 48f) {
      materialPath {
          moveTo(40.75F, 6.0F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(33.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveTo(42.0F, 41.44F, 42.0F, 40.75F)
          verticalLineTo(7.25F)
          curveTo(42.0F, 6.56F, 41.44F, 6.0F, 40.75F, 6.0F)
          close()
          moveTo(6.0F, 9.256F)
          curveToRelative(0.0F, -2.615F, 2.931F, -4.16F, 5.088F, -2.68F)
          lineToRelative(21.504F, 14.743F)
          curveToRelative(1.883F, 1.29F, 1.883F, 4.07F, 0.0F, 5.36F)
          lineTo(11.088F, 41.424F)
          curveTo(8.93F, 42.9F, 6.0F, 41.357F, 6.0F, 38.743F)
          verticalLineTo(9.255F)
          close()        
      }
    }
    return _next48!!
  }

private var _next48: ImageVector? = null
