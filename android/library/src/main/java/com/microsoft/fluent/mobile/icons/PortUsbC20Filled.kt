package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PortUsbC20: ImageVector
  get() {
    if (_portUsbC20 != null) {
      return _portUsbC20!!
    }
    _portUsbC20 = fluentIcon(name = "Filled.PortUsbC20", 20f) {
      materialPath {
          moveTo(4.5F, 10.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          close()        
      }
    }
    return _portUsbC20!!
  }

private var _portUsbC20: ImageVector? = null
