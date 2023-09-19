package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretRight12: ImageVector
  get() {
    if (_caretRight12 != null) {
      return _caretRight12!!
    }
    _caretRight12 = fluentIcon(name = "Regular.CaretRight12", 12f) {
      materialPath {
          moveTo(4.0F, 3.994F)
          curveTo(4.0F, 3.107F, 5.07F, 2.66F, 5.702F, 3.282F)
          lineToRelative(2.037F, 2.006F)
          curveToRelative(0.398F, 0.391F, 0.398F, 1.033F, 0.0F, 1.425F)
          lineTo(5.702F, 8.719F)
          curveTo(5.069F, 9.34F, 4.0F, 8.893F, 4.0F, 8.006F)
          verticalLineTo(3.994F)
          close()
          moveTo(7.037F, 6.0F)
          lineTo(5.0F, 3.994F)
          verticalLineToRelative(4.012F)
          lineTo(7.037F, 6.0F)
          close()        
      }
    }
    return _caretRight12!!
  }

private var _caretRight12: ImageVector? = null
