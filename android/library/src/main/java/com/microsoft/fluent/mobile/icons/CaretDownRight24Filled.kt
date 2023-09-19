package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretDownRight24: ImageVector
  get() {
    if (_caretDownRight24 != null) {
      return _caretDownRight24!!
    }
    _caretDownRight24 = fluentIcon(name = "Filled.CaretDownRight24", 24f) {
      materialPath {
          moveTo(18.0F, 7.208F)
          curveToRelative(0.0F, -1.114F, -1.346F, -1.672F, -2.133F, -0.884F)
          lineToRelative(-9.543F, 9.543F)
          curveTo(5.536F, 16.654F, 6.094F, 18.0F, 7.208F, 18.0F)
          horizontalLineToRelative(9.043F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.783F, 1.75F, -1.75F)
          verticalLineTo(7.208F)
          close()        
      }
    }
    return _caretDownRight24!!
  }

private var _caretDownRight24: ImageVector? = null
