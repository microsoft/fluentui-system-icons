package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColorFillAccent24: ImageVector
  get() {
    if (_colorFillAccent24 != null) {
      return _colorFillAccent24!!
    }
    _colorFillAccent24 = fluentIcon(name = "Regular.ColorFillAccent24", 24f) {
      materialPath {
          moveTo(13.052F, 15.0F)
          curveToRelative(0.273F, 1.61F, 1.58F, 3.0F, 3.448F, 3.0F)
          curveToRelative(1.842F, 0.0F, 3.14F, -1.354F, 3.436F, -2.936F)
          curveTo(20.552F, 15.251F, 21.0F, 15.824F, 21.0F, 16.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(3.672F, 21.0F, 3.0F, 20.328F, 3.0F, 19.5F)
          verticalLineToRelative(-3.0F)
          curveTo(3.0F, 15.672F, 3.672F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(3.09F)
          curveToRelative(1.144F, 1.047F, 2.903F, 1.047F, 4.048F, 0.0F)
          horizontalLineToRelative(1.414F)
          close()        
      }
    }
    return _colorFillAccent24!!
  }

private var _colorFillAccent24: ImageVector? = null
