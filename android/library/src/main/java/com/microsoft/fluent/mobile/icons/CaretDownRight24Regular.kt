package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretDownRight24: ImageVector
  get() {
    if (_caretDownRight24 != null) {
      return _caretDownRight24!!
    }
    _caretDownRight24 = fluentIcon(name = "Regular.CaretDownRight24", 24f) {
      materialPath {
          moveTo(16.5F, 7.811F)
          lineToRelative(-8.689F, 8.69F)
          horizontalLineToRelative(8.44F)
          curveToRelative(0.137F, 0.0F, 0.25F, -0.113F, 0.25F, -0.25F)
          verticalLineTo(7.81F)
          close()
          moveToRelative(-0.633F, -1.487F)
          curveTo(16.654F, 5.536F, 18.0F, 6.094F, 18.0F, 7.208F)
          verticalLineToRelative(9.043F)
          curveToRelative(0.0F, 0.966F, -0.783F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(7.208F)
          curveToRelative(-1.114F, 0.0F, -1.672F, -1.347F, -0.884F, -2.134F)
          lineToRelative(9.543F, -9.543F)
          close()        
      }
    }
    return _caretDownRight24!!
  }

private var _caretDownRight24: ImageVector? = null
