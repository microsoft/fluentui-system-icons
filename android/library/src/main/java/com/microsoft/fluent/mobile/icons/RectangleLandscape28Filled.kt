package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RectangleLandscape28: ImageVector
  get() {
    if (_rectangleLandscape28 != null) {
      return _rectangleLandscape28!!
    }
    _rectangleLandscape28 = fluentIcon(name = "Filled.RectangleLandscape28", 28f) {
      materialPath {
          moveTo(5.754F, 4.0F)
          curveToRelative(-2.071F, 0.0F, -3.75F, 1.679F, -3.75F, 3.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineTo(22.25F)
          curveToRelative(2.07F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(7.75F)
          curveTo(26.0F, 5.679F, 24.32F, 4.0F, 22.25F, 4.0F)
          horizontalLineTo(5.753F)
          close()        
      }
    }
    return _rectangleLandscape28!!
  }

private var _rectangleLandscape28: ImageVector? = null
