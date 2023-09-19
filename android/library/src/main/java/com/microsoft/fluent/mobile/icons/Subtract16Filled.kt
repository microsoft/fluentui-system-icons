package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Subtract16: ImageVector
  get() {
    if (_subtract16 != null) {
      return _subtract16!!
    }
    _subtract16 = fluentIcon(name = "Filled.Subtract16", 16f) {
      materialPath {
          moveTo(3.0F, 8.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(8.5F)
          curveTo(12.664F, 7.25F, 13.0F, 7.586F, 13.0F, 8.0F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-8.5F)
          curveTo(3.336F, 8.75F, 3.0F, 8.414F, 3.0F, 8.0F)
          close()        
      }
    }
    return _subtract16!!
  }

private var _subtract16: ImageVector? = null
