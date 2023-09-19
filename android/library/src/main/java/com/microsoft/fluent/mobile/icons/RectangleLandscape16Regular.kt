package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RectangleLandscape16: ImageVector
  get() {
    if (_rectangleLandscape16 != null) {
      return _rectangleLandscape16!!
    }
    _rectangleLandscape16 = fluentIcon(name = "Regular.RectangleLandscape16", 16f) {
      materialPath {
          moveTo(1.0F, 5.5F)
          curveTo(1.0F, 4.12F, 2.12F, 3.0F, 3.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(13.88F, 3.0F, 15.0F, 4.12F, 15.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(2.12F, 13.0F, 1.0F, 11.88F, 1.0F, 10.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(3.5F, 4.0F)
          curveTo(2.672F, 4.0F, 2.0F, 4.672F, 2.0F, 5.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 11.328F, 2.672F, 12.0F, 3.5F, 12.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-5.0F)
          curveTo(14.0F, 4.672F, 13.328F, 4.0F, 12.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          close()        
      }
    }
    return _rectangleLandscape16!!
  }

private var _rectangleLandscape16: ImageVector? = null
