package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CaretLeft16: ImageVector
  get() {
    if (_caretLeft16 != null) {
      return _caretLeft16!!
    }
    _caretLeft16 = fluentIcon(name = "Regular.CaretLeft16", 16f) {
      materialPath {
          moveTo(9.429F, 11.864F)
          curveToRelative(0.663F, 0.461F, 1.57F, -0.013F, 1.57F, -0.821F)
          verticalLineTo(4.957F)
          curveToRelative(0.0F, -0.808F, -0.907F, -1.282F, -1.57F, -0.821F)
          lineTo(5.644F, 6.769F)
          curveToRelative(-0.857F, 0.596F, -0.857F, 1.865F, 0.0F, 2.462F)
          lineToRelative(3.785F, 2.633F)
          close()
          moveToRelative(0.57F, -0.821F)
          lineTo(6.216F, 8.41F)
          curveToRelative(-0.285F, -0.199F, -0.285F, -0.622F, 0.0F, -0.82F)
          lineTo(10.0F, 4.956F)
          verticalLineToRelative(6.086F)
          close()        
      }
    }
    return _caretLeft16!!
  }

private var _caretLeft16: ImageVector? = null
