package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CreditCardClock24: ImageVector
  get() {
    if (_creditCardClock24 != null) {
      return _creditCardClock24!!
    }
    _creditCardClock24 = fluentIcon(name = "Filled.CreditCardClock24", 24f) {
      materialPath {
          moveTo(2.0F, 8.25F)
          curveTo(2.0F, 6.455F, 3.455F, 5.0F, 5.25F, 5.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 5.0F, 22.0F, 6.455F, 22.0F, 8.25F)
          verticalLineTo(9.5F)
          horizontalLineTo(2.0F)
          verticalLineTo(8.25F)
          close()
          moveTo(11.174F, 19.0F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 19.0F, 2.0F, 17.545F, 2.0F, 15.75F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(15.5F)
          curveToRelative(-3.59F, 0.0F, -6.5F, 2.91F, -6.5F, 6.5F)
          curveToRelative(0.0F, 0.516F, 0.06F, 1.018F, 0.174F, 1.5F)
          close()
          moveToRelative(6.326F, -7.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveTo(20.538F, 23.0F, 17.5F, 23.0F)
          reflectiveCurveTo(12.0F, 20.538F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          close()
          moveToRelative(2.0F, 5.5F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _creditCardClock24!!
  }

private var _creditCardClock24: ImageVector? = null
