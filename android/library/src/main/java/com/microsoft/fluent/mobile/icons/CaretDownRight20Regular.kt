package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretDownRight20: ImageVector
  get() {
    if (_caretDownRight20 != null) {
      return _caretDownRight20!!
    }
    _caretDownRight20 = fluentIcon(name = "Regular.CaretDownRight20", 20f) {
      materialPath {
          moveTo(13.293F, 5.25F)
          curveTo(13.923F, 4.62F, 15.0F, 5.066F, 15.0F, 5.957F)
          verticalLineTo(13.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(5.957F)
          curveToRelative(-0.89F, 0.0F, -1.337F, -1.077F, -0.707F, -1.707F)
          lineToRelative(8.043F, -8.043F)
          close()
          moveTo(14.0F, 5.957F)
          lineTo(5.957F, 14.0F)
          horizontalLineTo(13.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(5.957F)
          close()        
      }
    }
    return _caretDownRight20!!
  }

private var _caretDownRight20: ImageVector? = null
