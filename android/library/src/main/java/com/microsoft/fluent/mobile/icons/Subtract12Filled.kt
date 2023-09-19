package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Subtract12: ImageVector
  get() {
    if (_subtract12 != null) {
      return _subtract12!!
    }
    _subtract12 = fluentIcon(name = "Filled.Subtract12", 12f) {
      materialPath {
          moveTo(2.0F, 6.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(6.5F)
          curveTo(9.664F, 5.25F, 10.0F, 5.586F, 10.0F, 6.0F)
          reflectiveCurveTo(9.664F, 6.75F, 9.25F, 6.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(2.336F, 6.75F, 2.0F, 6.414F, 2.0F, 6.0F)
          close()        
      }
    }
    return _subtract12!!
  }

private var _subtract12: ImageVector? = null
