package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Subtract20: ImageVector
  get() {
    if (_subtract20 != null) {
      return _subtract20!!
    }
    _subtract20 = fluentIcon(name = "Filled.Subtract20", 20f) {
      materialPath {
          moveTo(3.0F, 10.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(12.5F)
          curveTo(16.664F, 9.25F, 17.0F, 9.586F, 17.0F, 10.0F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 10.75F, 3.0F, 10.414F, 3.0F, 10.0F)
          close()        
      }
    }
    return _subtract20!!
  }

private var _subtract20: ImageVector? = null
