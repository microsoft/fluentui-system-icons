package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Send48: ImageVector
  get() {
    if (_send48 != null) {
      return _send48!!
    }
    _send48 = fluentIcon(name = "Regular.Send48", 48f) {
      materialPath {
          moveTo(4.128F, 6.964F)
          curveToRelative(-0.62F, -1.899F, 1.358F, -3.604F, 3.145F, -2.71F)
          lineTo(42.756F, 21.99F)
          curveToRelative(1.66F, 0.83F, 1.66F, 3.196F, 0.0F, 4.025F)
          lineTo(7.274F, 43.752F)
          curveToRelative(-1.787F, 0.893F, -3.765F, -0.812F, -3.145F, -2.71F)
          lineToRelative(5.557F, -17.04F)
          lineTo(4.128F, 6.965F)
          close()
          moveToRelative(7.78F, 18.289F)
          lineTo(6.69F, 41.248F)
          lineToRelative(34.5F, -17.245F)
          lineTo(6.69F, 6.757F)
          lineToRelative(5.217F, 15.996F)
          horizontalLineTo(28.75F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(11.907F)
          close()        
      }
    }
    return _send48!!
  }

private var _send48: ImageVector? = null
