package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretDown12: ImageVector
  get() {
    if (_caretDown12 != null) {
      return _caretDown12!!
    }
    _caretDown12 = fluentIcon(name = "Regular.CaretDown12", 12f) {
      materialPath {
          moveTo(3.076F, 4.617F)
          curveTo(3.231F, 4.244F, 3.596F, 4.0F, 4.0F, 4.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.405F, 0.0F, 0.77F, 0.244F, 0.924F, 0.617F)
          curveToRelative(0.155F, 0.374F, 0.07F, 0.804F, -0.217F, 1.09F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.39F, 0.39F, -1.023F, 0.39F, -1.414F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveTo(3.007F, 5.421F, 2.92F, 4.991F, 3.076F, 4.617F)
          close()
          moveTo(4.0F, 5.0F)
          lineToRelative(1.823F, 1.823F)
          curveToRelative(0.098F, 0.098F, 0.256F, 0.098F, 0.354F, 0.0F)
          lineTo(8.0F, 5.0F)
          horizontalLineTo(4.0F)
          close()        
      }
    }
    return _caretDown12!!
  }

private var _caretDown12: ImageVector? = null
