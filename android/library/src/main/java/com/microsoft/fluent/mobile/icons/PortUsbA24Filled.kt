package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PortUsbA24: ImageVector
  get() {
    if (_portUsbA24 != null) {
      return _portUsbA24!!
    }
    _portUsbA24 = fluentIcon(name = "Filled.PortUsbA24", 24f) {
      materialPath {
          moveTo(18.0F, 8.0F)
          horizontalLineTo(6.0F)
          curveTo(5.47F, 8.002F, 4.962F, 8.213F, 4.588F, 8.588F)
          curveTo(4.213F, 8.962F, 4.002F, 9.47F, 4.0F, 10.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.002F, 0.53F, 0.213F, 1.038F, 0.588F, 1.412F)
          curveTo(4.962F, 15.787F, 5.47F, 15.998F, 6.0F, 16.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(0.53F, -0.002F, 1.038F, -0.213F, 1.413F, -0.588F)
          curveTo(19.787F, 15.038F, 19.998F, 14.53F, 20.0F, 14.0F)
          verticalLineToRelative(-4.0F)
          curveToRelative(-0.002F, -0.53F, -0.213F, -1.038F, -0.587F, -1.412F)
          curveTo(19.038F, 8.213F, 18.53F, 8.002F, 18.0F, 8.0F)
          close()
          moveTo(6.0F, 10.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _portUsbA24!!
  }

private var _portUsbA24: ImageVector? = null
