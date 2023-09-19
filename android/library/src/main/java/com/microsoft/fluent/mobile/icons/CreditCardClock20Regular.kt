package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CreditCardClock20: ImageVector
  get() {
    if (_creditCardClock20 != null) {
      return _creditCardClock20!!
    }
    _creditCardClock20 = fluentIcon(name = "Regular.CreditCardClock20", 20f) {
      materialPath {
          moveTo(4.75F, 4.0F)
          curveTo(3.231F, 4.0F, 2.0F, 5.231F, 2.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveTo(2.0F, 14.769F, 3.231F, 16.0F, 4.75F, 16.0F)
          horizontalLineToRelative(4.457F)
          curveToRelative(-0.091F, -0.322F, -0.154F, -0.657F, -0.185F, -1.0F)
          horizontalLineTo(4.75F)
          curveTo(3.784F, 15.0F, 3.0F, 14.216F, 3.0F, 13.25F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(15.0F)
          verticalLineTo(6.75F)
          curveTo(18.0F, 5.231F, 16.769F, 4.0F, 15.25F, 4.0F)
          horizontalLineTo(4.75F)
          close()
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 5.784F, 3.784F, 5.0F, 4.75F, 5.0F)
          horizontalLineToRelative(10.5F)
          curveTo(16.216F, 5.0F, 17.0F, 5.784F, 17.0F, 6.75F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.75F)
          close()
          moveToRelative(16.0F, 7.75F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(10.0F, 16.985F, 10.0F, 14.5F)
          reflectiveCurveToRelative(2.015F, -4.5F, 4.5F, -4.5F)
          reflectiveCurveToRelative(4.5F, 2.015F, 4.5F, 4.5F)
          close()
          moveTo(14.5F, 12.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineTo(16.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.276F, 14.0F, 16.0F, 14.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(-1.5F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _creditCardClock20!!
  }

private var _creditCardClock20: ImageVector? = null
