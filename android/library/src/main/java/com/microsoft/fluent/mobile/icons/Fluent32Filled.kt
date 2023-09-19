package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Fluent32: ImageVector
  get() {
    if (_fluent32 != null) {
      return _fluent32!!
    }
    _fluent32 = fluentIcon(name = "Filled.Fluent32", 32f) {
      materialPath {
          moveTo(17.447F, 2.106F)
          curveToRelative(-0.281F, -0.141F, -0.613F, -0.141F, -0.894F, 0.0F)
          lineToRelative(-8.0F, 4.0F)
          curveTo(8.214F, 6.275F, 8.0F, 6.62F, 8.0F, 7.0F)
          verticalLineToRelative(17.5F)
          curveToRelative(0.0F, 0.361F, 0.195F, 0.695F, 0.51F, 0.872F)
          lineToRelative(8.0F, 4.5F)
          curveToRelative(0.31F, 0.174F, 0.688F, 0.17F, 0.995F, -0.009F)
          curveTo(17.81F, 29.683F, 18.0F, 29.355F, 18.0F, 29.0F)
          verticalLineToRelative(-9.382F)
          lineToRelative(7.447F, -3.724F)
          curveTo(25.786F, 15.725F, 26.0F, 15.38F, 26.0F, 15.0F)
          reflectiveCurveToRelative(-0.214F, -0.725F, -0.553F, -0.894F)
          lineTo(19.237F, 11.0F)
          lineToRelative(6.21F, -3.106F)
          curveTo(25.786F, 7.725F, 26.0F, 7.38F, 26.0F, 7.0F)
          reflectiveCurveToRelative(-0.214F, -0.725F, -0.553F, -0.894F)
          lineToRelative(-8.0F, -4.0F)
          close()        
      }
    }
    return _fluent32!!
  }

private var _fluent32: ImageVector? = null
