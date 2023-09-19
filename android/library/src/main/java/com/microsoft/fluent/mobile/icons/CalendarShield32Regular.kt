package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CalendarShield32: ImageVector
  get() {
    if (_calendarShield32 != null) {
      return _calendarShield32!!
    }
    _calendarShield32 = fluentIcon(name = "Regular.CalendarShield32", 32f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(9.467F)
          curveToRelative(-0.144F, -0.157F, -0.283F, -0.318F, -0.416F, -0.483F)
          curveToRelative(-0.388F, -0.48F, -0.72F, -0.987F, -0.998F, -1.517F)
          horizontalLineTo(7.5F)
          curveTo(6.12F, 27.0F, 5.0F, 25.88F, 5.0F, 24.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(22.0F)
          verticalLineToRelative(4.818F)
          curveToRelative(0.65F, 0.24F, 1.317F, 0.43F, 2.0F, 0.567F)
          verticalLineTo(7.5F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveTo(29.0F, 17.913F)
          curveToRelative(0.19F, 0.034F, 0.38F, 0.065F, 0.57F, 0.092F)
          curveTo(29.818F, 18.04F, 30.0F, 18.251F, 30.0F, 18.5F)
          verticalLineToRelative(4.033F)
          curveToRelative(0.0F, 3.892F, -2.307F, 6.731F, -6.82F, 8.467F)
          curveToRelative(-0.116F, 0.044F, -0.244F, 0.044F, -0.36F, 0.0F)
          curveToRelative(-1.442F, -0.555F, -2.658F, -1.222F, -3.646F, -2.0F)
          curveToRelative(-0.764F, -0.6F, -1.39F, -1.268F, -1.88F, -2.0F)
          curveTo(16.435F, 25.712F, 16.0F, 24.222F, 16.0F, 22.533F)
          verticalLineTo(18.5F)
          curveToRelative(0.0F, -0.249F, 0.183F, -0.46F, 0.43F, -0.495F)
          curveToRelative(2.258F, -0.323F, 4.355F, -1.129F, 6.293F, -2.421F)
          curveToRelative(0.168F, -0.112F, 0.386F, -0.112F, 0.554F, 0.0F)
          curveTo(24.46F, 16.372F, 25.7F, 16.979F, 27.0F, 17.406F)
          curveToRelative(0.652F, 0.214F, 1.318F, 0.383F, 2.0F, 0.507F)
          close()
          moveTo(5.0F, 7.5F)
          curveTo(5.0F, 6.12F, 6.12F, 5.0F, 7.5F, 5.0F)
          horizontalLineToRelative(17.0F)
          curveTo(25.88F, 5.0F, 27.0F, 6.12F, 27.0F, 7.5F)
          verticalLineTo(9.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(7.5F)
          close()        
      }
    }
    return _calendarShield32!!
  }

private var _calendarShield32: ImageVector? = null
