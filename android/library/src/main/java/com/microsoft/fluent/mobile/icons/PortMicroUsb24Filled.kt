package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PortMicroUsb24: ImageVector
  get() {
    if (_portMicroUsb24 != null) {
      return _portMicroUsb24!!
    }
    _portMicroUsb24 = fluentIcon(name = "Filled.PortMicroUsb24", 24f) {
      materialPath {
          moveTo(19.0F, 12.83F)
          verticalLineTo(13.0F)
          curveToRelative(-0.002F, 0.53F, -0.213F, 1.038F, -0.587F, 1.412F)
          curveTo(18.038F, 14.787F, 17.53F, 14.998F, 17.0F, 15.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.53F, -0.002F, -1.038F, -0.213F, -1.412F, -0.588F)
          curveTo(5.213F, 14.038F, 5.002F, 13.53F, 5.0F, 13.0F)
          verticalLineToRelative(-0.17F)
          curveToRelative(0.0F, -0.264F, 0.052F, -0.525F, 0.154F, -0.769F)
          curveToRelative(0.1F, -0.243F, 0.25F, -0.465F, 0.436F, -0.651F)
          lineToRelative(1.82F, -1.82F)
          curveToRelative(0.186F, -0.187F, 0.408F, -0.335F, 0.651F, -0.436F)
          curveTo(8.305F, 9.052F, 8.566F, 9.0F, 8.83F, 9.0F)
          horizontalLineToRelative(6.34F)
          curveToRelative(0.264F, 0.0F, 0.525F, 0.052F, 0.769F, 0.154F)
          curveToRelative(0.243F, 0.1F, 0.465F, 0.25F, 0.651F, 0.436F)
          lineToRelative(1.82F, 1.82F)
          curveToRelative(0.187F, 0.186F, 0.335F, 0.408F, 0.436F, 0.651F)
          curveTo(18.948F, 12.305F, 19.0F, 12.566F, 19.0F, 12.83F)
          close()        
      }
    }
    return _portMicroUsb24!!
  }

private var _portMicroUsb24: ImageVector? = null
