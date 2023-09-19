package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CreditCardPerson20: ImageVector
  get() {
    if (_creditCardPerson20 != null) {
      return _creditCardPerson20!!
    }
    _creditCardPerson20 = fluentIcon(name = "Filled.CreditCardPerson20", 20f) {
      materialPath {
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.231F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(10.5F)
          curveTo(16.769F, 4.0F, 18.0F, 5.231F, 18.0F, 6.75F)
          verticalLineTo(8.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(6.75F)
          close()
          moveTo(2.0F, 9.0F)
          horizontalLineToRelative(12.5F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          curveToRelative(0.0F, 0.773F, 0.293F, 1.478F, 0.773F, 2.01F)
          curveToRelative(-1.107F, 0.1F, -2.006F, 0.921F, -2.223F, 1.99F)
          horizontalLineToRelative(-5.3F)
          curveTo(3.231F, 16.0F, 2.0F, 14.769F, 2.0F, 13.25F)
          verticalLineTo(9.0F)
          close()
          moveToRelative(14.5F, 3.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.245F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(11.0F, 17.75F, 11.0F, 16.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _creditCardPerson20!!
  }

private var _creditCardPerson20: ImageVector? = null
