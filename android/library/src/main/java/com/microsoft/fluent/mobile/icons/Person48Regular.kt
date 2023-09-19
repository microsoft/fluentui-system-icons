package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Person48: ImageVector
  get() {
    if (_person48 != null) {
      return _person48!!
    }
    _person48 = fluentIcon(name = "Regular.Person48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(-5.523F, 0.0F, -10.0F, 4.477F, -10.0F, 10.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(29.523F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(-7.5F, 10.0F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          close()
          moveToRelative(-4.25F, 14.0F)
          curveTo(9.903F, 28.0F, 8.0F, 29.901F, 8.0F, 32.249F)
          verticalLineTo(33.0F)
          curveToRelative(0.0F, 3.755F, 1.942F, 6.567F, 4.92F, 8.38F)
          curveTo(15.85F, 43.163F, 19.786F, 44.0F, 24.0F, 44.0F)
          reflectiveCurveToRelative(8.15F, -0.837F, 11.08F, -2.62F)
          curveTo(38.058F, 39.567F, 40.0F, 36.755F, 40.0F, 33.0F)
          verticalLineToRelative(-0.751F)
          curveTo(40.0F, 29.9F, 38.097F, 28.0F, 35.75F, 28.0F)
          horizontalLineToRelative(-23.5F)
          close()
          moveToRelative(-1.75F, 4.249F)
          curveToRelative(0.0F, -0.966F, 0.783F, -1.749F, 1.75F, -1.749F)
          horizontalLineToRelative(23.5F)
          curveToRelative(0.967F, 0.0F, 1.75F, 0.783F, 1.75F, 1.749F)
          verticalLineTo(33.0F)
          curveToRelative(0.0F, 2.744F, -1.36F, 4.808F, -3.72F, 6.245F)
          curveTo(31.37F, 40.712F, 27.932F, 41.5F, 24.0F, 41.5F)
          curveToRelative(-3.932F, 0.0F, -7.37F, -0.788F, -9.78F, -2.255F)
          curveToRelative(-2.36F, -1.437F, -3.72F, -3.5F, -3.72F, -6.245F)
          verticalLineToRelative(-0.751F)
          close()        
      }
    }
    return _person48!!
  }

private var _person48: ImageVector? = null
