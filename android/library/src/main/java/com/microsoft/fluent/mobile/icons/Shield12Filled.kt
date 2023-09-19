package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shield12: ImageVector
  get() {
    if (_shield12 != null) {
      return _shield12!!
    }
    _shield12 = fluentIcon(name = "Filled.Shield12", 12f) {
      materialPath {
          moveTo(6.014F, 10.99F)
          curveToRelative(-0.05F, 0.0F, -0.11F, 0.0F, -0.16F, -0.03F)
          curveToRelative(-4.439F, -1.47F, -4.378F, -4.84F, -4.348F, -7.29F)
          verticalLineTo(2.99F)
          curveToRelative(0.0F, -0.28F, 0.22F, -0.5F, 0.5F, -0.5F)
          curveToRelative(0.02F, 0.0F, 2.315F, -0.02F, 3.637F, -1.35F)
          curveToRelative(0.19F, -0.19F, 0.521F, -0.19F, 0.711F, 0.0F)
          curveToRelative(1.333F, 1.33F, 3.617F, 1.35F, 3.637F, 1.35F)
          curveToRelative(0.28F, 0.0F, 0.5F, 0.22F, 0.5F, 0.5F)
          verticalLineToRelative(0.68F)
          curveToRelative(0.041F, 2.45F, 0.101F, 5.81F, -4.337F, 7.3F)
          curveToRelative(-0.05F, 0.02F, -0.1F, 0.03F, -0.16F, 0.03F)
          lineToRelative(0.02F, -0.01F)
          close()        
      }
    }
    return _shield12!!
  }

private var _shield12: ImageVector? = null
