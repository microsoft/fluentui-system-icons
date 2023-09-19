package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Archive28: ImageVector
  get() {
    if (_archive28 != null) {
      return _archive28!!
    }
    _archive28 = fluentIcon(name = "Filled.Archive28", 28f) {
      materialPath {
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(19.0F)
          curveTo(24.328F, 3.0F, 25.0F, 3.672F, 25.0F, 4.5F)
          verticalLineToRelative(2.0F)
          curveTo(25.0F, 7.328F, 24.328F, 8.0F, 23.5F, 8.0F)
          horizontalLineToRelative(-19.0F)
          curveTo(3.672F, 8.0F, 3.0F, 7.328F, 3.0F, 6.5F)
          verticalLineToRelative(-2.0F)
          close()
          moveToRelative(1.0F, 5.0F)
          horizontalLineToRelative(20.0F)
          verticalLineToRelative(10.75F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineTo(8.75F)
          curveTo(6.127F, 25.0F, 4.0F, 22.873F, 4.0F, 20.25F)
          verticalLineTo(9.5F)
          close()
          moveToRelative(7.75F, 3.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(11.336F, 14.0F, 11.75F, 14.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-4.5F)
          close()        
      }
    }
    return _archive28!!
  }

private var _archive28: ImageVector? = null
