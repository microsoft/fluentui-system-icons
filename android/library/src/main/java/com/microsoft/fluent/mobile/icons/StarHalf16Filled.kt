package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarHalf16: ImageVector
  get() {
    if (_starHalf16 != null) {
      return _starHalf16!!
    }
    _starHalf16 = fluentIcon(name = "Filled.StarHalf16", 16f) {
      materialPath {
          moveTo(8.0F, 1.6F)
          curveToRelative(-0.32F, 0.0F, -0.641F, 0.167F, -0.806F, 0.5F)
          lineTo(5.673F, 5.183F)
          lineTo(2.272F, 5.678F)
          curveToRelative(-0.739F, 0.107F, -1.033F, 1.014F, -0.5F, 1.535F)
          lineToRelative(2.462F, 2.399F)
          lineToRelative(-0.581F, 3.387F)
          curveToRelative(-0.126F, 0.736F, 0.645F, 1.296F, 1.306F, 0.949F)
          lineTo(8.0F, 12.349F)
          verticalLineTo(1.6F)
          close()        
      }
    }
    return _starHalf16!!
  }

private var _starHalf16: ImageVector? = null
