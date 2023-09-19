package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.KeyboardShift20: ImageVector
  get() {
    if (_keyboardShift20 != null) {
      return _keyboardShift20!!
    }
    _keyboardShift20 = fluentIcon(name = "Filled.KeyboardShift20", 20f) {
      materialPath {
          moveTo(11.139F, 2.528F)
          curveToRelative(-0.598F, -0.704F, -1.68F, -0.704F, -2.278F, 0.0F)
          lineToRelative(-6.62F, 7.803F)
          curveTo(1.687F, 10.982F, 2.147F, 11.985F, 3.0F, 11.985F)
          horizontalLineToRelative(3.01F)
          verticalLineToRelative(5.012F)
          curveTo(6.01F, 17.551F, 6.455F, 18.0F, 7.006F, 18.0F)
          horizontalLineToRelative(5.986F)
          curveToRelative(0.55F, 0.0F, 0.998F, -0.449F, 0.998F, -1.003F)
          verticalLineToRelative(-5.012F)
          horizontalLineTo(17.0F)
          curveToRelative(0.85F, 0.0F, 1.31F, -1.003F, 0.759F, -1.654F)
          lineToRelative(-6.621F, -7.803F)
          close()        
      }
    }
    return _keyboardShift20!!
  }

private var _keyboardShift20: ImageVector? = null
