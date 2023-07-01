package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RectangleLandscape12: ImageVector
  get() {
    if (_rectangleLandscape12 != null) {
      return _rectangleLandscape12!!
    }
    _rectangleLandscape12 = fluentIcon(name = "Filled.RectangleLandscape12", 12f) {
      materialPath {
          moveTo(3.0F, 2.0F)
          curveTo(1.895F, 2.0F, 1.0F, 2.895F, 1.0F, 4.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _rectangleLandscape12!!
  }

private var _rectangleLandscape12: ImageVector? = null
