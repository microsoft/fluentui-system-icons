package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CreditCardPerson24: ImageVector
  get() {
    if (_creditCardPerson24 != null) {
      return _creditCardPerson24!!
    }
    _creditCardPerson24 = fluentIcon(name = "Regular.CreditCardPerson24", 24f) {
      materialPath {
          moveTo(5.25F, 5.0F)
          curveTo(3.455F, 5.0F, 2.0F, 6.455F, 2.0F, 8.25F)
          verticalLineToRelative(7.5F)
          curveTo(2.0F, 17.545F, 3.455F, 19.0F, 5.25F, 19.0F)
          horizontalLineToRelative(7.859F)
          curveToRelative(0.178F, -0.615F, 0.563F, -1.142F, 1.075F, -1.5F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(11.0F)
          horizontalLineTo(22.0F)
          verticalLineTo(8.25F)
          curveTo(22.0F, 6.455F, 20.545F, 5.0F, 18.75F, 5.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(20.5F, 8.25F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(-17.0F)
          verticalLineTo(8.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          close()
          moveTo(21.0F, 14.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          reflectiveCurveTo(16.0F, 15.88F, 16.0F, 14.5F)
          reflectiveCurveToRelative(1.12F, -2.5F, 2.5F, -2.5F)
          reflectiveCurveToRelative(2.5F, 1.12F, 2.5F, 2.5F)
          close()
          moveToRelative(2.0F, 5.375F)
          curveTo(23.0F, 21.431F, 21.714F, 23.0F, 18.5F, 23.0F)
          reflectiveCurveTo(14.0F, 21.437F, 14.0F, 19.875F)
          verticalLineToRelative(-0.103F)
          curveTo(14.0F, 18.792F, 14.794F, 18.0F, 15.773F, 18.0F)
          horizontalLineToRelative(5.454F)
          curveTo(22.207F, 18.0F, 23.0F, 18.793F, 23.0F, 19.772F)
          verticalLineToRelative(0.103F)
          close()        
      }
    }
    return _creditCardPerson24!!
  }

private var _creditCardPerson24: ImageVector? = null
