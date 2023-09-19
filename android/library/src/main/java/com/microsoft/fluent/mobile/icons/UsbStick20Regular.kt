package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.UsbStick20: ImageVector
  get() {
    if (_usbStick20 != null) {
      return _usbStick20!!
    }
    _usbStick20 = fluentIcon(name = "Regular.UsbStick20", 20f) {
      materialPath {
          moveTo(7.5F, 2.0F)
          horizontalLineToRelative(5.0F)
          curveTo(12.776F, 2.0F, 13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineTo(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          verticalLineTo(2.5F)
          curveTo(7.0F, 2.224F, 7.224F, 2.0F, 7.5F, 2.0F)
          close()
          moveTo(12.0F, 6.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveTo(7.0F, 7.0F)
          curveTo(6.448F, 7.0F, 6.0F, 7.448F, 6.0F, 8.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _usbStick20!!
  }

private var _usbStick20: ImageVector? = null
