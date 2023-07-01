package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.RectangleLandscape16: ImageVector
  get() {
    if (_rectangleLandscape16 != null) {
      return _rectangleLandscape16!!
    }
    _rectangleLandscape16 = fluentIcon(name = "Filled.RectangleLandscape16", 16f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(2.12F, 3.0F, 1.0F, 4.12F, 1.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveTo(1.0F, 11.88F, 2.12F, 13.0F, 3.5F, 13.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(15.0F, 4.12F, 13.88F, 3.0F, 12.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _rectangleLandscape16!!
  }

private var _rectangleLandscape16: ImageVector? = null
