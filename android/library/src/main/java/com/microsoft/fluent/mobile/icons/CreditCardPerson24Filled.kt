package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CreditCardPerson24: ImageVector
  get() {
    if (_creditCardPerson24 != null) {
      return _creditCardPerson24!!
    }
    _creditCardPerson24 = fluentIcon(name = "Filled.CreditCardPerson24", 24f) {
      materialPath {
          moveTo(5.25F, 5.0F)
          curveTo(3.455F, 5.0F, 2.0F, 6.455F, 2.0F, 8.25F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(20.0F)
          verticalLineTo(8.25F)
          curveTo(22.0F, 6.455F, 20.545F, 5.0F, 18.75F, 5.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(2.0F, 15.75F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(16.5F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.567F, -3.5F, 3.5F)
          curveToRelative(0.0F, 0.98F, 0.402F, 1.865F, 1.05F, 2.5F)
          horizontalLineToRelative(-0.277F)
          curveToRelative(-1.263F, 0.0F, -2.33F, 0.844F, -2.664F, 2.0F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 19.0F, 2.0F, 17.545F, 2.0F, 15.75F)
          close()
          moveToRelative(19.0F, -1.25F)
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
