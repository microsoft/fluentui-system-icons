package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PortUsbC24: ImageVector
  get() {
    if (_portUsbC24 != null) {
      return _portUsbC24!!
    }
    _portUsbC24 = fluentIcon(name = "Filled.PortUsbC24", 24f) {
      materialPath {
          moveTo(19.0F, 12.0F)
          curveToRelative(0.0F, 0.394F, -0.077F, 0.784F, -0.227F, 1.149F)
          curveToRelative(-0.15F, 0.364F, -0.372F, 0.695F, -0.65F, 0.974F)
          curveToRelative(-0.28F, 0.278F, -0.61F, 0.5F, -0.974F, 0.65F)
          curveTo(16.785F, 14.923F, 16.394F, 15.0F, 16.0F, 15.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.796F, 0.0F, -1.559F, -0.316F, -2.121F, -0.879F)
          curveTo(5.316F, 13.56F, 5.0F, 12.796F, 5.0F, 12.0F)
          reflectiveCurveToRelative(0.316F, -1.559F, 0.879F, -2.121F)
          curveTo(6.44F, 9.316F, 7.204F, 9.0F, 8.0F, 9.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.394F, 0.0F, 0.785F, 0.077F, 1.149F, 0.227F)
          curveToRelative(0.364F, 0.15F, 0.695F, 0.372F, 0.973F, 0.65F)
          curveToRelative(0.28F, 0.28F, 0.5F, 0.61F, 0.65F, 0.974F)
          curveToRelative(0.152F, 0.364F, 0.23F, 0.755F, 0.228F, 1.149F)
          close()        
      }
    }
    return _portUsbC24!!
  }

private var _portUsbC24: ImageVector? = null
