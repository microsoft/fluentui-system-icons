package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CaretRight12: ImageVector
  get() {
    if (_caretRight12 != null) {
      return _caretRight12!!
    }
    _caretRight12 = fluentIcon(name = "Filled.CaretRight12", 12f) {
      materialPath {
          moveTo(5.702F, 3.282F)
          curveTo(5.069F, 2.659F, 4.0F, 3.107F, 4.0F, 3.994F)
          verticalLineToRelative(4.012F)
          curveTo(4.0F, 8.893F, 5.07F, 9.341F, 5.702F, 8.72F)
          lineToRelative(2.037F, -2.006F)
          curveToRelative(0.398F, -0.392F, 0.398F, -1.034F, 0.0F, -1.425F)
          lineTo(5.702F, 3.282F)
          close()        
      }
    }
    return _caretRight12!!
  }

private var _caretRight12: ImageVector? = null
