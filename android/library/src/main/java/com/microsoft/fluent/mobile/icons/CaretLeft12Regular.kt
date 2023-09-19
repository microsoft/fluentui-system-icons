package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretLeft12: ImageVector
  get() {
    if (_caretLeft12 != null) {
      return _caretLeft12!!
    }
    _caretLeft12 = fluentIcon(name = "Regular.CaretLeft12", 12f) {
      materialPath {
          moveTo(8.0F, 3.994F)
          curveTo(8.0F, 3.107F, 6.93F, 2.66F, 6.3F, 3.282F)
          lineTo(4.26F, 5.288F)
          curveToRelative(-0.398F, 0.391F, -0.398F, 1.033F, 0.0F, 1.425F)
          lineTo(6.3F, 8.719F)
          curveTo(6.93F, 9.34F, 8.0F, 8.893F, 8.0F, 8.006F)
          verticalLineTo(3.994F)
          close()
          moveTo(4.963F, 6.0F)
          lineTo(7.0F, 3.994F)
          verticalLineToRelative(4.012F)
          lineTo(4.963F, 6.0F)
          close()        
      }
    }
    return _caretLeft12!!
  }

private var _caretLeft12: ImageVector? = null
