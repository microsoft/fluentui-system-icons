package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.KeyboardShift16: ImageVector
  get() {
    if (_keyboardShift16 != null) {
      return _keyboardShift16!!
    }
    _keyboardShift16 = fluentIcon(name = "Regular.KeyboardShift16", 16f) {
      materialPath {
          moveTo(8.395F, 2.191F)
          curveToRelative(-0.201F, -0.253F, -0.588F, -0.253F, -0.789F, 0.0F)
          lineToRelative(-4.6F, 5.802F)
          horizontalLineToRelative(2.482F)
          curveToRelative(0.133F, 0.0F, 0.261F, 0.053F, 0.355F, 0.147F)
          curveTo(5.938F, 8.234F, 5.99F, 8.361F, 5.99F, 8.494F)
          verticalLineToRelative(4.505F)
          horizontalLineToRelative(4.02F)
          verticalLineTo(8.494F)
          curveToRelative(0.0F, -0.277F, 0.225F, -0.5F, 0.503F, -0.5F)
          horizontalLineToRelative(2.48F)
          lineTo(8.395F, 2.19F)
          close()
          moveToRelative(-1.578F, -0.62F)
          curveToRelative(0.604F, -0.761F, 1.763F, -0.761F, 2.367F, 0.0F)
          lineToRelative(4.598F, 5.802F)
          curveToRelative(0.52F, 0.657F, 0.05F, 1.621F, -0.789F, 1.621F)
          horizontalLineToRelative(-1.978F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 0.553F, -0.45F, 1.001F, -1.005F, 1.001F)
          horizontalLineTo(5.99F)
          curveToRelative(-0.555F, 0.0F, -1.005F, -0.448F, -1.005F, -1.001F)
          verticalLineTo(8.994F)
          horizontalLineTo(3.007F)
          curveToRelative(-0.84F, 0.0F, -1.31F, -0.964F, -0.789F, -1.62F)
          lineToRelative(4.6F, -5.803F)
          close()        
      }
    }
    return _keyboardShift16!!
  }

private var _keyboardShift16: ImageVector? = null
