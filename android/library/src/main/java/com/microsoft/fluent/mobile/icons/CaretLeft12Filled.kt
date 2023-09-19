package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretLeft12: ImageVector
  get() {
    if (_caretLeft12 != null) {
      return _caretLeft12!!
    }
    _caretLeft12 = fluentIcon(name = "Filled.CaretLeft12", 12f) {
      materialPath {
          moveTo(6.299F, 3.282F)
          curveTo(6.93F, 2.659F, 8.0F, 3.107F, 8.0F, 3.994F)
          verticalLineToRelative(4.012F)
          curveTo(8.0F, 8.893F, 6.93F, 9.341F, 6.3F, 8.72F)
          lineTo(4.26F, 6.713F)
          curveToRelative(-0.398F, -0.392F, -0.398F, -1.034F, 0.0F, -1.425F)
          lineTo(6.3F, 3.282F)
          close()        
      }
    }
    return _caretLeft12!!
  }

private var _caretLeft12: ImageVector? = null
