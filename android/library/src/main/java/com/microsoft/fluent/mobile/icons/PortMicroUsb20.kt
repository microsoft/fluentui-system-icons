package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PortMicroUsb20: ImageVector
  get() {
    if (_portMicroUsb20 != null) {
      return _portMicroUsb20!!
    }
    _portMicroUsb20 = fluentIcon(name = "Filled.PortMicroUsb20", 20f) {
      materialPath {
          moveTo(6.433F, 8.3F)
          curveTo(6.693F, 8.105F, 7.01F, 8.0F, 7.333F, 8.0F)
          horizontalLineToRelative(5.334F)
          curveToRelative(0.324F, 0.0F, 0.64F, 0.105F, 0.9F, 0.3F)
          lineToRelative(1.333F, 1.0F)
          curveToRelative(0.378F, 0.283F, 0.6F, 0.728F, 0.6F, 1.2F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          curveToRelative(0.0F, -0.472F, 0.222F, -0.917F, 0.6F, -1.2F)
          lineToRelative(1.333F, -1.0F)
          close()        
      }
    }
    return _portMicroUsb20!!
  }

private var _portMicroUsb20: ImageVector? = null
