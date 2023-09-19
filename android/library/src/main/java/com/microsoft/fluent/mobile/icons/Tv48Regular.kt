package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Tv48: ImageVector
  get() {
    if (_tv48 != null) {
      return _tv48!!
    }
    _tv48 = fluentIcon(name = "Regular.Tv48", 48f) {
      materialPath {
          moveTo(8.75F, 8.0F)
          curveTo(6.127F, 8.0F, 4.0F, 10.127F, 4.0F, 12.75F)
          verticalLineToRelative(18.5F)
          curveTo(4.0F, 33.873F, 6.127F, 36.0F, 8.75F, 36.0F)
          horizontalLineToRelative(30.5F)
          curveToRelative(2.623F, 0.0F, 4.75F, -2.127F, 4.75F, -4.75F)
          verticalLineToRelative(-18.5F)
          curveTo(44.0F, 10.127F, 41.873F, 8.0F, 39.25F, 8.0F)
          horizontalLineTo(8.75F)
          close()
          moveTo(6.5F, 12.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(30.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(8.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineToRelative(-18.5F)
          close()
          moveToRelative(4.75F, 26.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, 0.56F, -1.25F, 1.25F)
          reflectiveCurveTo(10.56F, 42.0F, 11.25F, 42.0F)
          horizontalLineToRelative(25.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-25.5F)
          close()        
      }
    }
    return _tv48!!
  }

private var _tv48: ImageVector? = null
