package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PhoneEdit20: ImageVector
  get() {
    if (_phoneEdit20 != null) {
      return _phoneEdit20!!
    }
    _phoneEdit20 = fluentIcon(name = "Filled.PhoneEdit20", 20f) {
      materialPath {
          moveTo(15.81F, 1.548F)
          lineToRelative(-4.83F, 4.83F)
          curveToRelative(-0.282F, 0.28F, -0.482F, 0.634F, -0.578F, 1.02F)
          lineToRelative(-0.375F, 1.498F)
          curveToRelative(-0.162F, 0.651F, 0.428F, 1.241F, 1.079F, 1.078F)
          lineTo(12.604F, 9.6F)
          curveToRelative(0.386F, -0.097F, 0.739F, -0.296F, 1.02F, -0.578F)
          lineToRelative(4.83F, -4.83F)
          curveToRelative(0.73F, -0.73F, 0.73F, -1.914F, 0.0F, -2.644F)
          curveToRelative(-0.73F, -0.73F, -1.915F, -0.73F, -2.645F, 0.0F)
          close()
          moveTo(10.272F, 5.67F)
          lineToRelative(3.618F, -3.619F)
          curveTo(13.766F, 2.018F, 13.635F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(5.672F, 2.0F, 5.0F, 2.672F, 5.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(5.0F, 17.328F, 5.672F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(9.06F)
          lineToRelative(-0.668F, 0.67F)
          curveToRelative(-0.41F, 0.409F, -0.924F, 0.7F, -1.486F, 0.84F)
          lineToRelative(-1.498F, 0.374F)
          curveToRelative(-1.383F, 0.346F, -2.637F, -0.907F, -2.29F, -2.29F)
          lineToRelative(0.374F, -1.499F)
          curveToRelative(0.14F, -0.562F, 0.43F, -1.075F, 0.84F, -1.485F)
          close()
          moveTo(9.0F, 14.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.276F, 15.0F, 11.0F, 15.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          reflectiveCurveTo(8.724F, 14.0F, 9.0F, 14.0F)
          close()        
      }
    }
    return _phoneEdit20!!
  }

private var _phoneEdit20: ImageVector? = null
