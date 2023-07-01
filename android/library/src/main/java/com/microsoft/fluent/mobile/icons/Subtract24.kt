package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Subtract24: ImageVector
  get() {
    if (_subtract24 != null) {
      return _subtract24!!
    }
    _subtract24 = fluentIcon(name = "Regular.Subtract24", 24f) {
      materialPath {
          moveTo(3.754F, 12.5F)
          horizontalLineToRelative(16.492F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(20.66F, 11.0F, 20.246F, 11.0F)
          horizontalLineTo(3.754F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          close()        
      }
    }
    return _subtract24!!
  }

private var _subtract24: ImageVector? = null
