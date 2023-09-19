package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Send20: ImageVector
  get() {
    if (_send20 != null) {
      return _send20!!
    }
    _send20 = fluentIcon(name = "Regular.Send20", 20f) {
      materialPath {
          moveTo(2.184F, 2.112F)
          curveToRelative(0.153F, -0.124F, 0.364F, -0.147F, 0.54F, -0.06F)
          lineToRelative(15.0F, 7.5F)
          curveTo(17.893F, 9.638F, 18.0F, 9.812F, 18.0F, 10.0F)
          curveToRelative(0.0F, 0.19F, -0.107F, 0.363F, -0.276F, 0.447F)
          lineToRelative(-15.0F, 7.5F)
          curveToRelative(-0.176F, 0.088F, -0.387F, 0.065F, -0.54F, -0.06F)
          curveToRelative(-0.152F, -0.124F, -0.218F, -0.326F, -0.167F, -0.516F)
          lineTo(3.983F, 10.0F)
          lineTo(2.016F, 2.629F)
          curveToRelative(-0.05F, -0.19F, 0.015F, -0.392F, 0.167F, -0.517F)
          close()
          moveToRelative(2.7F, 8.388F)
          lineTo(3.27F, 16.556F)
          lineTo(16.382F, 10.0F)
          lineTo(3.269F, 3.444F)
          lineTo(4.884F, 9.5F)
          horizontalLineTo(11.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(4.884F)
          close()        
      }
    }
    return _send20!!
  }

private var _send20: ImageVector? = null
