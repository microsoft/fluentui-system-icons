package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Send20: ImageVector
  get() {
    if (_send20 != null) {
      return _send20!!
    }
    _send20 = fluentIcon(name = "Filled.Send20", 20f) {
      materialPath {
          moveTo(2.724F, 2.053F)
          curveToRelative(-0.176F, -0.088F, -0.387F, -0.065F, -0.54F, 0.06F)
          curveToRelative(-0.152F, 0.124F, -0.218F, 0.326F, -0.167F, 0.516F)
          lineToRelative(1.498F, 5.618F)
          curveToRelative(0.05F, 0.19F, 0.207F, 0.332F, 0.4F, 0.364F)
          lineToRelative(6.855F, 1.142F)
          curveToRelative(0.279F, 0.047F, 0.279F, 0.447F, 0.0F, 0.494F)
          lineToRelative(-6.854F, 1.142F)
          curveToRelative(-0.194F, 0.032F, -0.35F, 0.175F, -0.401F, 0.364F)
          lineToRelative(-1.498F, 5.618F)
          curveToRelative(-0.05F, 0.19F, 0.015F, 0.392F, 0.167F, 0.517F)
          curveToRelative(0.153F, 0.124F, 0.364F, 0.147F, 0.54F, 0.06F)
          lineToRelative(15.0F, -7.5F)
          curveTo(17.893F, 10.362F, 18.0F, 10.188F, 18.0F, 10.0F)
          curveToRelative(0.0F, -0.19F, -0.107F, -0.363F, -0.276F, -0.447F)
          lineToRelative(-15.0F, -7.5F)
          close()        
      }
    }
    return _send20!!
  }

private var _send20: ImageVector? = null
