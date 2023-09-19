package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PortUsbA20: ImageVector
  get() {
    if (_portUsbA20 != null) {
      return _portUsbA20!!
    }
    _portUsbA20 = fluentIcon(name = "Filled.PortUsbA20", 20f) {
      materialPath {
          moveTo(4.5F, 7.0F)
          curveTo(3.672F, 7.0F, 3.0F, 7.672F, 3.0F, 8.5F)
          verticalLineToRelative(3.0F)
          curveTo(3.0F, 12.328F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-3.0F)
          curveTo(17.0F, 7.672F, 16.328F, 7.0F, 15.5F, 7.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(0.0F, 1.5F)
          horizontalLineToRelative(11.0F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(-11.0F)
          verticalLineTo(8.5F)
          close()        
      }
    }
    return _portUsbA20!!
  }

private var _portUsbA20: ImageVector? = null
