package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Temperature32: ImageVector
  get() {
    if (_temperature32 != null) {
      return _temperature32!!
    }
    _temperature32 = fluentIcon(name = "Filled.Temperature32", 32f) {
      materialPath {
          moveTo(16.0F, 5.5F)
          curveToRelative(-1.795F, 0.0F, -3.25F, 1.455F, -3.25F, 3.25F)
          verticalLineToRelative(9.754F)
          lineToRelative(-0.313F, 0.354F)
          curveToRelative(-0.74F, 0.838F, -1.187F, 1.936F, -1.187F, 3.142F)
          curveToRelative(0.0F, 2.623F, 2.127F, 4.75F, 4.75F, 4.75F)
          reflectiveCurveToRelative(4.75F, -2.127F, 4.75F, -4.75F)
          curveToRelative(0.0F, -1.206F, -0.447F, -2.303F, -1.187F, -3.142F)
          lineToRelative(-0.313F, -0.354F)
          verticalLineTo(8.75F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          close()
          moveToRelative(-5.75F, 3.25F)
          curveTo(10.25F, 5.574F, 12.824F, 3.0F, 16.0F, 3.0F)
          reflectiveCurveToRelative(5.75F, 2.574F, 5.75F, 5.75F)
          verticalLineToRelative(8.834F)
          curveToRelative(0.94F, 1.222F, 1.5F, 2.755F, 1.5F, 4.416F)
          curveToRelative(0.0F, 4.004F, -3.246F, 7.25F, -7.25F, 7.25F)
          reflectiveCurveTo(8.75F, 26.004F, 8.75F, 22.0F)
          curveToRelative(0.0F, -1.661F, 0.56F, -3.194F, 1.5F, -4.416F)
          verticalLineTo(8.75F)
          close()
          moveToRelative(4.5F, 3.5F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(7.022F)
          curveTo(18.283F, 19.746F, 19.0F, 20.789F, 19.0F, 22.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          curveToRelative(0.0F, -1.21F, 0.717F, -2.254F, 1.75F, -2.728F)
          verticalLineTo(12.25F)
          close()        
      }
    }
    return _temperature32!!
  }

private var _temperature32: ImageVector? = null
