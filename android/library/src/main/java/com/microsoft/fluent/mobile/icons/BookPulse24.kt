package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookPulse24: ImageVector
  get() {
    if (_bookPulse24 != null) {
      return _bookPulse24!!
    }
    _bookPulse24 = fluentIcon(name = "Filled.BookPulse24", 24f) {
      materialPath {
          moveTo(4.0F, 4.5F)
          curveTo(4.0F, 3.12F, 5.12F, 2.0F, 6.5F, 2.0F)
          horizontalLineTo(18.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.12F, 2.5F, 2.5F)
          verticalLineToRelative(14.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(5.5F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(13.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(20.164F, 22.0F, 19.75F, 22.0F)
          horizontalLineTo(6.5F)
          curveTo(5.12F, 22.0F, 4.0F, 20.88F, 4.0F, 19.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveToRelative(7.69F, 2.958F)
          curveTo(11.578F, 7.188F, 11.317F, 7.01F, 11.025F, 7.0F)
          curveToRelative(-0.293F, -0.009F, -0.564F, 0.153F, -0.695F, 0.415F)
          lineTo(8.786F, 10.5F)
          horizontalLineTo(7.75F)
          curveTo(7.336F, 10.5F, 7.0F, 10.836F, 7.0F, 11.25F)
          reflectiveCurveTo(7.336F, 12.0F, 7.75F, 12.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(0.284F, 0.0F, 0.544F, -0.16F, 0.67F, -0.415F)
          lineToRelative(1.023F, -2.044F)
          lineToRelative(2.116F, 5.001F)
          curveToRelative(0.11F, 0.262F, 0.36F, 0.438F, 0.643F, 0.457F)
          curveToRelative(0.284F, 0.018F, 0.553F, -0.126F, 0.696F, -0.371F)
          lineTo(15.93F, 12.0F)
          horizontalLineToRelative(0.819F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(15.5F)
          curveToRelative(-0.267F, 0.0F, -0.513F, 0.142F, -0.648F, 0.372F)
          lineToRelative(-0.995F, 1.706F)
          lineToRelative(-2.166F, -5.12F)
          close()        
      }
    }
    return _bookPulse24!!
  }

private var _bookPulse24: ImageVector? = null
