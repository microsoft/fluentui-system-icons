package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Fluent32: ImageVector
  get() {
    if (_fluent32 != null) {
      return _fluent32!!
    }
    _fluent32 = fluentIcon(name = "Regular.Fluent32", 32f) {
      materialPath {
          moveTo(16.553F, 2.106F)
          curveToRelative(0.281F, -0.141F, 0.613F, -0.141F, 0.894F, 0.0F)
          lineToRelative(8.0F, 4.0F)
          curveTo(25.786F, 6.275F, 26.0F, 6.62F, 26.0F, 7.0F)
          reflectiveCurveToRelative(-0.214F, 0.725F, -0.553F, 0.894F)
          lineTo(19.237F, 11.0F)
          lineToRelative(6.21F, 3.106F)
          curveTo(25.786F, 14.275F, 26.0F, 14.62F, 26.0F, 15.0F)
          reflectiveCurveToRelative(-0.214F, 0.725F, -0.553F, 0.894F)
          lineTo(18.0F, 19.618F)
          verticalLineTo(29.0F)
          curveToRelative(0.0F, 0.355F, -0.189F, 0.684F, -0.495F, 0.863F)
          curveToRelative(-0.307F, 0.18F, -0.686F, 0.183F, -0.995F, 0.009F)
          lineToRelative(-8.0F, -4.5F)
          curveTo(8.195F, 25.195F, 8.0F, 24.862F, 8.0F, 24.5F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -0.379F, 0.214F, -0.725F, 0.553F, -0.894F)
          lineToRelative(8.0F, -4.0F)
          close()
          moveTo(10.0F, 7.618F)
          verticalLineToRelative(16.297F)
          lineToRelative(6.0F, 3.375F)
          verticalLineTo(19.0F)
          curveToRelative(0.0F, -0.379F, 0.214F, -0.725F, 0.553F, -0.894F)
          lineTo(22.763F, 15.0F)
          lineToRelative(-6.21F, -3.106F)
          curveTo(16.214F, 11.725F, 16.0F, 11.38F, 16.0F, 11.0F)
          reflectiveCurveToRelative(0.214F, -0.725F, 0.553F, -0.894F)
          lineTo(22.763F, 7.0F)
          lineTo(17.0F, 4.118F)
          lineToRelative(-7.0F, 3.5F)
          close()        
      }
    }
    return _fluent32!!
  }

private var _fluent32: ImageVector? = null
