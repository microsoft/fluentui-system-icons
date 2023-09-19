package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.KeyboardShift20: ImageVector
  get() {
    if (_keyboardShift20 != null) {
      return _keyboardShift20!!
    }
    _keyboardShift20 = fluentIcon(name = "Regular.KeyboardShift20", 20f) {
      materialPath {
          moveTo(8.861F, 2.528F)
          curveToRelative(0.598F, -0.704F, 1.68F, -0.704F, 2.278F, 0.0F)
          lineToRelative(6.62F, 7.803F)
          curveToRelative(0.553F, 0.651F, 0.093F, 1.654F, -0.759F, 1.654F)
          horizontalLineToRelative(-3.01F)
          verticalLineToRelative(5.012F)
          curveToRelative(0.0F, 0.554F, -0.446F, 1.003F, -0.997F, 1.003F)
          horizontalLineTo(7.007F)
          curveToRelative(-0.551F, 0.0F, -0.998F, -0.449F, -0.998F, -1.003F)
          verticalLineToRelative(-5.012F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.85F, 0.0F, -1.31F, -1.003F, -0.759F, -1.654F)
          lineToRelative(6.621F, -7.803F)
          close()
          moveToRelative(1.518F, 0.65F)
          curveToRelative(-0.199F, -0.234F, -0.56F, -0.234F, -0.759F, 0.0F)
          lineTo(3.0F, 10.983F)
          horizontalLineToRelative(3.508F)
          curveToRelative(0.276F, 0.0F, 0.499F, 0.224F, 0.499F, 0.501F)
          verticalLineToRelative(5.514F)
          horizontalLineToRelative(5.986F)
          verticalLineToRelative(-5.514F)
          curveToRelative(0.0F, -0.277F, 0.223F, -0.501F, 0.499F, -0.501F)
          horizontalLineTo(17.0F)
          lineTo(10.38F, 3.18F)
          close()        
      }
    }
    return _keyboardShift20!!
  }

private var _keyboardShift20: ImageVector? = null
