package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CreditCardClock32: ImageVector
  get() {
    if (_creditCardClock32 != null) {
      return _creditCardClock32!!
    }
    _creditCardClock32 = fluentIcon(name = "Filled.CreditCardClock32", 32f) {
      materialPath {
          moveTo(6.5F, 5.0F)
          curveTo(4.015F, 5.0F, 2.0F, 7.015F, 2.0F, 9.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(28.0F)
          verticalLineTo(9.5F)
          curveTo(30.0F, 7.015F, 27.985F, 5.0F, 25.5F, 5.0F)
          horizontalLineToRelative(-19.0F)
          close()
          moveTo(2.0F, 22.5F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(28.0F)
          verticalLineToRelative(4.343F)
          curveTo(28.35F, 15.303F, 25.827F, 14.0F, 23.0F, 14.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          curveToRelative(0.0F, 1.437F, 0.337F, 2.795F, 0.935F, 4.0F)
          horizontalLineTo(6.5F)
          curveTo(4.015F, 27.0F, 2.0F, 24.985F, 2.0F, 22.5F)
          close()
          moveToRelative(21.0F, 8.0F)
          curveToRelative(-4.142F, 0.0F, -7.5F, -3.358F, -7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, 3.358F, -7.5F, 7.5F, -7.5F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, -3.358F, 7.5F, -7.5F, 7.5F)
          close()
          moveTo(22.75F, 18.0F)
          curveTo(22.336F, 18.0F, 22.0F, 18.336F, 22.0F, 18.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(23.5F)
          verticalLineToRelative(-3.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()        
      }
    }
    return _creditCardClock32!!
  }

private var _creditCardClock32: ImageVector? = null
