package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Heart48: ImageVector
  get() {
    if (_heart48 != null) {
      return _heart48!!
    }
    _heart48 = fluentIcon(name = "Regular.Heart48", 48f) {
      materialPath {
          moveTo(7.923F, 10.155F)
          curveToRelative(4.113F, -3.297F, 10.04F, -3.003F, 13.806F, 0.684F)
          lineToRelative(2.272F, 2.223F)
          lineToRelative(2.266F, -2.22F)
          curveToRelative(3.767F, -3.689F, 9.695F, -3.984F, 13.809F, -0.687F)
          curveToRelative(4.85F, 3.887F, 5.242F, 11.13F, 0.837F, 15.516F)
          lineToRelative(-16.03F, 15.964F)
          curveToRelative(-0.488F, 0.486F, -1.276F, 0.486F, -1.764F, 0.0F)
          lineTo(7.087F, 25.67F)
          curveToRelative(-4.405F, -4.386F, -4.015F, -11.628F, 0.836F, -15.516F)
          close()
          moveToRelative(12.057F, 2.47F)
          curveToRelative(-2.863F, -2.802F, -7.367F, -3.025F, -10.494F, -0.52F)
          curveTo(5.8F, 15.06F, 5.503F, 20.565F, 8.851F, 23.9F)
          lineTo(24.0F, 38.986F)
          lineToRelative(15.148F, -15.087F)
          curveToRelative(3.348F, -3.334F, 3.05F, -8.839F, -0.636F, -11.793F)
          curveToRelative(-3.127F, -2.506F, -7.633F, -2.282F, -10.496F, 0.522F)
          lineToRelative(-3.141F, 3.077F)
          curveToRelative(-0.486F, 0.476F, -1.263F, 0.476F, -1.75F, 0.0F)
          lineToRelative(-3.146F, -3.08F)
          close()        
      }
    }
    return _heart48!!
  }

private var _heart48: ImageVector? = null
