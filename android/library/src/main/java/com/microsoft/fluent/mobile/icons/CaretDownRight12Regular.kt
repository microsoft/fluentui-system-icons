package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretDownRight12: ImageVector
  get() {
    if (_caretDownRight12 != null) {
      return _caretDownRight12!!
    }
    _caretDownRight12 = fluentIcon(name = "Regular.CaretDownRight12", 12f) {
      materialPath {
          moveTo(7.298F, 3.256F)
          curveToRelative(0.63F, -0.63F, 1.707F, -0.184F, 1.707F, 0.707F)
          verticalLineToRelative(3.543F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(3.962F)
          curveToRelative(-0.89F, 0.0F, -1.337F, -1.077F, -0.707F, -1.707F)
          lineToRelative(4.043F, -4.043F)
          close()
          moveToRelative(0.707F, 0.707F)
          lineTo(3.962F, 8.006F)
          horizontalLineToRelative(3.543F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(3.963F)
          close()        
      }
    }
    return _caretDownRight12!!
  }

private var _caretDownRight12: ImageVector? = null
