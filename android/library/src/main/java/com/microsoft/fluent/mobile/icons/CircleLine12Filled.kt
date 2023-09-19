package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleLine12: ImageVector
  get() {
    if (_circleLine12 != null) {
      return _circleLine12!!
    }
    _circleLine12 = fluentIcon(name = "Filled.CircleLine12", 12f) {
      materialPath {
          moveTo(1.0F, 6.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          horizontalLineTo(1.0F)
          close()
          moveToRelative(0.1F, 1.0F)
          curveToRelative(0.463F, 2.282F, 2.481F, 4.0F, 4.9F, 4.0F)
          curveToRelative(2.419F, 0.0F, 4.437F, -1.718F, 4.9F, -4.0F)
          horizontalLineTo(1.1F)
          close()        
      }
    }
    return _circleLine12!!
  }

private var _circleLine12: ImageVector? = null
