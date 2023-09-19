package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneDesktop32: ImageVector
  get() {
    if (_phoneDesktop32 != null) {
      return _phoneDesktop32!!
    }
    _phoneDesktop32 = fluentIcon(name = "Filled.PhoneDesktop32", 32f) {
      materialPath {
          moveTo(5.0F, 5.25F)
          curveTo(5.0F, 3.455F, 6.455F, 2.0F, 8.25F, 2.0F)
          horizontalLineToRelative(18.5F)
          curveTo(28.545F, 2.0F, 30.0F, 3.455F, 30.0F, 5.25F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(22.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-9.5F)
          verticalLineToRelative(-2.0F)
          horizontalLineTo(20.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(-5.75F)
          curveToRelative(0.0F, -2.623F, -2.127F, -4.75F, -4.75F, -4.75F)
          horizontalLineToRelative(-4.5F)
          curveToRelative(-0.084F, 0.0F, -0.167F, 0.002F, -0.25F, 0.007F)
          verticalLineTo(5.25F)
          close()
          moveToRelative(-3.0F, 10.0F)
          curveTo(2.0F, 13.455F, 3.455F, 12.0F, 5.25F, 12.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(11.5F)
          curveTo(13.0F, 28.545F, 11.545F, 30.0F, 9.75F, 30.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(3.455F, 30.0F, 2.0F, 28.545F, 2.0F, 26.75F)
          verticalLineToRelative(-11.5F)
          close()
          moveTo(6.0F, 26.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          close()        
      }
    }
    return _phoneDesktop32!!
  }

private var _phoneDesktop32: ImageVector? = null
