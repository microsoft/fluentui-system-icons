package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneTablet20: ImageVector
  get() {
    if (_phoneTablet20 != null) {
      return _phoneTablet20!!
    }
    _phoneTablet20 = fluentIcon(name = "Filled.PhoneTablet20", 20f) {
      materialPath {
          moveTo(4.0F, 4.804F)
          curveTo(4.0F, 3.794F, 4.84F, 3.0F, 5.845F, 3.0F)
          horizontalLineToRelative(10.31F)
          curveTo(17.16F, 3.0F, 18.0F, 3.793F, 18.0F, 4.804F)
          verticalLineToRelative(7.392F)
          curveTo(18.0F, 13.206F, 17.16F, 14.0F, 16.155F, 14.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 11.0F, 12.5F, 11.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(4.804F)
          close()
          moveTo(3.5F, 7.0F)
          curveTo(2.672F, 7.0F, 2.0F, 7.672F, 2.0F, 8.5F)
          verticalLineToRelative(8.0F)
          curveTo(2.0F, 17.328F, 2.672F, 18.0F, 3.5F, 18.0F)
          horizontalLineToRelative(4.0F)
          curveTo(8.328F, 18.0F, 9.0F, 17.328F, 9.0F, 16.5F)
          verticalLineToRelative(-8.0F)
          curveTo(9.0F, 7.672F, 8.328F, 7.0F, 7.5F, 7.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(1.0F, 8.5F)
          curveTo(4.5F, 15.224F, 4.724F, 15.0F, 5.0F, 15.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(6.276F, 16.0F, 6.0F, 16.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()        
      }
    }
    return _phoneTablet20!!
  }

private var _phoneTablet20: ImageVector? = null
