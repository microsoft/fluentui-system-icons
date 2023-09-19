package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretDownRight12: ImageVector
  get() {
    if (_caretDownRight12 != null) {
      return _caretDownRight12!!
    }
    _caretDownRight12 = fluentIcon(name = "Filled.CaretDownRight12", 12f) {
      materialPath {
          moveTo(9.005F, 3.963F)
          curveToRelative(0.0F, -0.891F, -1.077F, -1.337F, -1.707F, -0.707F)
          lineTo(3.255F, 7.299F)
          curveToRelative(-0.63F, 0.63F, -0.184F, 1.707F, 0.707F, 1.707F)
          horizontalLineToRelative(3.543F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(3.963F)
          close()        
      }
    }
    return _caretDownRight12!!
  }

private var _caretDownRight12: ImageVector? = null
