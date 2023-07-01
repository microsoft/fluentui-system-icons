package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneLaptop16: ImageVector
  get() {
    if (_phoneLaptop16 != null) {
      return _phoneLaptop16!!
    }
    _phoneLaptop16 = fluentIcon(name = "Filled.PhoneLaptop16", 16f) {
      materialPath {
          moveTo(3.0F, 4.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(8.0F)
          curveTo(13.328F, 2.5F, 14.0F, 3.172F, 14.0F, 4.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(-4.0F)
          curveTo(8.5F, 5.12F, 7.38F, 4.0F, 6.0F, 4.0F)
          horizontalLineTo(3.5F)
          curveTo(3.327F, 4.0F, 3.16F, 4.022F, 3.0F, 4.063F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(11.5F, 8.5F)
          horizontalLineToRelative(-6.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          close()
          moveTo(3.0F, 5.0F)
          curveTo(2.172F, 5.0F, 1.5F, 5.672F, 1.5F, 6.5F)
          verticalLineToRelative(6.0F)
          curveTo(1.5F, 13.328F, 2.172F, 14.0F, 3.0F, 14.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-6.0F)
          curveTo(7.5F, 5.672F, 6.828F, 5.0F, 6.0F, 5.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(1.5F, 7.5F)
          curveTo(4.224F, 12.5F, 4.0F, 12.276F, 4.0F, 12.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          reflectiveCurveTo(5.0F, 11.724F, 5.0F, 12.0F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          close()        
      }
    }
    return _phoneLaptop16!!
  }

private var _phoneLaptop16: ImageVector? = null
