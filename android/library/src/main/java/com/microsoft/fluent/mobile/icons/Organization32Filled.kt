package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Organization32: ImageVector
  get() {
    if (_organization32 != null) {
      return _organization32!!
    }
    _organization32 = fluentIcon(name = "Filled.Organization32", 32f) {
      materialPath {
          moveTo(11.0F, 7.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          reflectiveCurveToRelative(5.0F, 2.239F, 5.0F, 5.0F)
          curveToRelative(0.0F, 2.42F, -1.718F, 4.437F, -4.001F, 4.9F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(5.268F)
          curveTo(23.777F, 15.0F, 25.0F, 16.223F, 25.0F, 17.733F)
          verticalLineTo(20.1F)
          curveToRelative(2.282F, 0.463F, 4.0F, 2.481F, 4.0F, 4.9F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          curveToRelative(0.0F, -2.419F, 1.718F, -4.437F, 4.0F, -4.9F)
          verticalLineToRelative(-2.368F)
          curveToRelative(0.0F, -0.405F, -0.328F, -0.733F, -0.733F, -0.733F)
          horizontalLineTo(9.733F)
          curveTo(9.328F, 16.999F, 9.0F, 17.327F, 9.0F, 17.732F)
          verticalLineTo(20.1F)
          curveToRelative(2.282F, 0.463F, 4.0F, 2.481F, 4.0F, 4.9F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          reflectiveCurveToRelative(-5.0F, -2.239F, -5.0F, -5.0F)
          curveToRelative(0.0F, -2.419F, 1.718F, -4.437F, 4.0F, -4.9F)
          verticalLineToRelative(-2.368F)
          curveToRelative(0.0F, -1.51F, 1.224F, -2.733F, 2.733F, -2.733F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(-3.1F)
          curveTo(12.717F, 11.437F, 11.0F, 9.42F, 11.0F, 7.0F)
          close()        
      }
    }
    return _organization32!!
  }

private var _organization32: ImageVector? = null
