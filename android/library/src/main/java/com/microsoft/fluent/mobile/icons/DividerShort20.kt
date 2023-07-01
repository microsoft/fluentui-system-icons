package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DividerShort20: ImageVector
  get() {
    if (_dividerShort20 != null) {
      return _dividerShort20!!
    }
    _dividerShort20 = fluentIcon(name = "Filled.DividerShort20", 20f) {
      materialPath {
          moveTo(9.75F, 3.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(9.0F, 16.664F, 9.0F, 16.25F)
          verticalLineTo(3.75F)
          curveTo(9.0F, 3.336F, 9.336F, 3.0F, 9.75F, 3.0F)
          close()        
      }
    }
    return _dividerShort20!!
  }

private var _dividerShort20: ImageVector? = null
