package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretDownRight16: ImageVector
  get() {
    if (_caretDownRight16 != null) {
      return _caretDownRight16!!
    }
    _caretDownRight16 = fluentIcon(name = "Regular.CaretDownRight16", 16f) {
      materialPath {
          moveTo(10.293F, 4.25F)
          curveTo(10.923F, 3.62F, 12.0F, 4.066F, 12.0F, 4.957F)
          verticalLineTo(10.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(4.957F)
          curveToRelative(-0.89F, 0.0F, -1.337F, -1.077F, -0.707F, -1.707F)
          lineToRelative(6.043F, -6.043F)
          close()
          moveTo(11.0F, 4.957F)
          lineTo(4.957F, 11.0F)
          horizontalLineTo(10.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(4.957F)
          close()        
      }
    }
    return _caretDownRight16!!
  }

private var _caretDownRight16: ImageVector? = null
