package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RectangleLandscape20: ImageVector
  get() {
    if (_rectangleLandscape20 != null) {
      return _rectangleLandscape20!!
    }
    _rectangleLandscape20 = fluentIcon(name = "Filled.RectangleLandscape20", 20f) {
      materialPath {
          moveTo(5.0F, 4.0F)
          curveTo(3.343F, 4.0F, 2.0F, 5.343F, 2.0F, 7.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(5.0F)
          close()        
      }
    }
    return _rectangleLandscape20!!
  }

private var _rectangleLandscape20: ImageVector? = null
