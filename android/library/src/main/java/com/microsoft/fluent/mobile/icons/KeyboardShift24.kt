package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.KeyboardShift24: ImageVector
  get() {
    if (_keyboardShift24 != null) {
      return _keyboardShift24!!
    }
    _keyboardShift24 = fluentIcon(name = "Filled.KeyboardShift24", 24f) {
      materialPath {
          moveTo(10.677F, 2.603F)
          curveToRelative(0.698F, -0.804F, 1.946F, -0.804F, 2.644F, 0.0F)
          lineToRelative(8.246F, 9.504F)
          curveToRelative(0.983F, 1.133F, 0.178F, 2.897F, -1.322F, 2.897F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(5.247F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(7.783F, 22.0F, 7.0F, 21.217F, 7.0F, 20.25F)
          verticalLineToRelative(-5.247F)
          horizontalLineTo(3.754F)
          curveToRelative(-1.5F, 0.0F, -2.305F, -1.764F, -1.322F, -2.897F)
          lineToRelative(8.245F, -9.504F)
          close()        
      }
    }
    return _keyboardShift24!!
  }

private var _keyboardShift24: ImageVector? = null
