package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CalendarShield32: ImageVector
  get() {
    if (_calendarShield32 != null) {
      return _calendarShield32!!
    }
    _calendarShield32 = fluentIcon(name = "Filled.CalendarShield32", 32f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineTo(9.0F)
          horizontalLineToRelative(26.0F)
          verticalLineTo(7.5F)
          curveTo(29.0F, 5.015F, 26.985F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveTo(29.0F, 11.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(13.5F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(9.467F)
          curveToRelative(-0.144F, -0.157F, -0.283F, -0.318F, -0.416F, -0.483F)
          curveTo(15.18F, 26.82F, 14.5F, 24.8F, 14.5F, 22.533F)
          verticalLineTo(18.5F)
          curveToRelative(0.0F, -0.995F, 0.732F, -1.84F, 1.717F, -1.98F)
          curveToRelative(2.033F, -0.29F, 3.918F, -1.014F, 5.674F, -2.184F)
          curveToRelative(0.671F, -0.448F, 1.547F, -0.448F, 2.218F, 0.0F)
          curveToRelative(1.529F, 1.019F, 3.155F, 1.699F, 4.891F, 2.05F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(0.0F, 6.913F)
          curveToRelative(-2.042F, -0.37F, -3.949F, -1.146F, -5.723F, -2.329F)
          curveToRelative(-0.168F, -0.112F, -0.386F, -0.112F, -0.554F, 0.0F)
          curveToRelative(-1.938F, 1.292F, -4.035F, 2.098F, -6.294F, 2.421F)
          curveTo(16.183F, 18.04F, 16.0F, 18.251F, 16.0F, 18.5F)
          verticalLineToRelative(4.033F)
          curveToRelative(0.0F, 2.648F, 1.068F, 4.81F, 3.174F, 6.467F)
          curveToRelative(0.988F, 0.778F, 2.204F, 1.445F, 3.646F, 2.0F)
          curveToRelative(0.116F, 0.044F, 0.244F, 0.044F, 0.36F, 0.0F)
          curveToRelative(4.513F, -1.736F, 6.82F, -4.575F, 6.82F, -8.467F)
          verticalLineTo(18.5F)
          curveToRelative(0.0F, -0.249F, -0.183F, -0.46F, -0.43F, -0.495F)
          curveToRelative(-0.19F, -0.027F, -0.38F, -0.058F, -0.57F, -0.092F)
          close()        
      }
    }
    return _calendarShield32!!
  }

private var _calendarShield32: ImageVector? = null
