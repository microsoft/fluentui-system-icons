package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.History32: ImageVector
  get() {
    if (_history32 != null) {
      return _history32!!
    }
    _history32 = fluentIcon(name = "Filled.History32", 32f) {
      materialPath {
          moveTo(16.0F, 5.0F)
          curveToRelative(6.075F, 0.0F, 11.0F, 4.925F, 11.0F, 11.0F)
          reflectiveCurveToRelative(-4.925F, 11.0F, -11.0F, 11.0F)
          reflectiveCurveTo(5.0F, 22.075F, 5.0F, 16.0F)
          curveToRelative(0.0F, -0.218F, 0.006F, -0.435F, 0.019F, -0.65F)
          curveTo(5.06F, 14.643F, 4.529F, 14.0F, 3.82F, 14.0F)
          curveToRelative(-0.674F, 0.0F, -1.254F, 0.494F, -1.295F, 1.167F)
          curveTo(2.51F, 15.442F, 2.5F, 15.72F, 2.5F, 16.0F)
          curveToRelative(0.0F, 7.456F, 6.044F, 13.5F, 13.5F, 13.5F)
          reflectiveCurveTo(29.5F, 23.456F, 29.5F, 16.0F)
          reflectiveCurveTo(23.456F, 2.5F, 16.0F, 2.5F)
          curveToRelative(-3.221F, 0.0F, -6.18F, 1.128F, -8.5F, 3.011F)
          verticalLineTo(4.75F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveTo(5.0F, 4.06F, 5.0F, 4.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveTo(11.44F, 8.0F, 10.75F, 8.0F)
          horizontalLineToRelative(-2.3F)
          curveToRelative(1.97F, -1.86F, 4.627F, -3.0F, 7.55F, -3.0F)
          close()
          moveToRelative(1.5F, 4.25F)
          curveTo(17.5F, 8.56F, 16.94F, 8.0F, 16.25F, 8.0F)
          reflectiveCurveTo(15.0F, 8.56F, 15.0F, 9.25F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          reflectiveCurveToRelative(-0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineTo(17.5F)
          verticalLineTo(9.25F)
          close()        
      }
    }
    return _history32!!
  }

private var _history32: ImageVector? = null
