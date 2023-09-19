package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tab24: ImageVector
  get() {
    if (_tab24 != null) {
      return _tab24!!
    }
    _tab24 = fluentIcon(name = "Filled.Tab24", 24f) {
      materialPath {
          moveTo(3.0F, 5.75F)
          curveTo(3.0F, 4.231F, 4.231F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(12.5F)
          curveTo(19.769F, 3.0F, 21.0F, 4.231F, 21.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineTo(5.75F)
          curveTo(4.231F, 21.0F, 3.0F, 19.769F, 3.0F, 18.25F)
          verticalLineTo(5.75F)
          close()
          moveTo(5.75F, 5.0F)
          curveTo(5.336F, 5.0F, 5.0F, 5.336F, 5.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveTo(5.0F, 18.664F, 5.336F, 19.0F, 5.75F, 19.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(5.75F)
          curveTo(19.0F, 5.336F, 18.664F, 5.0F, 18.25F, 5.0F)
          horizontalLineTo(5.75F)
          close()        
      }
    }
    return _tab24!!
  }

private var _tab24: ImageVector? = null
