package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Location16: ImageVector
  get() {
    if (_location16 != null) {
      return _location16!!
    }
    _location16 = fluentIcon(name = "Regular.Location16", 16f) {
      materialPath {
          moveTo(9.5F, 7.0F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveTo(6.5F, 6.172F, 6.5F, 7.0F)
          reflectiveCurveTo(7.172F, 8.5F, 8.0F, 8.5F)
          reflectiveCurveTo(9.5F, 7.828F, 9.5F, 7.0F)
          close()
          moveTo(14.0F, 7.0F)
          curveToRelative(0.0F, 2.874F, -3.097F, 6.016F, -4.841F, 7.558F)
          curveToRelative(-0.668F, 0.59F, -1.65F, 0.59F, -2.318F, 0.0F)
          curveTo(5.097F, 13.016F, 2.0F, 9.874F, 2.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveTo(3.0F, 4.239F, 3.0F, 7.0F)
          curveToRelative(0.0F, 1.108F, 0.615F, 2.395F, 1.57F, 3.683F)
          curveToRelative(0.934F, 1.258F, 2.087F, 2.377F, 2.933F, 3.126F)
          curveToRelative(0.29F, 0.256F, 0.703F, 0.256F, 0.994F, 0.0F)
          curveToRelative(0.846F, -0.749F, 2.0F, -1.867F, 2.933F, -3.126F)
          curveTo(12.385F, 9.395F, 13.0F, 8.108F, 13.0F, 7.0F)
          close()        
      }
    }
    return _location16!!
  }

private var _location16: ImageVector? = null
